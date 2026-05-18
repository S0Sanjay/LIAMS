import './PageHero.css';

export default function PageHero({ title, subtitle, label }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        {label && <span className="page-hero__label">{label}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
