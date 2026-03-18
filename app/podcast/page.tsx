import Image from "next/image"
import Nav from "../components/Nav"
import { episodes } from "../data/episodes"

const platformLinks = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@beartalking",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/episode/409D8IxnXx8We6VADQ7VmE",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: "Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/design-founders/id1885803621",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.34 0A5.328 5.328 0 0 0 0 5.34v13.32A5.328 5.328 0 0 0 5.34 24h13.32A5.328 5.328 0 0 0 24 18.66V5.34A5.328 5.328 0 0 0 18.66 0H5.34zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.6-.36 1.2-.96 1.2h-.12c-.48 0-.84-.36-.96-.84-.264-1.272-.744-2.352-1.68-3.36C14.93 5.04 13.27 4.26 11.4 4.26c-3.36 0-6.12 2.76-6.12 6.12 0 2.04.96 3.84 2.52 4.92.36.24.48.72.24 1.08-.24.36-.72.48-1.08.24C4.92 15.12 3.6 12.84 3.6 10.38c0-4.26 3.48-7.812 8.265-7.812zM12 7.32c1.8 0 3.372.864 4.38 2.304.48.72.78 1.44.936 2.328.072.36-.072.72-.36.96-.12.12-.288.168-.456.168-.36 0-.648-.24-.72-.6-.096-.6-.312-1.128-.636-1.632-.72-1.08-1.92-1.728-3.24-1.728-2.208 0-3.96 1.728-3.96 3.96 0 1.2.48 2.16 1.44 2.976.36.24.36.72.12 1.08-.264.36-.72.36-1.08.12C7.2 16.2 6.36 14.616 6.36 12.6c0-3.12 2.52-5.28 5.64-5.28zm.024 4.368c.984 0 1.8.816 1.8 1.8 0 .672-.36 1.248-.888 1.56v3.168c0 .504-.408.912-.912.912a.916.916 0 0 1-.912-.912V15.12a1.8 1.8 0 0 1-.888-1.56c0-.984.816-1.872 1.8-1.872z" />
      </svg>
    ),
  },
]

export default function PodcastPage() {
  const publishedEpisodes = episodes.filter((ep) => ep.youtubeUrl)

  return (
    <div className="flex flex-col items-center bg-white">
      <header className="w-full">
        <Nav />
      </header>

      <main className="w-full">
        {/* ===== HERO ===== */}
        <section className="w-full max-w-[960px] mx-auto px-5 md:px-8 lg:px-0 pt-8 pb-10 lg:pt-12 lg:pb-14">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="w-[160px] h-[160px] lg:w-[200px] lg:h-[200px] rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.1)] shrink-0">
              <Image
                src="/images/podcast/cover.png"
                alt="Design Founders podcast logo"
                width={200}
                height={200}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-[32px] lg:text-[40px] font-semibold leading-[40px] lg:leading-[48px] tracking-[-1.4px] text-gray-900">
                Design Founders
              </h1>
              <p className="text-[16px] leading-6 tracking-[-0.8px] text-gray-700 max-w-[520px]">
                What happens when designers build companies? Hosted by Bear Liu,
                Fractional Design Partner. Conversations with designers who
                crossed from craft to commerce.
              </p>
              <div className="flex flex-wrap gap-3 mt-1">
                {platformLinks.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 h-[40px] px-4 rounded-lg text-[14px] font-semibold transition-all duration-200 bg-gray-900 text-white hover:bg-gray-700 hover:scale-[1.02]"
                  >
                    <span className="shrink-0">{platform.icon}</span>
                    {platform.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== EPISODES ===== */}
        <section className="w-full max-w-[960px] mx-auto px-5 md:px-8 lg:px-0 pb-16">
          <h2 className="text-[22px] font-semibold leading-[30px] tracking-[-1.4px] text-gray-900 mb-6">
            Episodes
          </h2>
          <div className="flex flex-col gap-6">
            {publishedEpisodes.map((ep) => (
              <article
                key={ep.number}
                className="flex flex-col sm:flex-row gap-5 rounded-2xl border border-[#e5e5ea] bg-white p-4 sm:p-5 transition-all duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-[#d0d0d4]"
              >
                <div className="w-full sm:w-[280px] aspect-video rounded-xl overflow-hidden shrink-0 bg-gray-900">
                  <Image
                    src={ep.coverImage}
                    alt={`EP${String(ep.number).padStart(2, "0")}: ${ep.title}`}
                    width={480}
                    height={270}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-medium text-gray-500">
                      EP{String(ep.number).padStart(2, "0")}
                    </span>
                    <span className="text-[12px] text-gray-400">·</span>
                    <span className="text-[12px] text-gray-500">
                      {ep.guest}, {ep.company}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-semibold leading-[26px] tracking-[-0.8px] text-gray-900">
                    {ep.title}
                  </h3>
                  <p className="text-[14px] leading-5 tracking-[-0.6px] text-gray-700">
                    {ep.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {ep.youtubeUrl && (
                      <a
                        href={ep.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        YouTube
                      </a>
                    )}
                    {ep.spotifyUrl && (
                      <a
                        href={ep.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                        </svg>
                        Spotify
                      </a>
                    )}
                    {ep.applePodcastsUrl && (
                      <a
                        href={ep.applePodcastsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M5.34 0A5.328 5.328 0 0 0 0 5.34v13.32A5.328 5.328 0 0 0 5.34 24h13.32A5.328 5.328 0 0 0 24 18.66V5.34A5.328 5.328 0 0 0 18.66 0H5.34zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.6-.36 1.2-.96 1.2h-.12c-.48 0-.84-.36-.96-.84-.264-1.272-.744-2.352-1.68-3.36C14.93 5.04 13.27 4.26 11.4 4.26c-3.36 0-6.12 2.76-6.12 6.12 0 2.04.96 3.84 2.52 4.92.36.24.48.72.24 1.08-.24.36-.72.48-1.08.24C4.92 15.12 3.6 12.84 3.6 10.38c0-4.26 3.48-7.812 8.265-7.812zM12 7.32c1.8 0 3.372.864 4.38 2.304.48.72.78 1.44.936 2.328.072.36-.072.72-.36.96-.12.12-.288.168-.456.168-.36 0-.648-.24-.72-.6-.096-.6-.312-1.128-.636-1.632-.72-1.08-1.92-1.728-3.24-1.728-2.208 0-3.96 1.728-3.96 3.96 0 1.2.48 2.16 1.44 2.976.36.24.36.72.12 1.08-.264.36-.72.36-1.08.12C7.2 16.2 6.36 14.616 6.36 12.6c0-3.12 2.52-5.28 5.64-5.28zm.024 4.368c.984 0 1.8.816 1.8 1.8 0 .672-.36 1.248-.888 1.56v3.168c0 .504-.408.912-.912.912a.916.916 0 0 1-.912-.912V15.12a1.8 1.8 0 0 1-.888-1.56c0-.984.816-1.872 1.8-1.872z" />
                        </svg>
                        Apple Podcasts
                      </a>
                    )}
                    {ep.redcircleUrl && (
                      <a
                        href={ep.redcircleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                        </svg>
                        Podcast
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="w-full max-w-[960px] flex flex-col md:flex-row items-center justify-between gap-4 px-5 md:px-8 lg:px-[60px] py-6 lg:py-0 lg:h-[96px] border-t border-gray-100">
        <p className="text-[16px] leading-6 tracking-[-0.8px] text-gray-500">
          © 2026 Bearliu.com. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/bearliu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="size-6 flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <img src="/images/social/linkedin.svg" alt="" className="size-6" />
          </a>
          <a
            href="https://x.com/bearliu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="size-6 hover:opacity-70 transition-opacity"
          >
            <img src="/images/social/x.svg" alt="" className="size-6" />
          </a>
          <a
            href="mailto:bear@beartalking.com"
            aria-label="Email"
            className="size-6 hover:opacity-70 transition-opacity"
          >
            <img src="/images/social/email.svg" alt="" className="size-6" />
          </a>
        </div>
      </footer>
    </div>
  )
}
