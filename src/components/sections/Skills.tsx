import { useContent } from "../../context/ContentContext"
import SkillCard from "../skill/SkillCard";
import ScrollFloat from "../ui/ScrollFloat";

const Skills = () => {
  const {content} = useContent();
  const skillsContent = content.skillsContent;

  const skillsGridStyle = "grid w-full py-10 w-full py-10 gap-10 lg:grid-cols-2 2xl:grid-cols-3 mb-5";

  return (
    <section id="skills" className=" flex flex-col w-full mb-40 ">
      <ScrollFloat containerClassName="flex max-sm:flex-col gap-2">Tools &<span className="mb-10 text-brand">Skills</span></ScrollFloat>
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
