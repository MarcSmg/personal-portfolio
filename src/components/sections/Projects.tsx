import { useState } from "react";
import type { ProjectContent } from "../../content/types";
import { useContent } from "../../context/ContentContext"
import ProjectCard from "../project/ProjectCard";
import { ProjectDetailsFrame } from "../project/ProjectDetailsFrame";
import MagicBento from "../ui/MagicBento";
import ScrollFloat from "../ui/ScrollFloat";

const Projects = () => {
  const { content } = useContent();
  const projectsContent = content.projectsContent;

  const [activeProject, setActiveProject] = useState<string>("");

  return (
    <section id="projects" className=" flex flex-col mb-40 scroll-m-10 md:mb-60">
      <ScrollFloat containerClassName="flex gap-2">Recent<span className="mb-10 text-brand inline-block w-fit">Projects</span></ScrollFloat>
      <MagicBento
        className="lg:grid-cols-2 gap-5 place-items-center p-2"
        enableStars={false}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect={false}
        spotlightRadius={400}
        particleCount={12}
        glowColor="71, 140, 251"
      >
        {projectsContent.map((p: ProjectContent) => {
          return (
            <ProjectCard
              key={p.slug}
              project={p}
              onOpenDetails={() => setActiveProject(p.slug)}
              onCloseDetails={() => setActiveProject("")}
            ></ProjectCard>
          )
        }
        )}
      </MagicBento>
      {projectsContent.map((p: ProjectContent) => (
        <ProjectDetailsFrame
          key={p.slug}
          project={p}
          isVisible={activeProject === p.slug}
          onClose={() => setActiveProject("")}
        />
      ))}
    </section>
  )
}

export default Projects
