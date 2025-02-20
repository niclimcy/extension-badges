import { SourceBadge } from "@paperback/types";

type ExtensionType = {
  /** Provides actual content (official, scanlated, or aggregated) */
  Provider: SourceBadge;
  /** Used to track and manage content, helping users organize and monitor their reading progress */
  Tracker: SourceBadge;
  /** Tools that allow users to save, organize, and manage a personal library of content */
  ContentManager: SourceBadge;
};

/**
 * Badge definitions for various content sources, types, and formats.
 * Includes providers, trackers, and content managers.
 */
export const ExtensionTypeBadge: ExtensionType = {
  Provider: {
    label: "Content Providing",
    textColor: "#FFFFFF",
    backgroundColor: "#FF0000",
  },
  Tracker: {
    label: "Tracker",
    textColor: "#FFFFFF",
    backgroundColor: "#FF0000",
  },
  ContentManager: {
    label: "Collection Manager",
    textColor: "#FFFFFF",
    backgroundColor: "#FF0000",
  },
};

type ContentSource = {
  /** Licensed, authorized content directly from publishers. */
  Official: SourceBadge;
  /** Content translated by fan groups or unofficial teams, often without permission. */
  Scanlator: SourceBadge;
  /** Sites that collect content from other sources, typically without official translations or permissions. */
  Aggregator: SourceBadge;
};

/**
 * Badge definitions for content sources, indicating whether they are official, scanlated, or aggregated.
 */
export const ContentSourceBadge: ContentSource = {
  Official: {
    label: "Official",
    textColor: "#FFFFFF",
    backgroundColor: "#006400",
  },
  Scanlator: {
    label: "Scanlator",
    textColor: "#FFFFFF",
    backgroundColor: "#006400",
  },
  Aggregator: {
    label: "Aggregator",
    textColor: "#FFFFFF",
    backgroundColor: "#006400",
  },
};

type ContentType = {
  /** General content, safe for all audiences. */
  Safe: SourceBadge;
  /** Content suitable for older audiences, may include mild suggestive themes, partial nudity, or some violence, but not explicit. */
  Mature: SourceBadge;
  /** Explicit content, including pornographic material, adult fanfiction, and explicit themes. */
  Adult: SourceBadge;
};

/**
 * Badge definitions for content types, indicating whether they are safe for all audiences, mature, or adult.
 */
export const ContentTypeBadge: ContentType = {
  Safe: {
    label: "Safe",
    textColor: "#000000",
    backgroundColor: "#FFD700",
  },
  Mature: {
    label: "Mature",
    textColor: "#000000",
    backgroundColor: "#FFD700",
  },
  Adult: {
    label: "Adult",
    textColor: "#000000",
    backgroundColor: "#FFD700",
  },
};

type ContentFormat = {
  /** Japanese comic-style works. */
  Manga: SourceBadge;
  /** Vertical-scrolling comics, typically from Korea. */
  Webtoon: SourceBadge;
  /** Western-style comics, typically from the U.S. and Europe. */
  Comics: SourceBadge;
  /** Japanese novels, often illustrated with manga-style art. */
  LightNovel: SourceBadge;
  /** Prose-based works, not illustrated. */
  Novel: SourceBadge;
  /** Novels published online, often in serialized format. */
  WebNovel: SourceBadge;
  /** Fan-made manga/comics, typically based on existing series or original works, can be adult or general. */
  Doujinshi: SourceBadge;
  /** Fan-created stories, typically not illustrated, can be adult or general. */
  FanFiction: SourceBadge;
};

/**
 * Badge definitions for content formats, including manga, webtoons, comics, novels, and fan works.
 */
export const ContentFormatBadge: ContentFormat = {
  Manga: {
    label: "Manga",
    textColor: "#FFFFFF",
    backgroundColor: "#C71585",
  },
  Webtoon: {
    label: "Webtoon",
    textColor: "#FFFFFF",
    backgroundColor: "#C71585",
  },
  Comics: {
    label: "Comics",
    textColor: "#FFFFFF",
    backgroundColor: "#C71585",
  },
  LightNovel: {
    label: "Light Novel",
    textColor: "#FFFFFF",
    backgroundColor: "#C71585",
  },
  Novel: {
    label: "Novel",
    textColor: "#FFFFFF",
    backgroundColor: "#C71585",
  },
  WebNovel: {
    label: "Web Novel",
    textColor: "#FFFFFF",
    backgroundColor: "#C71585",
  },
  Doujinshi: {
    label: "Doujinshi",
    textColor: "#FFFFFF",
    backgroundColor: "#C71585",
  },
  FanFiction: {
    label: "Fanfiction",
    textColor: "#FFFFFF",
    backgroundColor: "#C71585",
  },
};

type ContentLanguage = {
  /** Content in the Japanese language. */
  Japanese: SourceBadge;
  /** Content in the Korean language. */
  Korean: SourceBadge;
  /** Content in the Chinese language. */
  Chinese: SourceBadge;
  /** Content in the English language. */
  English: SourceBadge;
  /** Content in the French language. */
  French: SourceBadge;
  /** Content in the Spanish language. */
  Spanish: SourceBadge;
  /** Offers content in multiple languages. */
  MultiLanguage: SourceBadge;
};

/**
 * Badge definitions for content languages, including Japanese, Korean, Chinese, English, and others.
 */
export const ContentLanguageBadge: ContentLanguage = {
  Japanese: {
    label: "Japanese",
    textColor: "#000000",
    backgroundColor: "#00ffff",
  },
  Korean: {
    label: "Korean",
    textColor: "#000000",
    backgroundColor: "#00ffff",
  },
  Chinese: {
    label: "Chinese",
    textColor: "#000000",
    backgroundColor: "#00ffff",
  },
  English: {
    label: "English",
    textColor: "#000000",
    backgroundColor: "#00ffff",
  },
  French: {
    label: "French",
    textColor: "#000000",
    backgroundColor: "#00ffff",
  },
  Spanish: {
    label: "Spanish",
    textColor: "#000000",
    backgroundColor: "#00ffff",
  },
  MultiLanguage: {
    label: "Multi Language",
    textColor: "#000000",
    backgroundColor: "#00ffff",
  },
};

type ContentReleaseSpeed = {
  /** The official release or a release simultaneous with it, typically from authorized sources. */
  Simul: SourceBadge;
  /** Content released within a few hours of the original source. */
  Fast: SourceBadge;
  /** Content released within 12 hours of the original source. */
  Regular: SourceBadge;
  /** Content released 24+ hours after the original source. */
  Slow: SourceBadge;
};

/**
 * Badge definitions for content release speeds, including fast, regular, and slow releases.
 */
export const ContentReleaseSpeedBadge: ContentReleaseSpeed = {
  Simul: {
    label: "Official Simul",
    textColor: "#000000",
    backgroundColor: "#00FF00",
  },
  Fast: {
    label: "Fast Release",
    textColor: "#000000",
    backgroundColor: "#00FF00",
  },
  Regular: {
    label: "Regular Release",
    textColor: "#000000",
    backgroundColor: "#00FF00",
  },
  Slow: {
    label: "Slow Release",
    textColor: "#000000",
    backgroundColor: "#00FF00",
  },
};

type ContentImageQuality = {
  /** High resolution with minimal compression, clear and crisp images. */
  Best: SourceBadge;
  /** Standard resolution with moderate compression, decent quality but not sharp. */
  Good: SourceBadge;
  /** Low resolution with high compression, pixelated or blurry images. */
  Bad: SourceBadge;
};

/**
 * Badge definitions for content image quality, including best, good, and bad quality images.
 */
export const ContentImageQualityBadge: ContentImageQuality = {
  Best: {
    label: "Best Images",
    textColor: "#FFFFFF",
    backgroundColor: "#0000FF",
  },
  Good: {
    label: "Good Images",
    textColor: "#FFFFFF",
    backgroundColor: "#0000FF",
  },
  Bad: {
    label: "Bad Images",
    textColor: "#FFFFFF",
    backgroundColor: "#0000FF",
  },
};

type ContentTranslation = {
  /** Professionally translated and typeset, minimal errors, and proper formatting. */
  Best: SourceBadge;
  /** Some minor errors or awkward phrasing but generally understandable. */
  Good: SourceBadge;
  /** Noticeable translation issues or poorly done typesetting, making it hard to read. */
  Bad: SourceBadge;
  /** Content translated automatically using machine translation tools, often with significant errors or awkward phrasing and no typesetting. */
  Machine: SourceBadge;
  /** No translation or typesetting done, raw scans with original text. */
  Raw: SourceBadge;
};

/**
 * Badge definitions for content translations, including best, good, bad, machine translations, and raw scans.
 */
export const ContentTranslationBadge: ContentTranslation = {
  Best: {
    label: "Best Translations",
    textColor: "#FFFFFF",
    backgroundColor: "#1E90FF",
  },
  Good: {
    label: "Good Translations",
    textColor: "#FFFFFF",
    backgroundColor: "#1E90FF",
  },
  Bad: {
    label: "Bad Translations",
    textColor: "#FFFFFF",
    backgroundColor: "#1E90FF",
  },
  Machine: {
    label: "Machine Translations",
    textColor: "#FFFFFF",
    backgroundColor: "#1E90FF",
  },
  Raw: {
    label: "Raw Content",
    textColor: "#FFFFFF",
    backgroundColor: "#1E90FF",
  },
};
