import { useContent } from "../../context/ContentContext"
import SkillCard from "../skill/SkillCard";

const Skills = () => {
  const {content} = useContent();
  const skillsContent = content.skillsContent;

  const skillsGridStyle = "grid w-full py-10 gap-10 w-full py-10 gap-y-10 lg:grid-cols-2 2xl:grid-cols-3"

  return (
    <section id="skills" className=" flex flex-col w-full pb-20 ">
      <h1 className="flex max-sm:flex-col gap-2">Tools &<span className="mb-10 bg-linear-to-r from-brand to-brand-emphasis text-transparent bg-clip-text inline-block w-fit">Skills</span></h1>
      <div className="flex flex-col p-3">
        <div >
          <h2>Languages</h2>
          <div className={skillsGridStyle}>
            {skillsContent.languages.map((l, index) => <SkillCard key={l.name} index={index} skill={l} />)}
          </div>
        </div>

        <div >
          <h2>Frontend Technologies</h2>
          <div className={skillsGridStyle}>
            {skillsContent.frontend.map((t, index) => <SkillCard key={t.name} index={index} skill={t} />)}
          </div>
        </div>

        <div >
          <h2>Backend Technologies</h2>
          <div className={skillsGridStyle}>
            {skillsContent.backend.map((t, index) => <SkillCard key={t.name} index={index} skill={t} />)}
          </div>
        </div>

        <div >
          <h2>Tools</h2>
          <div className={skillsGridStyle}>
            {skillsContent.tools.map((t, index) => <SkillCard key={t.name} index={index} skill={t} />)}
          </div>
        </div>   

      </div>
    </section>
  )
}

export default Skills