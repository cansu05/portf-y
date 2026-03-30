import type { AnchorHTMLAttributes, MouseEvent, PropsWithChildren } from 'react';
import { trackEvent } from '../../lib/analytics';

type ButtonLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: 'primary' | 'secondary';
    trackingEventName?: string;
    trackingParams?: Record<string, string | number | boolean | undefined>;
  }
>;

export function ButtonLink({
  children,
  className = '',
  variant = 'primary',
  trackingEventName,
  trackingParams,
  onClick,
  ...props
}: ButtonLinkProps) {
  const base =
    'inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200';
  const styles =
    variant === 'primary'
      ? 'bg-coral text-ivory shadow-float hover:-translate-y-0.5 hover:bg-ink'
      : 'border border-coral/35 bg-ivory text-ink hover:-translate-y-0.5 hover:bg-shell';

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (trackingEventName) {
      trackEvent(trackingEventName, trackingParams);
    }

    onClick?.(event);
  };

  return (
    <a className={`${base} ${styles} ${className}`} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
