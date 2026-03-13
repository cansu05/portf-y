export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  id: string;
  href: string;
  name: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Project = {
  id: string;
  title: string;
  text: string;
  tags: string[];
  images: string[];
  url?: string;
  github?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
};

export type AboutCard = {
  title: string;
  text: string;
};
