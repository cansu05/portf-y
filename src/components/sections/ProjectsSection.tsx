import { projects } from "../../data/portfolio";
import type { Project, ProjectFeature } from "../../types";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";
import {
  ExternalArrowIcon,
  FeatureIcon,
  GitHubIcon,
  featureIconStyles,
} from "../ui/ProjectIcons";
import { SectionTitle } from "../ui/SectionTitle";

type ProjectShowcaseProps = {
  project: Project;
  index: number;
};

function ProjectFeatures({ features }: { features: ProjectFeature[] }) {
  return (
    <div className="mt-9 grid gap-6 sm:grid-cols-3">
      {features.map((feature) => (
        <div key={feature.title} className="min-w-0">
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-full ${featureIconStyles[feature.icon]}`}
          >
            <FeatureIcon icon={feature.icon} />
          </span>
          <h4 className="mt-4 text-sm font-bold text-ink">{feature.title}</h4>
          <p className="mt-2 text-sm leading-6 text-ink/65">{feature.text}</p>
        </div>
      ))}
    </div>
  );
}

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="mt-9 flex flex-wrap gap-4">
      {project.url ? (
        <ButtonLink
          href={project.url}
          target="_blank"
          rel="noreferrer"
          trackingEventName="project_click"
          trackingParams={{
            project_id: project.id,
            project_title: project.title,
            destination_type: "live",
            destination_url: project.url,
          }}
          className="min-w-44 gap-3 bg-[#67b8ad] text-ivory shadow-none hover:bg-[#5aa99f]"
        >
          <span>Canlı Proje</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ivory/25 text-ivory">
            <ExternalArrowIcon />
          </span>
        </ButtonLink>
      ) : null}
      {project.github ? (
        <ButtonLink
          href={project.github}
          variant="secondary"
          target="_blank"
          rel="noreferrer"
          trackingEventName="project_click"
          trackingParams={{
            project_id: project.id,
            project_title: project.title,
            destination_type: "github",
            destination_url: project.github,
          }}
          className="min-w-44 gap-3 border-ink/10 bg-transparent text-ink shadow-none hover:bg-ivory/50"
        >
          <span>GitHub</span>
          <GitHubIcon />
        </ButtonLink>
      ) : null}
    </div>
  );
}

function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
  const [projectName, projectKind = "Ürün deneyimi"] =
    project.title.split(" - ");

  return (
    <article className="relative py-12">
      <div className="grid items-center gap-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="order-2 max-w-2xl lg:order-1">
          <h3 className="mt-8 font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            {projectName}
          </h3>
          <p className="mt-3 text-xl font-semibold text-[#67b8ad] sm:text-2xl">
            {projectKind}
          </p>
          <div className="mt-4 h-1 w-28 rounded-full bg-pink" />

          <p className="mt-7 whitespace-pre-line text-base leading-8 text-ink/75 sm:text-lg">
            {project.text}
          </p>

          {project.features?.length ? (
            <ProjectFeatures features={project.features} />
          ) : null}
          <ProjectActions project={project} />
        </div>

        <div className="relative order-1 lg:order-2">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full object-contain object-center"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Projeler"
          title="Üzerinde çalıştığım ürünler ve arayüz deneyimleri."
        />
        <div className=" divide-y divide-ink/10">
          {projects.map((project, index) => (
            <ProjectShowcase key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
