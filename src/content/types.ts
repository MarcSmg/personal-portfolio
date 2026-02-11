export type AboutContent = {
    education: string;
    background: string;
    interests: string;
    objective: string;
};

export type ContactContent = {
    callToAction: {
        question: string,
        action: string
    };
    email: string;
    phone: string;
    whatsapp: string;
    github: string;
    linkedin: string;
};

export type ExperienceContent = {
    role: string;
    company: string;
    period: string;
    summary: string;
    highlights: string[];
};

export type FooterContent = {
    copyright: string;
    note?: string;
};

export type HeroContent = {
  name: string;
  role: string;
  tagline: string;
  summary: string;
};

export type ProjectContent = {
    slug: string;
    name: string;
    headline: string;
    description: string;
    problem: string;
    solution: string;
    tech: string[];
    endline: string;
    status: "planned" | "in-progress" | "completed";
    links?: {
        github?: string;
        live?: string;
    };
};

// export type SkillsContent = {
//     languages: string[];
//     frontend: string[];
//     backend: string[];
//     tools: string[];
// };

export type SkillObject = {
    name: string,
    level?: number
};

export type SkillsContent = {
    languages: SkillObject[];
    frontend: SkillObject[];
    backend: SkillObject[];
    tools: SkillObject[];
};