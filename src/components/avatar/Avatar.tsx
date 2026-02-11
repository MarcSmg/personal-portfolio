import pfp from "@/assets/images/avatar.jpg"
import ContactLink from "../ui/ContactLink"
import { useContent } from "@/context/ContentContext";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdMail } from "react-icons/md";
const Avatar = () => {
    const {content} = useContent();
    const contactContent = content.contactContent;
    const contactLinkStyles = "relative flex flex-col items-center justify-between gap-2 before:absolute before:inset-1 before:rounded-sm before:bg-accent before:opacity-0 before:transition-all hover:before:opacity-100 hover:before:scale-200 duration-100"

  return (
    <div className=" flex flex-col justify-center items-center gap-3 w-[30%] bg-linear-to-r from-brand-muted from-[-150%] to-ui-surface p-5 rounded-2xl">
      <img className="rounded-2xl " src={pfp} alt="" />
      
      <ContactLink styles="relative px-5 py-3 flex items-center justify-between gap-2 text-md before:absolute before:inset-1 before:scale-80 before:rounded-sm before:bg-accent before:opacity-0 before:transition-all hover:before:opacity-100 hover:before:scale-105 duration-100" url={contactContent.email}>
        <MdMail className="fill-white relative" size={30}/>
        <span className="relative">dossagaby@gmail.com</span> 
      </ContactLink>
      <div className="flex justify-between w-full px-8">
        <ContactLink styles={`${contactLinkStyles}`} url={contactContent.linkedin}>
          <FaLinkedin className="fill-white relative" size={30}/>
        </ContactLink>

        <ContactLink styles={`${contactLinkStyles}`} url={contactContent.github}>
          <FaGithub className="fill-white relative" size={30}/>
        </ContactLink>

        <ContactLink styles={`${contactLinkStyles}`} url={contactContent.whatsapp}>
          <FaWhatsapp className="fill-white relative" size={30}/>
        </ContactLink>
      </div>
    </div>
  )
}

export default Avatar