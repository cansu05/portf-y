import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { Header } from './components/layout/Header';

function App() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grain bg-[size:18px_18px] opacity-60" />
      <div className="pointer-events-none fixed left-[8%] top-24 -z-10 h-48 w-48 rounded-full bg-pink/30 blur-3xl" />
      <div className="pointer-events-none fixed bottom-12 right-[12%] -z-10 h-56 w-56 rounded-full bg-powder/30 blur-3xl" />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
