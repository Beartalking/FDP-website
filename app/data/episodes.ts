export interface Episode {
  number: number
  title: string
  guest: string
  company: string
  description: string
  publishDate: string
  coverImage: string
  youtubeUrl: string
  applePodcastsUrl?: string
  redcircleUrl: string
}

export const episodes: Episode[] = [
  {
    number: 53,
    title: "Why Selling Design Keeps Designers Stuck",
    guest: "Luca Richards",
    company: "Scarlo",
    description:
      "Luca runs Scarlo, a London-based product studio now taking equity in YC and Antler companies. We unpack how he went from selling $1,000 websites to sharing cap tables with venture-backed startups, and why the game has shifted from \"why design\" to \"why you.\"",
    publishDate: "2026-03-17",
    coverImage: "/images/podcast/ep01-Luca-Richards.png",
    youtubeUrl: "https://youtu.be/PAuRdX0e_XQ",
    applePodcastsUrl: "https://podcasts.apple.com/nz/podcast/53-luca-richards-scarlo-why-selling-design-keeps-designers/id1536234805?i=1000771527444",
    redcircleUrl:
      "https://redcircle.com/shows/886cd1db-e552-44b6-bb1a-0cdd030a03bc/episodes/1461cc06-3c37-4313-bd6f-8b790bce3308",
  },
  {
    number: 54,
    title: "Free Is Expensive",
    guest: "Felix Lee",
    company: "ADPList",
    description:
      "Felix Lee from ADPList on vibe coding, why 30% of Figma might disappear, and how founders become translators between design and business.",
    publishDate: "2026-03-31",
    coverImage: "/images/podcast/ep02-Felix-Lee.png",
    youtubeUrl: "https://youtu.be/Ims58n4PrNY",
    applePodcastsUrl: "https://podcasts.apple.com/nz/podcast/54-felix-lee-adplist-free-is-expensive/id1536234805?i=1000771527293",
    redcircleUrl:
      "https://redcircle.com/shows/886cd1db-e552-44b6-bb1a-0cdd030a03bc/episodes/5772de62-898e-4caf-822a-c2dbc53e58ad",
  },
]
