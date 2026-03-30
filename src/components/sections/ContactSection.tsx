import { trackEvent } from '../../lib/analytics';
import { contactMethods } from '../../data/portfolio';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { WindowCard } from '../ui/WindowCard';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container>
        <WindowCard className="overflow-hidden bg-[linear-gradient(135deg,#ffbde8_0%,#fffaed_50%,#99b0ed_100%)]">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionTitle
              eyebrow="İletişim"
              title="Birlikte çalışmak ya da selam vermek için ulaşabilirsiniz."
              description="Yeni projeler, ekip fırsatları veya freelance işler için benimle iletişime geçebilirsiniz."
            />
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className="rounded-[24px] border border-ivory/80 bg-ivory/90 p-5 transition hover:-translate-y-0.5 hover:bg-ivory"
                  onClick={() =>
                    trackEvent('contact_click', {
                      contact_label: method.label,
                      contact_value: method.value,
                      contact_target: method.href,
                    })
                  }
                >
                  <p className="text-sm uppercase tracking-[0.18em] text-coral">{method.label}</p>
                  <p className="mt-3 break-all text-base text-ink">{method.value}</p>
                </a>
              ))}
            </div>
          </div>
        </WindowCard>
      </Container>
    </section>
  );
}
