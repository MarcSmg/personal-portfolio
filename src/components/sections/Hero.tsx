import { useContent } from "../../context/ContentContext"
import Avatar from "../avatar/Avatar";
import Button from "../ui/Button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const { content } = useContent();
  const heroContent = content.heroContent;

  return (
    <section id="hero" className=" flex justify-center items-center gap-15 h-screen " >
      <Avatar/>
      <div className="flex flex-col justify-center items-center">
        <div className=" flex flex-col justify-center items-center text-center mb-10">
          <h1 className="text-6xl mb-8 bg-linear-to-r from-brand to-brand-emphasis text-transparent bg-clip-text inline-block w-fit">{ heroContent.name }</h1>
          <h2> { heroContent.role } </h2>
          <h3> { heroContent.summary } </h3>
          <h3> { heroContent.tagline } </h3>        
        </div>
    
        <div className="flex gap-10">
          <Button styles=" flex gap-2 text-md font-semibold border-1 border-ui-border py-5 px-8 hover:outline-1 outline-white transition" variant="primary">See my projects<ArrowRight size={20}/></Button> 
          <Button styles=" flex gap-2 text-md font-semibold border-1 border-ui-border py-5 px-8 hover:bg-ui-surface hover:outline-1 outline-white transition" variant="secondary">Download my resume <Download size={20}/></Button>         
        </div>
      </div>
    </section>
  )
}

export default Hero