import { skillGroups } from '../../data/portfolio';
import { Container } from '../ui/Container';
import { Pill } from '../ui/Pill';
import { SectionTitle } from '../ui/SectionTitle';

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Yetenekler"
          title="Üretim sürecimi destekleyen araçlar ve teknolojiler."
          description="Frontend geliştirme odağımı; stil sistemleri, veri katmanı, tasarım araçları ve ek teknolojilerle tamamlıyorum."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-[28px] border border-ink/5 bg-ivory p-6 shadow-card">
              <h3 className="font-display text-2xl text-coral">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
