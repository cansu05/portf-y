import { experience } from "../../data/portfolio";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { WindowCard } from "../ui/WindowCard";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Deneyim"
          title="Profesyonel yolculuğumun kısa bir özeti."
          description="Yer aldığım ekiplerde ürün ihtiyaçlarını kullanıcı deneyimi, arayüz kalitesi ve sürdürülebilir frontend çözümleriyle destekledim."
        />
        <div className="mt-10 space-y-6">
          {experience.map((item) => (
            <WindowCard key={`${item.company}-${item.role}-${item.period}`}>
              <div className="grid gap-5 lg:grid-cols-[0.35fr_0.65fr] lg:items-center">
                <div>
                  <p className="font-accent text-2xl text-olive">
                    {item.period}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-coral">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-base text-ink">{item.company}</p>
                </div>
                <div>
                  <p className="leading-7 text-ink/80">{item.description}</p>
                </div>
              </div>
            </WindowCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
