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
        {name: "HTML", level: 90},
        {name: "CSS", level: 90},
        {name: "Python", level: 80},
        {name: "Java", level: 70},
        {name: "C", level: 80},
        {name: "C++", level: 70},
    ],
    frontend: [
        {name: "React", level: 85},
        {name: "Vue", level: 75},
    ],
    backend: [
        {name: "Django", level: 75},
        {name: "Flask", level: 60},
        {name: "Express", level: 80},
        {name: "REST API", level: 80}
    ],
    tools: [
        {name: "Git"},
        {name: "Github"},
        {name: "VS Code"},
        {name: "Postman"}
    ]
};