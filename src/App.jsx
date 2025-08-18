
// ...existing code...
import MyNavbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Project from './components/Project'
import Footer from './components/footer'
import './App.css'

import SideContactButton from './components/SideContactButton';

function App() {
  return (
    <>
      <MyNavbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Project />
      <Experience />
      <Contact />
      <Footer />
      <SideContactButton />
    </>
  )
}

export default App
