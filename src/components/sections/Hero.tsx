import { useContent } from "../../context/ContentContext"
import Avatar from "../avatar/Avatar";
import Button from "../ui/Button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const { content } = useContent();
  const heroContent = content.heroContent;

  return (
    <section id="hero" className=" flex flex-col justify-center items-center gap-25 py-10 lg:flex-row lg:px-0 lg:py-50 " >
      <Avatar/>
      <div className="flex flex-col justify-center items-center">
        <div className=" flex flex-col mb-10 justify-center items-center text-center lg:text-left lg:items-start">
          <h1 className="mb-8 bg-linear-to-r from-brand to-brand-emphasis text-transparent bg-clip-text inline-block w-fit lg:text-6xl">{ heroContent.name }</h1>
          <h2> { heroContent.role } </h2>
          <h3> { heroContent.summary } </h3>
          <h3> { heroContent.tagline } </h3>        
        </div>
    
        <div className="flex flex-col w-full gap-10 lg:flex-row">
          <Button styles=" flex gap-2 justify-between items-center text-lg font-semibold py-5 px-8 transition" variant="primary">See my projects<ArrowRight className="size-5" /></Button> 
          <Button styles=" flex gap-2 justify-between items-center text-lg font-semibold py-5 px-8 hover:bg-ui-surface transition" variant="secondary">Download my resume <Download className="size-5" /></Button>         
        </div>
      </div>
    </section>
  )
}

export default Hero