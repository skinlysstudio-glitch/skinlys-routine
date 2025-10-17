type Props = { title: string; price: string; details?: string[]; ctaHref?: string; ctaLabel?: string; };
export default function PricingCard({ title, price, details = [], ctaHref = "#", ctaLabel = "Réserver" }: Props){
  return (
    <div className="card p-6 flex flex-col">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-3xl font-bold">{price}</p>
      <ul className="mt-4 text-sm text-neutral-600 space-y-2">
        {details.map((d, i) => <li key={i}>• {d}</li>)}
      </ul>
      <a href={ctaHref} target="_blank" className="btn btn-primary mt-6">{ctaLabel}</a>
    </div>
  );
}
