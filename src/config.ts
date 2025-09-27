export const SITE = {
  website: "https://yoman.dev/",
  author: "Yogish Manjunath",
  profile: "https://yoman.dev/",
  desc: "Code, ideas, and things I'm figuring out.",
  title: "yoman.dev",
  ogImage: "yoman-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/yogishmanjunath/yoman-dev-blog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Vienna", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
