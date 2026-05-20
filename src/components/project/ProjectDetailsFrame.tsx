import type { ProjectContent } from "@/content/types"
import { useEffect } from "react";

type ProjectDetailsProps = {
  project: ProjectContent;
  isVisible: boolean;
  onClose: () => void;
}

export const ProjectDetailsFrame = ({ project, isVisible, onClose }: ProjectDetailsProps) => {

  useEffect(() => {
    if (!isVisible) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isVisible]);

  return <div className={`relative flex flex-col`} >
    {isVisible && (
      <>
        <div
          className="fixed inset-0 z-60 bg-black opacity-50"
          onClick={onClose}
        ></div>

        <div
          className={`
            fixed inset-3 flex flex-col z-70 p-8
            rounded-4xl
            shadow-black shadow-lg/50 bg-linear-to-r from-brand-muted from-[-150%] via-ui-surface-dark via-10% to-ui-surface
            md:inset-30 md:p-20
          `}
        >

          <button
            className={`
              absolute top-5 right-5
              flex flex-col items-center justify-center
              size-10 cursor-pointer 
              rounded-full
              hover:bg-brand-muted/50
              focus:outline-none focus-visible:ring focus-visible:ring-zinc-500
              transition-all duration-200
              `
            }
            aria-label="Close project details"
            onClick={onClose}
          >
            <span
              className={`
                block h-0.5 w-4 mb-1
              bg-white transition-transform duration-300
                rotate-45 translate-y-1
            `}
            />
            <span
              className={`
                block h-0.5 w-4 mb-1
              bg-white transition-transform duration-300
                -rotate-45 -translate-y-0.5
            `}
            />
          </button>

          <div className="text-justify overflow-auto no-scrollbar">
            <h1 className="text-left">{project.name}</h1>
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
};
