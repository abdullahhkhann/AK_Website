import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero/Hero'
import { About } from './components/sections/About/About'
import { Skills } from './components/sections/Skills/Skills'
import { Experience } from './components/sections/Experience/Experience'
import { Projects } from './components/sections/Projects/Projects'
import { Education } from './components/sections/Education/Education'
import { Contact } from './components/sections/Contact/Contact'
import { ScrollToTop } from './components/ui/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
