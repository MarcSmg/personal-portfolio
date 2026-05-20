import { useContent } from "../../context/ContentContext"
import { useInView } from "@/hooks/useInVIew";

const About = () => {
  const {content} = useContent();
  const aboutContent = content.aboutContent;

  const {ref: refTitle, isVisible: isVisibleTitle} = useInView();
  const {ref: refParagraphs, isVisible: isVisibleParagraphs} = useInView();

  return (
    <section ref={refTitle} id="about" className={`flex flex-col mb-20 w-full`}>
      <h1 className={`flex gap-2 ${isVisibleTitle ? "animate-fade-in-right" : "opacity-0 -translate-x-20"}`}>
        About
        <span className={`mb-10 bg-linear-to-r from-brand to-brand-emphasis text-transparent bg-clip-text inline-block w-fit`}>Me</span>
      </h1>
      <div ref={refParagraphs} className={`duration-300 max-w-200 text-justify ${isVisibleParagraphs ? "animate-fade-in-up" : "opacity-0 translate-y-5"} [animation-delay: 50ms]`} >
        <p>{aboutContent.education}</p>
        <p>{aboutContent.background}</p>
        <p>{aboutContent.interests}</p>
        <p>{aboutContent.objective}</p>
      </div>

    </section>
  )
}

export default About