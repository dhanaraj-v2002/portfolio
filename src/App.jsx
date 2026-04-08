import Cursor     from './components/Cursor'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Stats      from './components/Stats'
import About      from './components/About'
import Skills     from './components/Skills'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import Education  from './components/Education'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  return (
    <>
      {/* Noise grain overlay */}
      <div className="noise-overlay" />

      {/* Custom cursor (desktop only) */}
      <Cursor />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
