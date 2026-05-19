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
        {name: "TypeScript", level: 70},
        {name: "HTML", level: 70},
        {name: "CSS", level: 70},
        {name: "Python", level: 70},
        {name: "Java", level: 60},
        {name: "C", level: 70},
        {name: "C++", level: 55},
        {name: "PHP", level: 50}
    ],
    frontend: [
        {name: "React", level: 75},
        {name: "Vue", level: 60},
    ],
    backend: [
        {name: "Django", level: 65},
        {name: "Flask", level: 60},
        {name: "Express", level: 60},
        {name: "Laravel", level: 65},
        {name: "REST API", level: 75}
    ],
    tools: [
        {name: "Git"},
        {name: "Github"},
        {name: "VS Code"},
        {name: "Postman"}
    ]
};