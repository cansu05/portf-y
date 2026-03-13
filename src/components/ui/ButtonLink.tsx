import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

type ButtonLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: 'primary' | 'secondary';
  }
>;

export function ButtonLink({ children, className = '', variant = 'primary', ...props }: ButtonLinkProps) {
  const base =
    'inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200';
  const styles =
    variant === 'primary'
      ? 'bg-coral text-ivory shadow-float hover:-translate-y-0.5 hover:bg-ink'
      : 'border border-coral/35 bg-ivory text-ink hover:-translate-y-0.5 hover:bg-shell';

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}
