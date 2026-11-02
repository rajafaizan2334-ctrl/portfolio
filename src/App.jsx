import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Capabilities from './components/Capabilities.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Systems from './components/Systems.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'

function App() {
  return (
    <>
      <div className="backdrop-grid pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Capabilities />
        <Experience />
        <Projects />
        <Systems />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
