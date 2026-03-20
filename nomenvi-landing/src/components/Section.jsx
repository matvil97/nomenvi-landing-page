import Reveal from "./Reveal";

export default function Section({ id, title, text, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <Reveal>
          <p className="section-kicker">NOMENVI</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="section-title">{title}</h2>
        </Reveal>

        {text && (
          <Reveal delay={0.1}>
            <p className="section-text">{text}</p>
          </Reveal>
        )}

        {children}
      </div>
    </section>
  );
}