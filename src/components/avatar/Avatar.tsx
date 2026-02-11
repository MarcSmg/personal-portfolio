import pfp from "@/assets/images/avatar.jpg"
import ContactLink from "../ui/ContactLink"
import { useContent } from "@/context/ContentContext";
import { FaWhatsapp } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { useInView } from "@/hooks/useInVIew";
const Avatar = () => {
    const {content} = useContent();
    const contactContent = content.contactContent;
    const contactLinkStyles = "relative flex flex-col items-center justify-between gap-2 before:absolute before:inset-1 before:rounded-sm before:bg-accent/80 before:opacity-0 before:transition-all hover:before:opacity-100 hover:before:scale-200 duration-100"

    const {ref, isVisible} = useInView();

  return (
    <div ref={ref} className={` ${isVisible ? 'animate-fade-in-right' : ''} flex flex-col w-[90%] justify-center items-center gap-4 px-5 py-7 opacity-0 bg-linear-to-r from-brand-muted from-[-150%] to-ui-surface rounded-2xl lg:w-[40%]`}>
      <img className="rounded-2xl size-[80%] lg:size-full" src={pfp} alt="" />
      
      <ContactLink styles="relative px-3 py-3 flex items-center justify-between gap-2 before:absolute before:inset-1 before:scale-80 before:rounded-sm before:bg-accent/80 before:opacity-0 before:transition-all hover:before:opacity-100 hover:before:scale-105 duration-100" url={contactContent.email}>
        <MdMail className="fill-white relative size-6"/>
        <span className="relative">dossagaby@gmail.com</span> 
      </ContactLink>
      <div className="flex justify-between gap-10 px-3">
        <ContactLink styles={`${contactLinkStyles}`} url={contactContent.linkedin}>
          <LuLinkedin className=" relative size-7"/>
        </ContactLink>

        <ContactLink styles={`${contactLinkStyles}`} url={contactContent.github}>
          <LuGithub className=" relative size-7"/>
        </ContactLink>

        <ContactLink styles={`${contactLinkStyles}`} url={contactContent.whatsapp}>
          <FaWhatsapp className="fill-white relative size-7"/>
        </ContactLink>
      </div>
    </div>
  )
}

export default Avatar