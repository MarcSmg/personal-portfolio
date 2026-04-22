import type { ProjectContent } from "@/content/types"
import { memo } from "react";

type ProjectDetailsProps = {
  project: ProjectContent;
  isVisible: boolean;
  onClose: () => void;
}

export const ProjectDetailsFrame = memo(({ project, isVisible, onClose }: ProjectDetailsProps) => {
  console.log(isVisible)
  return <div className={`relative flex flex-col size-5`} >
    {isVisible && (
      <>
        <div
          className="fixed inset-0 z-60 bg-black opacity-50"
          onClick={onClose}
        ></div>

        <div
          className={`
            fixed inset-3 flex flex-col z-70
            p-5
            rounded-4xl
            overflow-y-auto
            shadow-black shadow-lg/50 bg-linear-to-r from-brand-muted from-[-150%] via-ui-surface-dark via-10% to-ui-surface
            md:inset-30 md:p-20
          `}
        >
          <div className="text-justify">
            <h1>{project.name}</h1>
            <h3>{project.headline}</h3>
            <div className="h-50 w-full">
              Project image
            </div>
            <p>{project.description}</p>
            <p>{project.problem}</p>
            <p>{project.solution}</p>
            <p>{project.endline}</p>

          </div>

        </div>
      </>)
    }
  </div>
});
