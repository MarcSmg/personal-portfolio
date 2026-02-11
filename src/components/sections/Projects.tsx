import type { ProjectContent } from "../../content/types";
import { useContent } from "../../context/ContentContext"
import ProjectCard from "../project/ProjectCard";

const Projects = () => {
  const { content } = useContent();
  const projectsContent = content.projectsContent;

  return (
    <section id="projects" className=" flex flex-col pb-20">
      <h1 className="flex gap-2">Recent<span className="mb-10 bg-linear-to-r from-brand to-brand-emphasis text-transparent bg-clip-text inline-block w-fit">Projects</span></h1>
      <div className=" grid md:grid-cols-2 place-items-center p-2">
        {projectsContent.map((p: ProjectContent) => <ProjectCard key={p.slug} project={p}/> )}
      </div>
    </section>
  )
}

export default Projects