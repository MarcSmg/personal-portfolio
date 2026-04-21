import type { SkillsContent } from "../types";


// export const skillsContent: SkillsContent = {
//     languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "Java", "C", "C++"],
//     frontend: ["React", "Vue"],
//     backend: ["Django", "Flask","Express","REST API"],
//     tools: ["Git", "GitHub", "VS Code", "Postman"]
// };

export const skillsContent: SkillsContent = {
    languages: [
        {name: "JavaScript", level: 80},
        {name: "TypeScript", level: 60},
        {name: "HTML", level: 80},
        {name: "CSS", level: 70},
        {name: "Python", level: 70},
        {name: "Java", level: 60},
        {name: "C", level: 80},
        {name: "C++", level: 60},
        {name: "PHP", level: 60}
    ],
    frontend: [
        {name: "React", level: 80},
        {name: "Vue", level: 65},
    ],
    backend: [
        {name: "Django", level: 65},
        {name: "Flask", level: 60},
        {name: "Express", level: 80},
        {name: "Laravel", level: 65},
        {name: "REST API", level: 80}
    ],
    tools: [
        {name: "Git"},
        {name: "Github"},
        {name: "VS Code"},
        {name: "Postman"}
    ]
};