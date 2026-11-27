import type { Band } from "./types";

export type BandCardProps = {
  band: Band;
};

export function BandCard({ band }: BandCardProps) {
  return (
    <article className="band-card">
      <img className="band-image" src={band.image} alt={`Foto de ${band.name}`} loading="lazy" />
      <h3>{band.name}</h3>
      <p>{band.description}</p>
    </article>
  );
}
