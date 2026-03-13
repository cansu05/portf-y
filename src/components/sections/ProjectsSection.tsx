import { useState } from 'react';
import { projects } from '../../data/portfolio';
import type { Project } from '../../types';
import { ButtonLink } from '../ui/ButtonLink';
import { Container } from '../ui/Container';
import { Pill } from '../ui/Pill';
import { SectionTitle } from '../ui/SectionTitle';

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleImages = project.images.length > 1;

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? project.images.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === project.images.length - 1 ? 0 : current + 1));
  };

  return (
    <article className="overflow-hidden rounded-[30px] border border-ink/5 bg-ivory shadow-card">
      <div className="relative h-72 overflow-hidden bg-powder sm:h-80">
        <img
          src={project.images[activeIndex]}
          alt={project.title}
          className="h-full w-full object-cover object-top transition duration-300"
          loading="lazy"
          decoding="async"
        />
        {hasMultipleImages ? (
          <>
            <button
              type="button"
              aria-label="Önceki görsel"
              onClick={showPrevious}
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/95 text-lg text-ink shadow-sm transition hover:bg-ivory"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              aria-label="Sonraki görsel"
              onClick={showNext}
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/95 text-lg text-ink shadow-sm transition hover:bg-ivory"
            >
              <span aria-hidden="true">›</span>
            </button>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-ivory/85 px-3 py-2 shadow-sm">
              {project.images.map((image, index) => (
                <button
                  key={`${project.id}-${image}`}
                  type="button"
                  aria-label={`${index + 1}. görsele git`}
                  onClick={() => setActiveIndex(index)}
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
                    activeIndex === index ? 'bg-ivory' : 'bg-transparent'
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${activeIndex === index ? 'bg-coral' : 'bg-ink/25'}`}
                  />
                </button>
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl text-coral">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-ink/78">{project.text}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.url ? (
            <ButtonLink href={project.url} target="_blank" rel="noreferrer">
              Canlı Proje
            </ButtonLink>
          ) : null}
          {project.github ? (
            <ButtonLink href={project.github} variant="secondary" target="_blank" rel="noreferrer">
              GitHub
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <Container>
        <SectionTitle eyebrow="Projeler" title="Üzerinde çalıştığım ürünler ve arayüz deneyimleri." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
