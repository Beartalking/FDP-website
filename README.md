# FDP Website — Fractional Design Partner

A single-page marketing website for Bear Liu's Fractional Design Partner service.

**Live site**: [bearliu.com](https://bearliu.com) (Vercel, auto-deploys on push to `main`)
**Repo**: [github.com/Beartalking/FDP-website](https://github.com/Beartalking/FDP-website)

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router, React 19, Turbopack)
- **Styling**: Tailwind CSS v4 (uses `@theme inline` in `globals.css`, no `tailwind.config.js`)
- **Font**: Inter (loaded via `next/font/google`)
- **Hosting**: Vercel (connected to GitHub, auto-deploys on push)
- **Design**: [Figma file](https://www.figma.com/design/e01vMMOu7Blbu0WXvHpelZ/FDP---bearliu.com?node-id=51-119)

## Project Structure

```
app/
  layout.tsx          # Root layout (Inter font, metadata)
  page.tsx            # All 9 sections of the site
  globals.css         # Tailwind v4 theme tokens + animations
  icon.svg            # Favicon
  components/
    Nav.tsx            # Sticky nav with glassmorphism (client component)
    ScrollReveal.tsx   # Scroll-triggered reveal animation wrapper
public/
  images/
    hero-bg.jpeg       # Desktop hero background
    mobile-hero.png    # Mobile hero (portrait crop)
    avatar.svg         # Bear's avatar in nav
    strategy/          # Roadmap, Slack, Loom screenshots
    case-studies/      # MovesMethod, Xero screenshots
    trust-logos/       # Xero, UXNZ, Fisher & Paykel, etc.
    social/            # LinkedIn, X, email icons
    substrates/        # Decorative background elements
plan.md               # Full implementation plan with progress
```

## Page Sections

1. **Navigation** — Sticky glassmorphism nav, hamburger on mobile, "Book Intro" CTA
2. **Hero** — Conference photo background, headline, CTA button
3. **Social Proof** — Credentials badges, trust logos (Xero, UXNZ, Fisher & Paykel, etc.)
4. **Pain Points** — 5 cards: "If you're stuck here, we should talk"
5. **Strategy** — Roadmap, Slack + Office Hours, Async delivery
6. **Case Studies** — MovesMethod App MVP, Xero Guided Setup
7. **Pricing** — Product Audit ($600) and Fractional Partnership (from $4,000/mo)
8. **CTA** — "Book a 15-minute intro" with Calendly link
9. **Footer** — Copyright, LinkedIn, X, email

## Key Links (wired in the site)

| What | URL |
|------|-----|
| Book Intro CTA | https://calendly.com/bearliu/15-mins-fdp-intro |
| Sample Audit | https://www.notion.so/bearliu/Sample-Product-Audit-2e301940987e801abc0de8ded40f12f7 |
| UX NZ Speaker | https://www.uxnewzealand.com/past-speakers/bear-liu-a |
| LinkedIn | https://www.linkedin.com/in/bearliu/ |
| X (Twitter) | https://x.com/bearliu |
| Email | bear@beartalking.com |

## How to Develop

```bash
cd "FDP website"
npm install        # First time only
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Production build (run before pushing to verify)
```

## How to Update & Deploy

1. Open terminal, navigate to `/Users/bearliu/Desktop/ClaudeCode`
2. Run `claude` to start Claude Code
3. Describe what you want to change (e.g., "Update the pricing to $900 on the FDP website")
4. Review the changes, then say "commit and push" — Vercel auto-deploys

Or manually:
```bash
cd "FDP website"
# make your edits
git add <files>
git commit -m "Description of change"
git push origin main
# Vercel deploys automatically within ~30 seconds
```

## Domain

Custom domain `bearliu.com` and `www.bearliu.com` are connected and live with HTTPS.

## Design Tokens

Defined in `app/globals.css` under `@theme inline`:

| Token | Value |
|-------|-------|
| Accent Yellow | `#F2CC0D` / `#F8D74A` (light) |
| Brown | `#A2845E` |
| Gray 900 | `#1C1C1E` |
| Gray 700 | `#4A4A4A` |
| Gray 500 | `#6F6F6F` |
| Gray 100 | `#F2F2F7` |
| Dark Card | `#111317` |
| Paper | `#FDFCF0` |

## Key Technical Decisions

- **Tailwind v4**: Theme tokens live in `globals.css` with `@theme inline` (not a config file)
- **Sticky nav**: Uses a full-width outer `<div>` wrapper; `overflow-x-hidden` is on `<body>` (not on any parent div) to avoid breaking `position: sticky`
- **All external links**: Open in new tab with `target="_blank" rel="noopener noreferrer"`
- **Responsive breakpoints**: Default = mobile, `md:` = 768px, `lg:` = 1024px
- **Directory name has a space**: Always quote the path as `"FDP website"` in terminal commands

---

# FDP 网站 — Fractional Design Partner（中文版）

Bear Liu 的 Fractional Design Partner 服务单页营销网站。

**线上地址**: [bearliu.com](https://bearliu.com)（Vercel 托管，推送到 `main` 分支自动部署）
**代码仓库**: [github.com/Beartalking/FDP-website](https://github.com/Beartalking/FDP-website)

## 技术栈

- **框架**: Next.js 16.1.6（App Router, React 19, Turbopack）
- **样式**: Tailwind CSS v4（使用 `globals.css` 中的 `@theme inline`，无 `tailwind.config.js`）
- **字体**: Inter（通过 `next/font/google` 加载）
- **托管**: Vercel（连接 GitHub，推送即部署）
- **设计稿**: [Figma 文件](https://www.figma.com/design/e01vMMOu7Blbu0WXvHpelZ/FDP---bearliu.com?node-id=51-119)

## 项目结构

```
app/
  layout.tsx          # 根布局（Inter 字体、元数据）
  page.tsx            # 网站全部 9 个区块
  globals.css         # Tailwind v4 主题变量 + 动画
  icon.svg            # 网站图标
  components/
    Nav.tsx            # 吸顶导航栏，毛玻璃效果（客户端组件）
    ScrollReveal.tsx   # 滚动触发的渐显动画组件
public/
  images/
    hero-bg.jpeg       # 桌面端 Hero 背景图
    mobile-hero.png    # 移动端 Hero（竖版裁切）
    avatar.svg         # 导航栏头像
    strategy/          # 路线图、Slack、Loom 截图
    case-studies/      # MovesMethod、Xero 案例截图
    trust-logos/       # Xero、UXNZ、Fisher & Paykel 等品牌 Logo
    social/            # LinkedIn、X、邮箱图标
    substrates/        # 装饰性背景元素
plan.md               # 完整实施计划及进度
```

## 页面区块

1. **导航** — 吸顶毛玻璃导航栏，移动端汉堡菜单，"Book Intro" CTA 按钮
2. **Hero** — 会议演讲背景图、标题、CTA 按钮
3. **社会认证** — 资质徽章、合作品牌 Logo（Xero、UXNZ、Fisher & Paykel 等）
4. **痛点** — 5 张卡片："如果你卡在这里，我们应该聊聊"
5. **策略** — 路线图、Slack + Office Hours、异步交付
6. **案例研究** — MovesMethod App MVP、Xero Guided Setup
7. **定价** — Product Audit（$600）和 Fractional Partnership（$4,000/月起）
8. **CTA** — "预约 15 分钟介绍" 链接到 Calendly
9. **页脚** — 版权信息、LinkedIn、X、邮箱

## 网站中的关键链接

| 用途 | 链接 |
|------|------|
| 预约 CTA | https://calendly.com/bearliu/15-mins-fdp-intro |
| 审计样例 | https://www.notion.so/bearliu/Sample-Product-Audit-2e301940987e801abc0de8ded40f12f7 |
| UX NZ 演讲 | https://www.uxnewzealand.com/past-speakers/bear-liu-a |
| LinkedIn | https://www.linkedin.com/in/bearliu/ |
| X (Twitter) | https://x.com/bearliu |
| 邮箱 | bear@beartalking.com |

## 本地开发

```bash
cd "FDP website"
npm install        # 仅首次需要
npm run dev        # 启动开发服务器 (http://localhost:3000)
npm run build      # 生产构建（推送前建议先跑一次验证）
```

## 如何更新和部署

1. 打开终端，进入 `/Users/bearliu/Desktop/ClaudeCode`
2. 运行 `claude` 启动 Claude Code
3. 用自然语言描述你想改什么（例如："把 FDP 网站的定价改成 $900"）
4. 确认修改后说 "commit and push" — Vercel 会自动部署

手动方式：
```bash
cd "FDP website"
# 修改代码
git add <文件>
git commit -m "修改说明"
git push origin main
# Vercel 约 30 秒内自动部署
```

## 关键技术决策

- **Tailwind v4**：主题变量定义在 `globals.css` 的 `@theme inline` 中（没有配置文件）
- **吸顶导航**：使用全宽外层 `<div>` 包裹；`overflow-x-hidden` 放在 `<body>` 上（不能放在父级 div，否则会破坏 `position: sticky`）
- **所有外部链接**：在新标签页打开（`target="_blank" rel="noopener noreferrer"`）
- **响应式断点**：默认 = 移动端，`md:` = 768px，`lg:` = 1024px
- **目录名有空格**：终端命令中需要用引号包裹 `"FDP website"`
