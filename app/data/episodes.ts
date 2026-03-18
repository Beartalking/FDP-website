export interface Episode {
  number: number
  title: string
  guest: string
  company: string
  description: string
  publishDate: string
  coverImage: string
  youtubeUrl: string
  spotifyUrl?: string
  applePodcastsUrl?: string
  redcircleUrl: string
}

export const episodes: Episode[] = [
  {
    number: 1,
    title: "Why Selling Design Keeps Designers Stuck",
    guest: "Luca Richards",
    company: "Skarlo",
    description:
      "Luca runs Skarlo, a London-based product studio now taking equity in YC and Antler companies. We unpack how he went from selling $1,000 websites to sharing cap tables with venture-backed startups, and why the game has shifted from \"why design\" to \"why you.\"",
    publishDate: "2026-03-17",
    coverImage: "/images/podcast/ep01-Luca-Richards.png",
    youtubeUrl: "https://youtu.be/PAuRdX0e_XQ",
    spotifyUrl: "https://open.spotify.com/episode/409D8IxnXx8We6VADQ7VmE",
    applePodcastsUrl: "https://podcasts.apple.com/us/podcast/ep01-why-selling-design-keeps-designers-stuck-luca/id1885803621?i=1000755744901",
    redcircleUrl:
      "https://redcircle.com/shows/c3c12e55-1f9c-4b33-8c5c-e01965485b70/episodes/7e0f9552-7d5f-4cfa-8a54-d958dc094829",
  },
  {
    number: 2,
    title: "Free Is Expensive",
    guest: "Felix Lee",
    company: "ADPList",
    description:
      "Felix Lee from ADPList on vibe coding, why 30% of Figma might disappear, and how founders become translators between design and business.",
    publishDate: "2026-03-24",
    coverImage: "/images/podcast/ep02-Felix-Lee.png",
    youtubeUrl: "",
    redcircleUrl: "",
  },
]
