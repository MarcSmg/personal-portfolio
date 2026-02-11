import { useInView } from "@/hooks/useInVIew";
import NavLink from "./NavLink"
import { House, Presentation, BookOpenText, BrainCircuit, Mail } from "lucide-react"
import { useState } from "react";
import { handleScrollIntoView } from "@/utils/handleScrollIntoView";

const Navbar = () => {
  const {ref, isVisible} = useInView();
  const [open, setOpen] = useState(false);

  return (
    <nav ref={ref} className=" flex w-full sticky top-0 z-50 justify-center">

        <div className={`${isVisible ? 'animate-fade-in-down' : 'opacity-0'}  hidden fixed top-0 mt-10 px-8 py-3 rounded-lg gap-10  justify-between shadow-black shadow-lg/50 bg-linear-to-r from-brand-muted from-[-60%] via-ui-surface to-brand-muted lg:flex`}>
          <NavLink url="#hero"><House size={20}/>Home</NavLink>
          <NavLink url="#projects"><Presentation size={20}/>Projects</NavLink>
          <NavLink url="#about"><BookOpenText size={20}/>About Me</NavLink>
          <NavLink url="#skills"><BrainCircuit size={20}/>Skills</NavLink>
          <NavLink url="#contact"><Mail size={20}/>Contact</NavLink> 
        </div>  

        <div className=" bg-ui-surface mx-auto flex w-full items-center justify-between px-4 py-3 lg:hidden">
          <div className="text-xl font-bold">
            Marc SMG
          </div>
          
          <button
            className={`
              lg:hidden p-3 cursor-pointer 
              rounded-lg
              hover:bg-brand-muted/50
              focus:outline-none focus-visible:ring focus-visible:ring-zinc-500
              transition-all duration-200
              `
            }
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <span     
              className={`
                block h-0.5 w-6 mb-1
              bg-white transition-transform duration-300
                ${open ? "translate-y-1.5 rotate-45" : ""}
                `}
            />
            <span     
              className={`
                block h-0.5 w-6 mb-1
              bg-white transition-transform duration-300
                ${open ? "rotate-45" : ""}
                `}
            />
            <span     
              className={`
                block h-0.5 w-6
              bg-white transition-transform duration-300
                ${open ? "-translate-y-1.5 -rotate-45" : ""}
                `}
            />
          </button>
        </div>

        <div
          className={`
            lg:hidden top-14
            absolute right-3 mt-2 rounded-lg
            shadow-black shadow-lg/50 bg-linear-to-r from-brand-muted from-[-200%] via-ui-surface to-brand-muted to-200%
            transition-all duration-300 ease-out
            ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
          `}
        >
          <ul className="flex flex-col px-4 text-lg">
            <li className="py-3 px-5"><a className="flex gap-5 items-center" href="" onClick={(e) => handleScrollIntoView(e, "#hero")}><House size={20}/>Home</a> </li>
            <li className="py-3 px-5"><a className="flex gap-5 items-center" href="" onClick={(e) => handleScrollIntoView(e, "#projects")}><Presentation size={20}/>Projects</a> </li>
            <li className="py-3 px-5"><a className="flex gap-5 items-center" href="" onClick={(e) => handleScrollIntoView(e, "#about")}><BookOpenText size={20}/>About Me</a> </li>
            <li className="py-3 px-5"><a className="flex gap-5 items-center" href="" onClick={(e) => handleScrollIntoView(e, "#skills")}><BrainCircuit size={20}/>Skills</a> </li>
            <li className="py-4 px-5"><a className="flex gap-5 items-center" href="" onClick={(e) => handleScrollIntoView(e, "#contact")}><Mail size={20}/>Contact</a> </li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar