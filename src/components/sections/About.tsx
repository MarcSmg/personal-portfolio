import { useContent } from "../../context/ContentContext"

const About = () => {
  const {content} = useContent();
  const aboutContent = content.aboutContent;
  return (
    <section id="about" className=" flex flex-col pb-20">
      <h1 className="flex gap-2">About<h1 className="mb-10 bg-linear-to-r from-brand to-brand-emphasis text-transparent bg-clip-text inline-block w-fit">Me</h1></h1>
      <p>{aboutContent.intro}</p>
      <p>{aboutContent.background}</p>
      <p>{aboutContent.interests}</p>
      <p>{aboutContent.objective}</p>
    </section>
  )
}

export default About