import type { PropsWithChildren } from 'react';

export function Pill({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex rounded-full border border-coral/10 bg-ivory px-3 py-1 text-sm font-semibold text-ink shadow-sm">
      {children}
    </span>
  );
}
