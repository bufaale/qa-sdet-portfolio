import HeroSection from './components/HeroSection'
import ProjectSection from './components/ProjectSection'
import ToolkitSection from './components/ToolkitSection'
import ContactSection from "./components/ContactSection";
import DownloadCVSection from "./components/DownloadCVSection";
import ExperienceSection from "./components/ExperienceSection";
import TestingReflection from "./components/TestingReflection";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="bg-zinc-900 text-white min-h-screen font-sans">
      <Navbar />
      <HeroSection />
      <TestingReflection />
      <ExperienceSection />
      <ProjectSection />
      <ToolkitSection />
      <DownloadCVSection />
      <ContactSection />
      <Footer />
    </main>
  )
}