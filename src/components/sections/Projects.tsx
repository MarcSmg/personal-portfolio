import { useState } from "react";
import type { ProjectContent } from "../../content/types";
import { useContent } from "../../context/ContentContext"
import ProjectCard from "../project/ProjectCard";
import { ProjectDetailsFrame } from "../project/ProjectDetailsFrame";

const Projects = () => {
  const { content } = useContent();
  const projectsContent = content.projectsContent;

  const [activeProject, setActiveProject] = useState<string>("");

  return (
    <section id="projects" className=" flex flex-col mb-40 scroll-m-10 md:mb-60">
      <h1 className="flex gap-2">Recent<span className="mb-10 bg-linear-to-r from-brand to-brand-emphasis text-transparent bg-clip-text inline-block w-fit">Projects</span></h1>
      <div className=" grid lg:grid-cols-2 gap-5 place-items-center p-2">
        {projectsContent.map((p: ProjectContent) => {
          return (<div className="w-full h-full" key={p.slug}>
            <ProjectCard
              key={p.slug}
              project={p}
              onOpenDetails={() => setActiveProject(p.slug)}
              onCloseDetails={() => setActiveProject("")}
            ></ProjectCard>
            <ProjectDetailsFrame
              project={p}
              isVisible={activeProject === p.slug}
              onClose={() => setActiveProject("")}
            />
          </div>
          )
        }
        )}
      </div>
    </section>
  )
}

export default Projects