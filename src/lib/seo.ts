import type { Profile, Skill } from "../types/portfolio";

const SITE_URL = "https://lemonsix.github.io";

export function summaryText(summary: string[]): string {
  return summary.join(" ");
}

export function metaDescription(profile: Profile, maxLength = 160): string {
  const base = `${profile.headline}. ${summaryText(profile.summary)}`;
  if (base.length <= maxLength) return base;
  return `${base.slice(0, maxLength - 3).trimEnd()}...`;
}

export function skillsForSchema(skills: Skill[]): string[] {
  return skills
    .filter((s) => s.group === "technical" || s.group === "domains")
    .map((s) => s.name);
}

export function personJsonLd(profile: Profile, skills: Skill[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.headline,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressCountry: profile.location,
    },
    email: profile.contact.email,
    sameAs: [profile.contact.linkedin, profile.contact.github],
    knowsAbout: skillsForSchema(skills),
    description: summaryText(profile.summary),
  };
}

export { SITE_URL };
