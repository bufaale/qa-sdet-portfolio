import HeroSection from './components/HeroSection'
import ProjectSection from './components/ProjectSection'
import ToolkitSection from './components/ToolkitSection'
import ContactSection from "./components/ContactSection";
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="bg-zinc-900 text-white min-h-screen font-sans">
      <HeroSection />
      <ContactSection />
      <ProjectSection />
      <ToolkitSection />
      <Footer />
    </main>
  )
}