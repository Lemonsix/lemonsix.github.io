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
  summary: string;
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

export interface Education {
  institution: string;
  program: string;
  field?: string;
  start: string;
  end?: string;
  status?: string;
}

export type SkillGroup = "technical" | "language" | "certification";

export interface Skill {
  name: string;
  group: SkillGroup;
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
  url?: string;
}

export interface ContributionDay {
  date: string;
  count: number;
}
