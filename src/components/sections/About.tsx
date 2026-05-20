import { useContent } from "../../context/ContentContext"
import ScrollFloat from "../ui/ScrollFloat";
import ScrollReveal from "../ui/ScrollReveal";

const About = () => {
  const { content } = useContent();
  const aboutContent = content.aboutContent;

  // const {ref: refTitle, isVisible: isVisibleTitle} = useInView();
  return (
    <section id="about" className={`flex flex-col mb-20 w-full`}>
      <ScrollFloat containerClassName={`flex gap-2`}>
        About
        <span className="mb-10 text-brand inline-block w-fit">Me</span>
      </ScrollFloat>
      <div className={`max-w-200 text-justify`}>
        <ScrollReveal
          textClassName="font-normal text-lg"
          enableBlur={true}
          baseRotation={15}
        >
          {aboutContent.education}
        </ScrollReveal>

        <ScrollReveal
          textClassName="font-normal text-lg"
          enableBlur={true}
          baseRotation={15}
        >
          {aboutContent.background}
        </ScrollReveal>

        <ScrollReveal
          textClassName="font-normal text-lg"
          enableBlur={true}
          baseRotation={15}
        >
          {aboutContent.interests}
        </ScrollReveal>

        <ScrollReveal
          textClassName="font-normal text-lg"
          enableBlur={true}
          baseRotation={15}
        >
          {aboutContent.objective}
        </ScrollReveal>
      </div>
    </section>
  )
}

export default About
