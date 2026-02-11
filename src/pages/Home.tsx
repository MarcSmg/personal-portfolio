import About from "../components/sections/About"
import Contact from "../components/sections/Contact"
import Hero from "../components/sections/Hero"
import Projects from "../components/sections/Projects"
import Skills from "../components/sections/Skills"

const Home = () => {

  return (

    <div className="flex flex-col items-center justify-center max-sm:px-[5%] px-[20%] md:px-40 lg:px-80">
        <Hero/>
        <Projects/>
        <About/>
        <Skills/>
        <Contact/>
    </div>
  )
}

export default Home