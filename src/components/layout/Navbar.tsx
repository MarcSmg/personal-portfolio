import NavLink from "./NavLink"
import { House, Presentation, BookOpenText, BrainCircuit, Mail } from "lucide-react"

const Navbar = () => {
  return (
    <nav className=" fixed z-50 top-0 mt-10 px-8 py-3 rounded-lg flex gap-10  justify-between shadow-black shadow-lg/50 bg-linear-to-r from-brand-muted from-[-60%] via-ui-surface to-brand-muted">
      <NavLink url="#hero"><House size={20}/>Home</NavLink>
      <NavLink url="#projects"><Presentation size={20}/>Projects</NavLink>
      <NavLink url="#about"><BookOpenText size={20}/>About Me</NavLink>
      <NavLink url="#skills"><BrainCircuit size={20}/>Skills</NavLink>
      <NavLink url="#contact"><Mail size={20}/>Contact</NavLink>
    </nav>
  )
}

export default Navbar