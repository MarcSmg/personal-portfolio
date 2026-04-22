import { Fragment, useState } from "react";
import type { ProjectContent } from "../../content/types";
import { useContent } from "../../context/ContentContext"
import ProjectCard from "../project/ProjectCard";
import { ProjectDetailsFrame } from "../project/ProjectDetailsFrame";

const Projects = () => {
  const { content } = useContent();
  const projectsContent = content.projectsContent;

  const [activeProject, setActiveProject] = useState<string>("");

  return (
    <section id="projects" className=" flex flex-col pb-20 scroll-m-10">
      <h1 className="flex gap-2">Recent<span className="mb-10 bg-linear-to-r from-brand to-brand-emphasis text-transparent bg-clip-text inline-block w-fit">Projects</span></h1>
      <div className=" grid lg:grid-cols-2 place-items-center p-2">
        {projectsContent.map((p: ProjectContent) => {
          return (<Fragment key={p.slug}>
            <ProjectCard
              key={p.slug}
              project={p}
              onOpenDetails={() => setActiveProject(p.slug)}
              onCloseDetails={() => setActiveProject("")}
            />
            <ProjectDetailsFrame
              project={p}
              isVisible={activeProject === p.slug}
              onClose={() => setActiveProject("")}
            />
          </Fragment>
          )
        }
        )}
      </div>
    </section>
  )
}

export default Projects