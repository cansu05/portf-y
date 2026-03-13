type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-2xl">
      <h2 className="font-accent text-4xl leading-tight text-olive sm:text-5xl">{eyebrow}</h2>
      <p className="mt-4 max-w-xl font-display text-3xl leading-tight text-coral sm:text-4xl">{title}</p>
      {description ? <p className="mt-5 text-base leading-7 text-ink/78">{description}</p> : null}
    </div>
  );
}
