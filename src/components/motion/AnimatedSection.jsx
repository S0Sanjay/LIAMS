import Reveal from './Reveal';

export default function AnimatedSection({
  children,
  className = '',
  alt = false,
  containerClass = '',
}) {
  return (
    <section className={`section${alt ? ' section--alt' : ''} ${className}`.trim()}>
      <div className={`container ${containerClass}`.trim()}>
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
