import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Blogs from './components/Blogs'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-green-400">
      <Header />
      <main>
        <Hero />
        <Projects />
        <AboutMe />
        <Blogs />
      </main>
      <Footer />
    </div>
  )
}

