import profileData from "./data/profile.json";
import { metaDescription } from "./lib/seo";
import type { Profile } from "./types/portfolio";
import type { SiteConfig } from "./types/site";

const profile = profileData as Profile;

export const siteConfig: SiteConfig = {
  author: profile.name,
  title: profile.name,
  description: metaDescription(profile),
  lang: "en-US",
  ogLocale: "en_US",
  hideThemeCredit: true,
  profile: {
    name: profile.name,
    email: profile.contact.email,
    github: profile.contact.github,
    linkedin: profile.contact.linkedin,
    jobTitle: profile.headline,
  },
  date: {
    locale: "en-US",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  },
};
