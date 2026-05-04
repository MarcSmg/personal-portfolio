import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import { Watermark } from "./components/layout/Watermark"
import { ContentProvider } from "./context/ContentProvider"
import Home from "./pages/Home"

function App() {
  return (
    <>
    <div className="text-white">
      <ContentProvider>
        <div className="flex flex-col min-h-screen items-center justify-center">

          <Navbar/>

          <main className="grow z-0">
            <Watermark/>
            <Home/>
          </main>

          <Footer/>     

        </div>
      </ContentProvider>
    </div>
    </>
  )
}

export default App
