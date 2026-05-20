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
        status: "in-progress",
        links: {
            github: "https://github.com/MarcSmg/fret-wise",
            live: "https://fret-wise.vercel.app"
        }
    },
    {
        slug: "sportly",
        name: "Sportly",
        headline: "A social network for athletes",
        description: "A social networking platform designed specifically for athletes to connect, share their training progress, and find workout partners.",
        problem: `
            Many athletes struggle to find a community that understands their specific needs and goals. 
            Existing social networks are often too broad and don't cater to the unique aspects of athletic training and motivation.
        `,
        solution: `
            Sportly aims to create a dedicated space for athletes to share their training routines, progress photos, and connect with others who have similar fitness goals. 
            The platform will include features like workout tracking, goal setting, and a community forum for advice and support.
        `,
        tech: ["React", "TypeScript", "Supabase", "PostgreSQL"],
        endline: `
            Sportly is being developed as a responsive web application with a focus on user engagement, community building, and providing valuable tools for athletes of all levels.
        `,
        status: "completed",
        links: {
            live: "https://sportlyconnect.vercel.app"
        }
    },
    {
        slug: "qr-it",
        name: "QRIt",
        headline: "A QR code generator",
        description: "A web application for generating QR codes from user input.",
        problem: `
            This project originated from a need to quickly generate QR codes for various purposes, 
            such as sharing links or contact information.
        `,
        solution: `
            The goal is to provide a user-friendly interface for creating QR codes with customizable options, 
            including size, color, and error correction level.
        `,
        tech: ["React", "TypeScript", "QRCode", "Laravel", "REST API", "MySQL"],
        endline: `
            QRIt is being developed as a responsive web application, focusing on ease of use and visual appeal.
        `,
        status: "in-progress",
        links: {
            github: "https://github.com/MarcSmg/qrcode-maker.git",
        }
    },
    {
        slug: "bde-ifri",
        name: "BDE IFRI Website",
        headline: "Website for the BDE of IFRI",
        description: "A website for the BDE of IFRI, a student organization at IFRI.",
        problem: `
            The BDE of IFRI needed a modern and user-friendly website to showcase their events, activities, and provide information to students.
        `,
        solution: `
            The goal was to create a visually appealing and easy-to-navigate website that effectively communicates the BDE's mission and engages the student community.
        `,
        tech: ["React", "TypeScript", "Tailwind CSS", "Express.js", "REST API", "Supabase", "PostgreSQL"],
        endline: `
            The BDE IFRI website was developed with a focus on responsive design, accessibility, and providing a seamless user experience.
        `,
        status: "in-progress",
        links: {
            live: "https://bde-ifri.vercel.app"
        }
    }
];
