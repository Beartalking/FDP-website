#!/usr/bin/env node
// Port an Obsidian teardown report → site MDX.
//
// Reads a `Teardown Report - X (FDP).md`, converts Obsidian `![[img]]` embeds
// (each followed by an italic `*Fig N. caption*` line) into <Figure> components,
// optimises the referenced images from the sibling 99_Assets/ folder into
// public/blog/<slug>/NN.webp, and writes content/blog/<slug>.mdx with frontmatter.
//
// Usage:
//   node scripts/port-teardown.mjs --report "<abs path to report.md>" \
//        --slug dia-the-budget-transfer --date 2026-06-03 [--tags teardown,browser]
//
// This is a focused one-shot porter (the seed of the future Obsidian sync script,
// Phase 14.5). It does NOT mutate the vault — read-only on the source.

import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const MAX_IMG_WIDTH = 1600;
const WEBP_QUALITY = 80;

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const val = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : "true";
      args[key] = val;
    }
  }
  return args;
}

async function findAsset(reportDir, filename) {
  // Obsidian resolves wikilinks vault-wide by basename, so an image referenced
  // from the Arc report can live in the parent Product Teardown/99_Assets/.
  // Check, in order: sibling 99_Assets, parent 99_Assets, then recurse the
  // teardown root (parent dir).
  const sibling = path.join(reportDir, "99_Assets", filename);
  if (existsSync(sibling)) return sibling;
  const parentAssets = path.join(reportDir, "..", "99_Assets", filename);
  if (existsSync(parentAssets)) return parentAssets;
  // Fallback recursive — search across the whole teardown tree.
  const stack = [path.dirname(reportDir)];
  while (stack.length) {
    const dir = stack.pop();
    let entries;
    try {
      entries = await readdir(dir, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) stack.push(full);
      else if (e.name === filename) return full;
    }
  }
  return null;
}

function jsStr(s) {
  // Safe JS string literal (used for YAML frontmatter scalars).
  return JSON.stringify(s == null ? "" : s);
}

function attrStr(s) {
  // Safe value for a double-quoted MDX string attribute. MDX drops JSX
  // expression attributes ({...}) on this stack, so width/alt/caption are
  // emitted as plain string attributes. Neutralise inner double-quotes to
  // typographic quotes and escape & / < / >.
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"([^"]*)"/g, "“$1”") // paired straight quotes -> curly
    .replace(/"/g, "”"); // any stragglers
}

async function main() {
  const args = parseArgs(process.argv);
  const reportPath = args.report;
  const slug = args.slug;
  const date = args.date;
  const tags = (args.tags || "teardown")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  if (!reportPath || !slug || !date) {
    console.error("Missing required args: --report --slug --date");
    process.exit(1);
  }

  const repoRoot = process.cwd();
  const reportDir = path.dirname(reportPath);
  const raw = await readFile(reportPath, "utf8");
  const lines = raw.split(/\r?\n/);

  // ── Extract metadata ──────────────────────────────────────────────────────
  let title = "";
  let product = "";
  let teardownNumber = null;
  let excerpt = "";
  let author = "";
  let audience = "";
  let method = "";

  for (const line of lines) {
    if (!title && line.startsWith("# ")) title = line.slice(2).trim();
    const tn = line.match(/\*\*Teardown\s*#(\d+)\s*[·•]\s*(.+?)\*\*/);
    if (tn) {
      teardownNumber = Number(tn[1]);
      product = tn[2].replace(/\s*(browser|Browser)$/, "").trim();
    }
    const au = line.match(/\*\*Author:\*\*\s*(.+?)\s*$/);
    if (au) author = au[1].trim();
    const fo = line.match(/\*\*For:\*\*\s*(.+?)\s*$/);
    if (fo) audience = fo[1].trim();
    const me = line.match(/\*\*Method:\*\*\s*(.+?)\s*$/);
    if (me) method = me[1].trim();
    const th = line.match(/\*\*Thesis:\*\*\s*(.+)$/);
    if (th) excerpt = th[1].trim();
  }

  // ── Walk body, convert images + captions, drop the H1 ─────────────────────
  const imgDirRel = path.join("public", "blog", slug);
  const imgDirAbs = path.join(repoRoot, imgDirRel);
  await mkdir(imgDirAbs, { recursive: true });

  const out = [];
  let imgSeq = 0;
  let cover = "";
  let metaInserted = false;
  const imageLog = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Drop the leading H1 (title rendered by the page layout).
    if (line.startsWith("# ") && line.slice(2).trim() === title) continue;

    // Replace the top provenance blockquote with a clean <ReportMeta> card.
    // Consume the contiguous run of `>` lines plus a trailing `---` separator.
    if (!metaInserted && line.startsWith(">")) {
      let k = i;
      while (k < lines.length && lines[k].startsWith(">")) k++;
      let lastConsumed = k - 1;
      let mIdx = k;
      while (mIdx < lines.length && lines[mIdx].trim() === "") mIdx++;
      if (mIdx < lines.length && /^---+$/.test(lines[mIdx].trim())) {
        lastConsumed = mIdx;
      }
      out.push(
        `<ReportMeta author="${attrStr(author)}" audience="${attrStr(
          audience
        )}" method="${attrStr(method)}" />`
      );
      out.push("");
      metaInserted = true;
      i = lastConsumed;
      continue;
    }

    const m = line.match(/^!\[\[(.+?)\]\]\s*$/);
    if (m) {
      const filename = m[1].trim();
      imgSeq += 1;
      const nn = String(imgSeq).padStart(2, "0");
      const outName = `${nn}.webp`;
      const outAbs = path.join(imgDirAbs, outName);
      const srcAbs = await findAsset(reportDir, filename);

      // Caption: immediate next line if it is an italic *...* line.
      let caption = "";
      const next = lines[i + 1] ?? "";
      if (/^\*.+\*\s*$/.test(next.trim())) {
        caption = next.trim().replace(/^\*+|\*+$/g, "").trim();
        i += 1; // consume caption line
      }

      if (!srcAbs) {
        console.warn(`  ! asset not found: ${filename} — leaving placeholder`);
        out.push(`{/* MISSING IMAGE: ${filename} */}`);
        continue;
      }

      const info = await sharp(srcAbs)
        .resize({ width: MAX_IMG_WIDTH, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(outAbs);

      const webPath = `/blog/${slug}/${outName}`;
      if (!cover) cover = webPath;
      imageLog.push(`${nn} ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)}KB  ← ${filename}`);

      const altOrCaption = caption || `${product} teardown figure ${imgSeq}`;
      // First image is the above-the-fold LCP element → eager load.
      const priorityAttr = imgSeq === 1 ? ' priority="true"' : "";
      out.push(
        `<Figure src="${webPath}" width="${info.width}" height="${info.height}" alt="${attrStr(
          altOrCaption
        )}"${caption ? ` caption="${attrStr(caption)}"` : ""}${priorityAttr} />`
      );
      continue;
    }

    out.push(line);
  }

  // ── Compose frontmatter + body ────────────────────────────────────────────
  const fm = [
    "---",
    `title: ${jsStr(title)}`,
    `slug: ${jsStr(slug)}`,
    `date: ${jsStr(date)}`,
    `product: ${jsStr(product)}`,
    `teardownNumber: ${teardownNumber ?? "null"}`,
    `excerpt: ${jsStr(excerpt)}`,
    `cover: ${jsStr(cover)}`,
    `tags: [${tags.map(jsStr).join(", ")}]`,
    "---",
    "",
  ].join("\n");

  // Collapse 3+ blank lines to a max of 1 to keep MDX tidy.
  const body = out.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";

  const contentDir = path.join(repoRoot, "content", "blog");
  await mkdir(contentDir, { recursive: true });
  const mdxPath = path.join(contentDir, `${slug}.mdx`);
  await writeFile(mdxPath, fm + body, "utf8");

  console.log(`✓ ${title}`);
  console.log(`  → content/blog/${slug}.mdx`);
  console.log(`  → ${imgSeq} images into ${imgDirRel}/`);
  console.log(`  product=${product} #${teardownNumber} cover=${cover}`);
  imageLog.forEach((l) => console.log(`    ${l}`));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
