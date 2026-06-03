export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Profile {
  name: string;
  headline: string;
  location: string;
  summary: string[];
  contact: Contact;
}

export interface Experience {
  company: string;
  role: string;
  start: string;
  end: string | "present";
  location: string;
  highlights: string[];
}

export type SkillGroup = "technical" | "domains" | "language" | "certification";

export interface Skill {
  name: string;
  group: SkillGroup;
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
  highlights?: string[];
  url?: string;
}

export interface ContributionDay {
  date: string;
  count: number;
}
