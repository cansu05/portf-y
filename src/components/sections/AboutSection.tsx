import { aboutContent } from '../../data/portfolio';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { WindowCard } from '../ui/WindowCard';

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionTitle
          eyebrow="Hakkımda"
          title="Tasarım ve mühendisliği dengeli bir şekilde ele alıyorum."
          description={aboutContent.intro}
        />
        <div className="grid gap-5">
          <WindowCard>
            <div className="space-y-4 text-ink/80">
              {aboutContent.details.map((detail) => (
                <p key={detail} className="leading-7">
                  {detail}
                </p>
              ))}
            </div>
          </WindowCard>
        </div>
      </Container>
    </section>
  );
}
