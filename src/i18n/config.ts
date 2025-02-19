export type Locale = (typeof locales)[number];

export const locales = ["en", "de", "fr"] as const;
export const defaultLocale = "en";
