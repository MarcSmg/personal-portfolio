import { useContent } from "@/context/ContentContext"

const Footer = () => {
  const {content} = useContent();
  const footerContent = content.footerContent;
  return (
    <footer className="w-full h-20">
      <div className="flex gap-10 bg-ui-dark w-full h-full justify-center items-center">
        <p>{footerContent.copyright}</p>
        <p>{footerContent.note}</p>       
      </div>

    </footer>
  )
}

export default Footer