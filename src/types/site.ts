export interface SiteMeta {
  articleDate?: string;
  description?: string;
  ogImage?: string;
  title: string;
}

export interface SiteProfile {
  name: string;
  email?: string;
  github?: string;
  linkedin?: string;
  jobTitle?: string;
}

export interface SiteConfig {
  author: string;
  title: string;
  description: string;
  lang: string;
  ogLocale: string;
  hideThemeCredit: boolean;
  profile: SiteProfile;
  date: {
    locale: string;
    options: Intl.DateTimeFormatOptions;
  };
}
