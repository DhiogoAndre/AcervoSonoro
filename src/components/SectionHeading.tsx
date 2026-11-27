export type SectionHeadingProps = {
  id?: string;
  title: string;
  subtitle: string;
};

export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2 id={id}>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
