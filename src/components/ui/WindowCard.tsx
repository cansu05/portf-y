import type { PropsWithChildren } from 'react';

type WindowCardProps = PropsWithChildren<{
  className?: string;
}>;

export function WindowCard({ children, className = '' }: WindowCardProps) {
  return (
    <div
      className={`rounded-[32px] border-2 border-ink/5 bg-ivory p-6 shadow-card ${className}`}
    >
      <div className="mb-5 flex gap-2">
        <span className="h-3 w-3 rounded-full bg-coral" />
        <span className="h-3 w-3 rounded-full bg-butter" />
        <span className="h-3 w-3 rounded-full bg-olive" />
      </div>
      {children}
    </div>
  );
}
