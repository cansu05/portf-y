import { trackEvent } from '../../lib/analytics';
import { navItems } from '../../data/portfolio';
import { Container } from '../ui/Container';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-sand/90 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <a
          href="#"
          className="font-display text-2xl text-olive"
          onClick={() => trackEvent('navigation_click', { link_name: 'logo', link_target: '#' })}
        >
          Cansu Uğur
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center text-sm font-semibold text-ink/80 transition hover:text-coral"
              onClick={() => trackEvent('navigation_click', { link_name: item.label, link_target: item.href })}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
