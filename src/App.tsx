import { useEffect } from 'react';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { Header } from './components/layout/Header';
import { getGtmId, initAnalytics, trackPageView, trackSectionView } from './lib/analytics';

function App() {
  useEffect(() => {
    initAnalytics();
    trackPageView();

    const handleHashChange = () => {
      trackPageView();
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          const heading = element.querySelector('h1, h2');
          trackSectionView(element.id, heading?.textContent?.trim());
        });
      },
      { threshold: 0.45 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const gtmId = getGtmId();

  return (
    <div className="min-h-screen bg-sand text-ink">
      {gtmId ? (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="google-tag-manager"
          />
        </noscript>
      ) : null}
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
