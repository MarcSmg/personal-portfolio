import { useContent } from "../../context/ContentContext"
import Avatar from "../avatar/Avatar";
import Button from "../ui/Button";
import { ArrowRight, Download } from "lucide-react";
import { handleScrollIntoView } from "@/utils/handleScrollIntoView";
import BlurText from "../ui/BlurText";

const Hero = () => {
  const { content } = useContent();
  const heroContent = content.heroContent;
  const buttonsStyle = "flex gap-5 justify-between items-center py-5 px-5 w-full text-lg font-semibold transition";

  return (
    <section id="hero" className=" flex flex-col justify-center items-center gap-25 mb-40 lg:flex-row lg:px-0 lg:py-50 " >
      <Avatar/>
      <div className="flex flex-col justify-center items-center">
        <div className=" flex flex-col mb-10 justify-center items-center text-center lg:text-left lg:items-start">
          <BlurText
            className="mb-8 w-fit text-[2.8rem] max-sm:text-[2.5rem] lg:text-6xl font-semibold bg-linear-to-r from-brand to-brand-emphasis text-transparent bg-clip-text"  
            text={ heroContent.name }
            delay={200}
            animateBy="words"
            direction="top"
          />
          <h2> { heroContent.role } </h2>
          <h3> { heroContent.summary } </h3>
          <h3> { heroContent.tagline } </h3>        
        </div>
    
        <div className="flex flex-col w-full gap-10 xl:flex-row">
          <a className="w-full" href="" onClick={(e) => handleScrollIntoView(e, "#projects")} >
            <Button styles={` ${buttonsStyle}`} variant="primary">See my projects<ArrowRight className="size-8 2xl:size-5"/></Button> 
          </a>
          <Button styles={` ${buttonsStyle}`} variant="secondary">Download my resume <Download className="size-8 2xl:size-5" /></Button>         
        </div>
      </div>
    </section>
  )
}

export default Hero