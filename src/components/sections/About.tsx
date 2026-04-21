import { useContent } from "../../context/ContentContext"
import { useInView } from "@/hooks/useInVIew";

const About = () => {
  const {content} = useContent();
  const aboutContent = content.aboutContent;

  const {ref, isVisible} = useInView();

  return (
    <section ref={ref} id="about" className={`flex flex-col pb-20 w-full`}>
      <h1 className="flex gap-2">About<span className="mb-10 bg-linear-to-r from-brand to-brand-emphasis text-transparent bg-clip-text inline-block w-fit">Me</span></h1>
      <div className={` ${isVisible ? "animate-fade-in-right" : "opacity-0 -translate-x-20"} duration-300 max-w-200`} >
        <p>{aboutContent.education}</p>
        <p>{aboutContent.background}</p>
        <p>{aboutContent.interests}</p>
        <p>{aboutContent.objective}</p>
      </div>

    </section>
  )
}

export default About