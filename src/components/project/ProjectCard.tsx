import { useInView } from "@/hooks/useInVIew";
import type { ProjectContent } from "../../content/types"
import Button from "../ui/Button"
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectProps {
  project: ProjectContent
}

const statuses = {
  "planned": "planned",
  "in-progress": "in progress",
  "completed": "Completed"
};

const ProjectCard = ({ project }: ProjectProps) => {
  const { ref, isVisible } = useInView();
  return (
    <div ref={ref} className={` 
          ${isVisible ? 'animate-fade-in-up' : 'translate-y-20'}
          opacity-0
          bg-ui-surface border border-brand-muted p-5 rounded-2xl
          shadow-brand-emphasis
          hover:-translate-y-1 hover:shadow-lg/90 transition-all duration-300
        `
    }>
      <div></div>
      <div className="flex flex-col gap-2">
        <div>
          <h3>{project.name} <span className="text-sm">({statuses[project.status]})</span></h3>
          <br />
          <p>{project.headline}</p>
          <p>{project.description}</p>
        </div>

        <div className="flex gap-5 w-fit py-3">
          {project.tech.map((t) => <span className="bg-brand-muted px-2
             py-1 rounded-full text-sm" key={t}>{t}</span>)}
        </div>

        <div>

        </div>

        <div className="flex items-center justify-between">

          <a href={project.links?.live} target="_blank">
            <Button variant="primary" styles=" flex gap-1 text-sm font-semibold px-5 py-3 transition">Live Demo<ArrowUpRight size={20} /> </Button>
          </a>

          <Button variant="secondary" styles=" flex gap-1 text-sm font-semibold px-5 py-3 transition">View Details</Button>

          <a href={project.links?.github} target="_blank">
            <Button variant="secondary" styles=" p-2 hover:brightness-120 transition"><FaGithub className="fill-white" size={25} /></Button>
          </a>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard