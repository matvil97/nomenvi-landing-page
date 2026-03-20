import Hero from "./components/Hero";
import Section from "./components/Section";
import Reveal from "./components/Reveal";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Hero />

      <Section
        id="vision"
        title="Une vision née de l’expérience"
        text="NOMENVI est née d’un constat simple : mettre en valeur un article à vendre en ligne reste souvent compliqué, chronophage et peu optimisé. Face au manque de temps, à l’absence d’outils adaptés et à la difficulté d’obtenir des photos de qualité, il devenait nécessaire d’imaginer une solution pensée pour un usage concret, simple et efficace."
      />

      <Section
        title="La fondatrice"
        text="À l’origine de NOMENVI, une ambition claire : rendre les outils de mise en valeur produit accessibles à tous. Je pilote la stratégie, le développement produit et le lancement de NovSuity, avec une approche fondée sur la formation aux outils numériques, l’innovation et l’expérience utilisateur."
      >
        <Reveal delay={0.15}>
          <blockquote className="quote">
            “Je veux rendre la mise en valeur produit accessible à tous.”
          </blockquote>
        </Reveal>
      </Section>

      <Section
        title="Une équipe en construction, déjà engagée"
        text="NOMENVI s’appuie sur un écosystème agile et complémentaire, mêlant marketing, digital, accompagnement technique et partenaires spécialisés."
      >
        <div className="grid cards-3">
          <Reveal delay={0.05}>
            <article className="card">
              <h3>Marketing & communication</h3>
              <p>
                Une approche terrain et réseaux sociaux, avec l’implication de ma fille.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.12}>
            <article className="card">
              <h3>Solutions digitales & web</h3>
              <p>
                Développement des outils et réflexion technique, avec le soutien de mon fils.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.19}>
            <article className="card">
              <h3>Partenaires & experts</h3>
              <p>
                Design produit, prototypage, propriété intellectuelle et fabrication.
              </p>
            </article>
          </Reveal>
        </div>
      </Section>

      <Section
        title="Notre innovation : NovSuity"
        text="Une solution pensée pour simplifier la vente en ligne d’articles, en particulier dans la mode et la seconde main."
      >
        <div className="grid cards-2">
          {[
            "Support pliable à accroche porte",
            "Fonds photo interchangeables",
            "Éclairage LED amovible",
            "Housse de transport",
            "Assistant intelligent inclus pendant 1 an",
            "Usage mobile, simple et concret",
          ].map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <article className="feature">
                <span className="feature-dot" />
                <p>{item}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        title="Notre ambition"
        text="Simplifier la création de visuels produits, accélérer la mise en ligne, valoriser chaque article et encourager une consommation plus responsable."
      />

      <Section
        title="Une approche engagée"
        text="En facilitant la revente et en prolongeant la durée de vie des produits, NOMENVI s’inscrit dans une logique plus durable, au service d’une économie circulaire concrète."
      />

      <section className="cta">
        <div className="container">
          <Reveal>
            <p className="section-kicker">Rejoindre l’aventure</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="cta-title">
              Le projet entre aujourd’hui dans une phase stratégique de lancement.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="https://fr.ulule.com/novsuity/"
                target="_blank"
                rel="noreferrer"
              >
                Soutenir NovSuity
              </a>
              <a className="btn btn-secondary" href="#contact">
                Nous contacter
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container">
          <Reveal>
            <h2 className="section-title">Contact</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="section-text">
              Une question, une collaboration, un partenariat ? Écrivez-nous.
            </p>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}