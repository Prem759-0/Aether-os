import HeroSection from './components/sections/HeroSection'
import WorkspaceSection from './components/sections/WorkspaceSection'
import ExperienceSection from './components/sections/ExperienceSection'

export default function App() {
  return (
    <main className="min-h-screen bg-background text-white overflow-hidden">
      <HeroSection />
      <WorkspaceSection />
      <ExperienceSection />
    </main>
  )
}
