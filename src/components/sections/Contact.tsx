import { ArrowUpRight } from "lucide-react";
import { useContent } from "../../context/ContentContext"
import ContactLink from "../ui/ContactLink";
import Icon from "../ui/Icon";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const {content} = useContent();
  const contactContent = content.contactContent;

  const contactLinkStyles = "bg-ui-surface w-full p-3 flex items-center justify-between gap-5 text-md hover:bg-brand-emphasis transition";

  return (
    <section id="contact" className="w-full pb-10">
      <h1 className="mb-10 flex gap-1">{contactContent.callToAction.question}<h1 className="mb-10 bg-linear-to-r from-brand to-brand-emphasis text-transparent bg-clip-text inline-block w-fit">{contactContent.callToAction.action}</h1></h1>
      <div className="w-100 grid gap-5">
        <ContactLink styles={`${contactLinkStyles}`} url={contactContent.email}>
          <Icon style="" name="gmail"/>
          <span>Send me a mail</span>
          <ArrowUpRight/>
        </ContactLink>

        <ContactLink styles={`${contactLinkStyles}`} url={contactContent.linkedin}>
          <FaLinkedin className="fill-[#0077B5] rounded-lg p-0.25 stroke-white bg-white stroke-2" size={40}/> 
          <span>Let's connect on LinkedIn</span>
          <ArrowUpRight/>
        </ContactLink>

        <ContactLink styles={`${contactLinkStyles}`} url={contactContent.github}>
          <Icon name="github"/> 
          <span>My GitHub profile</span>
          <ArrowUpRight/>
        </ContactLink>

        <ContactLink styles={`${contactLinkStyles}`} url={contactContent.whatsapp}>
          <Icon style="" name="whatsapp" /> 
          <span>Whatsapp</span>
          <ArrowUpRight/>
        </ContactLink>
      </div>
      
    </section>
  )
}

export default Contact