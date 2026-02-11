import type { ProjectContent } from "../../content/types"
import Button from "../ui/Button"
import Icon from "../ui/Icon"
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectProps {
    project: ProjectContent
}

const ProjectCard = ({project} : ProjectProps) => {
  return (
    <div className="bg-ui-surface p-5 rounded-2xl">
        <div></div>
        <div className="flex flex-col gap-2">
          <div>
            <h3>{project.name}</h3>
            <p>{project.headline}</p>
            <p>{project.description}</p>            
          </div>

          <div className="flex gap-2 w-fit py-3">
            {project.tech.map((t) => <span className="bg-brand-muted px-2
             py-1 rounded-full text-xs" key={t}>{t}</span>)}
          </div>            
          <div className="flex items-center justify-between">
            <Button variant="primary" styles=" flex gap-1 text-sm font-semibold px-5 py-3 transition">View Details<ArrowUpRight size={20} /> </Button>
            <Button variant="secondary" styles=" p-2 hover:brightness-120 transition"><FaGithub className="fill-white" size={25}/></Button>              
          </div>

        </div>
    </div>
  )
}

export default ProjectCard