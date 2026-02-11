import type { SkillObject } from "@/content/types";
import Icon from "../ui/Icon"
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInVIew";

interface SkillProps {
    children?: React.ReactNode,
    skill: SkillObject,
    index: number,
}

const SkillCard = ({children, skill, index}: SkillProps) => {
  
  const { ref, isVisible } = useInView();
  const [level, setLevel] = useState(0);

  useEffect(() => {
    if (isVisible && skill.level) setLevel(skill.level);
    else return;
  }, [isVisible])

  const hoverStyles = " transition-all duration-100 shadow-brand-emphasis hover:border-brand hover:shadow-lg transition-all duration-200 ease-in-out";
  
  return (

  <div 
    ref={ref} 
    style={{ '--delay': `${index * 80}ms` } as React.CSSProperties}
    className={`
    ${hoverStyles} ${isVisible ? 'animate-fade-in-up' : 'translate-y-20'}
    opacity-0 
    flex flex-col gap-5 items-center justify-between text-center bg-ui-surface border border-brand-muted p-5 px-8 rounded-lg w-full h-fit 
    transition-all duration-300 [animation-delay:var(--delay)]
  `}>
    <span className="flex gap-5 items-center justify-between w-full">
      <span><Icon name={skill.name}/></span>
      <p className="text-xl justify-center content-center">{skill.name}</p>
      <span>{children}</span>      
    </span>

    {skill.level && 
      <div className="w-full flex items-center justify-center gap-4">
        <div className="h-2 w-full rounded-full bg-brand-muted">
          <div className="rounded-full bg-brand h-full transition-all duration-1000" style={{width: `${level}%`}}></div>
        </div>   
        <span>{skill.level}%</span>         
      </div>
  }
  </div>
    
  )
}

export default SkillCard