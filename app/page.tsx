import dynamic from 'next/dynamic'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Footer from '../components/Footer'

const Projects = dynamic(() => import('../components/Projects'), { ssr: false })
const Blogs = dynamic(() => import('../components/Blogs'), { ssr: false })

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

