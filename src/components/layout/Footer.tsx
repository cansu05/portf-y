import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-ink/5 py-8">
      <Container className="flex flex-col gap-2 text-sm text-ink/70 sm:flex-row sm:items-center sm:justify-between">
        <p>React, TypeScript ve Tailwind CSS ile geliştirildi.</p>
        <p>Cansu Uğur portföyü için retro esintili, yeniden kullanılabilir yapı.</p>
      </Container>
    </footer>
  );
}
