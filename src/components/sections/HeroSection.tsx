import { heroContent, socials } from '../../data/portfolio';
import { ButtonLink } from '../ui/ButtonLink';
import { Container } from '../ui/Container';
import { Pill } from '../ui/Pill';
import { ShapeCluster } from '../ui/ShapeCluster';
import { WindowCard } from '../ui/WindowCard';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-12 pt-10 sm:pb-16 sm:pt-14">
      <div className="absolute inset-x-0 top-0 -z-10 h-[540px] bg-[radial-gradient(circle_at_top_left,_rgba(255,189,232,0.6),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(153,176,237,0.45),_transparent_28%),linear-gradient(180deg,_#f4efe4_0%,_#fffaed_100%)]" />
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,500px)] lg:items-start">
        <div className="animate-rise">
          <Pill>{heroContent.eyebrow}</Pill>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-tight text-olive sm:text-6xl">
            {heroContent.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/80">{heroContent.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</ButtonLink>
            <ButtonLink href={heroContent.secondaryCta.href} variant="secondary">
              {heroContent.secondaryCta.label}
            </ButtonLink>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map((social) => (
              <ButtonLink key={social.id} href={social.href} variant="secondary" target="_blank" rel="noreferrer">
                {social.name}
              </ButtonLink>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[500px] animate-sway lg:pt-2">
          <ShapeCluster />
          <WindowCard className="relative -mt-20 rotate-[-2deg] border-coral/10 bg-ivory lg:-mt-24">
            <div className="grid gap-5">
              <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr] sm:items-center">
                <div className="mx-auto h-44 w-44 overflow-hidden rounded-[40%_60%_58%_42%] border-4 border-ivory bg-powder shadow-float">
                  <img
                    src={heroContent.image}
                    alt="Cansu Uğur portre"
                    className="h-full w-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <div className="rounded-[24px] border border-coral/10 bg-gradient-to-br from-pink via-ivory to-peach p-5">
                  <p className="font-accent text-2xl text-coral">Merhaba</p>
                  <p className="mt-3 font-display text-2xl text-ink">
                    Tasarımı üretilebilir, kodu sürdürülebilir arayüzlere dönüştürüyorum.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-[0.9fr_0.9fr_1.15fr]">
                {heroContent.stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex min-h-[116px] flex-col justify-between overflow-hidden rounded-[22px] border border-ink/5 bg-sand px-4 py-5 ${
                      index === 2 ? 'items-center text-center sm:px-5' : ''
                    }`}
                  >
                    <p
                      className={`font-display leading-none text-coral ${
                        index === 2
                          ? 'text-center text-[1.9rem] sm:text-[2.05rem]'
                          : 'break-words text-[2rem] sm:text-[2.2rem]'
                      }`}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-3 text-sm text-ink/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </WindowCard>
        </div>
      </Container>
    </section>
  );
}
