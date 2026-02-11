import { useContent } from "../../context/ContentContext"
import SkillCard from "../skill/SkillCard";

const Skills = () => {
  const {content} = useContent();
  const skillsContent = content.skillsContent;

  const skillsGridStyle = "grid grid-cols-2 w-full py-10 gap-8 w-full py-10 gap-y-10"

  return (
    <section id="skills" className=" flex flex-col w-full pb-20 ">
      <h1 className="flex gap-2">Tools and<h1 className="mb-10 bg-linear-to-r from-brand to-brand-emphasis text-transparent bg-clip-text inline-block w-fit">Skills</h1></h1>
      <div className="flex flex-col">
        <div >
          <h3>Languages</h3>
          <div className={skillsGridStyle}>
            {skillsContent.languages.map((l) => <SkillCard key={l} skill={l} />)}
          </div>
        </div>

        <div >
          <h2>Frontend Technologies</h2>
          <div className={skillsGridStyle}>
            {skillsContent.frontend.map((t) => <SkillCard key={t} skill={t} />)}
          </div>
        </div>

        <div >
          <h2>Backend Technologies</h2>
          <div className={skillsGridStyle}>
            {skillsContent.backend.map((t) => <SkillCard key={t} skill={t} />)}
          </div>
        </div>

        <div >
          <h2>Tools</h2>
          <div className={skillsGridStyle}>
            {skillsContent.tools.map((t) => <SkillCard key={t} skill={t} />)}
          </div>
        </div>   

      </div>
    </section>
  )
}

export default Skills