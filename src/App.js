import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"

export const App = () => {
  return (
    <>
       <Navbar/>
       <Home />
       <About />
    </>
  )
}

export default App