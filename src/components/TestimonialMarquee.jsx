import { testimonials } from '../data/siteData';
import './TestimonialMarquee.css';

function TestimonialCard({ quote, author, role, org }) {
  return (
    <blockquote className="marquee-card">
      <p>&ldquo;{quote}&rdquo;</p>
      <footer>
        <cite>{author}</cite>
        <span>
          {role}, {org}
        </span>
      </footer>
    </blockquote>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items];

  return (
    <div
      className={`marquee-row ${reverse ? 'marquee-row--reverse' : ''}`}
      aria-hidden={false}
    >
      <div className="marquee-row__track">
        {doubled.map((item, index) => (
          <TestimonialCard key={`${item.author}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialMarquee() {
  const midpoint = Math.ceil(testimonials.length / 2);
  const rowOne = testimonials.slice(0, midpoint);
  const rowTwo = testimonials.slice(midpoint);

  return (
    <section className="section testimonials-marquee">
      <div className="section__header container">
        <span className="section__label">Testimonials</span>
        <h2>What Our Partners Say</h2>
        <p>Trusted by academic and industry partners for quality, professionalism, and impact.</p>
      </div>
      <div className="marquee-rows">
        <MarqueeRow items={rowOne} />
        <MarqueeRow items={rowTwo} reverse />
      </div>
    </section>
  );
}
