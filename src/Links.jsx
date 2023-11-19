import { Route, Routes } from "react-router-dom"
//import pages
import Home from "./pages/Home"
import About from "./pages/About"
import Allprojects from "./pages/Allprojects"
import Contact from "./pages/Contact"
//import components
import ProjectDetail from "./components/ProjectDetail"

const Links = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/allprojects" element={<Allprojects/>}/>
        <Route path="/projects/:id" element={<ProjectDetail/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default Links
