import Icon from "../ui/Icon"

interface SkillProps {
    children?: React.ReactNode,
    skill: string,
}

const SkillCard = ({children, skill}: SkillProps) => {

  const hoverStyles = " transition-all duration-100 ease-out hover:outline-2 outline-brand";

  return (
  <span className={` ${hoverStyles} flex gap-5 items-center justify-between text-center shadow-brand/60 bg-linear-to-r from-brand-muted from-[-100%] to-ui-surface p-5 rounded-lg w-80 h-20`}>
    <span><Icon name={skill}/></span>
    <p className="text-xl justify-center content-center">{skill}</p>
    <span>{children}</span>
  </span>
    
  )
}

export default SkillCard