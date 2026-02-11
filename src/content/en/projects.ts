import type { ProjectContent } from "../types";


export const projectsContent: ProjectContent[] = [
    {
        slug: "fretwise",
        name: "Fretwise",
        headline: "Guitar chord diagrams for arrangers",
        description: "A web application that generates guitar chord diagrams from user input.",
        problem: `
            This project originates from a real need I encountered as a musician: 
            finding accurate chord shapes quickly without breaking creative focus.
        `,
        solution: `
            The goal is to allow users to search for chords by name or select from a curated list, then generate clear chord diagrams along with common inversions. 
            These diagrams will be exportable as SVG, PNG, or JPEG for reuse in arrangements, sheet music, or educational material.
        `,
        tech: ["React", "TypeScript", "SVG"],
        endline: `
            Fretwise is being developed as a full-stack React application, 
            with particular attention to UI clarity, performance, and the correctness of musical logic.
        `,
        status: "planned",
        links: {
            github: "https://github.com/MarcSmg/fret-wise",
        }
    },
];
