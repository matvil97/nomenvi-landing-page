import { motion, useScroll, useTransform } from "motion/react";
import "./styles.css";

function Reveal({ children, delay = 0, y = 28 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 120]);
  const bgOpacity = useTransform(scrollY, [0, 350], [1, 0.4]);

  return (
    <section className="hero hero-centered">
      <motion.div
        className="hero-background"
        style={{ y: bgY, opacity: bgOpacity }}
      />

      <div className="container hero-center">
        <Reveal>
          <p className="eyebrow">NOMENVI</p>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="hero-title">
            Transformer la seconde main en opportunité
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="hero-subtitle">
            Et si vendre un vêtement en ligne devenait aussi simple que le
            photographier ? NOMENVI développe des solutions intelligentes,
            mobiles et accessibles pour simplifier la mise en valeur des
            produits et fluidifier leur revente en ligne.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="hero-actions">
            <a className="btn btn-secondary" href="#novsuity">
              Découvrir le projet
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Section({ id, title, text, children, centered = false }) {
  return (
    <section
      id={id}
      className={`section ${centered ? "section-centered" : ""}`}
    >
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

function ImageSection({
  id,
  title,
  text,
  image,
  alt,
  reverse = false,
  children,
}) {
  return (
    <section id={id} className="section">
      <div className={`container split ${reverse ? "reverse" : ""}`}>
        <div className="split-text">
          <Reveal>
            <p className="section-kicker">NOMENVI</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="section-title">{title}</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="section-text">{text}</p>
          </Reveal>

          {children}
        </div>

        <Reveal delay={0.14}>
          <div className="image-card">
            <img src={image} alt={alt || title} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function App() {
  const productFeatures = [
    "Support pliable à accroche sur porte",
    "Fonds photo interchangeables, mats et infroissables",
    "Éclairage LED amovible",
    "Housse de transport",
    "Assistant intelligent inclus pendant 1 an",
  ];

  return (
    <main>
      <Hero />

      <Section
        id="vision"
        centered
        title="Une vision née de l’expérience"
        text="NOMENVI est née d’un constat simple : mettre en valeur un article à vendre en ligne reste souvent compliqué, chronophage et peu optimisé. En tant qu’utilisatrice moi-même, j’ai été confrontée à ces limites : manque de temps, absence d’outils adaptés, difficulté à obtenir des photos de qualité. C’est de cette expérience concrète qu’est née l’envie de créer une solution dédiée, accessible et efficace."
      />

      <ImageSection
        title="La fondatrice"
        text="Fondatrice de NOMENVI, je pilote la stratégie, le développement produit et le lancement de NovSuity. Mon parcours s’inscrit à la croisée de la formation en outils numériques, de la création de solutions innovantes et d’une forte sensibilité à l’expérience utilisateur. Aujourd’hui, je porte une ambition claire : démocratiser des outils de mise en valeur produits pour tous."
        image="/images/fondatrices.jpeg"
        alt="Portrait de la fondatrice de NOMENVI"
        reverse
      >
        <Reveal delay={0.16}>
          <blockquote className="quote">
            “Je veux rendre la mise en valeur produit accessible à tous, quel
            que soit le niveau, le budget ou le contexte.”
          </blockquote>
        </Reveal>
      </ImageSection>

      <Section
        centered
        title="Une équipe en construction, déjà engagée"
        text="NOMENVI s’appuie sur un écosystème agile et complémentaire, mêlant marketing, communication, développement digital et partenaires spécialisés. Cette organisation souple et orientée résultats permet d’avancer rapidement tout en sécurisant chaque étape du développement du projet."
      />

      <Section
        centered
        title="Une approche engagée"
        text="NOMENVI s’inscrit dans une dynamique durable : faciliter la revente, prolonger la vie des produits et réduire le gaspillage. Nous croyons qu’une meilleure présentation des produits peut encourager une économie circulaire plus concrète, plus simple et plus accessible à tous."
      />

      <Section
        centered
        title="Notre ambition"
        text="Simplifier la création de visuels produits, accélérer la mise en ligne d’articles, valoriser chaque produit quel que soit son prix, et encourager une consommation plus responsable."
      />

      <Section
        id="novsuity"
        centered
        title="Le kit qui révolutionne la vente en ligne de vêtements"
        text="Une solution innovante pour présenter, photographier et vendre plus vite, sans contraintes."
      >
        <Reveal delay={0.14}>
          <p className="section-text text-soft product-text">
            Conçu pour les vendeurs de seconde main et les particuliers, ce kit
            simplifie chaque étape : de la mise en scène à la publication de vos
            articles. Il permet de gagner du temps, d’améliorer la qualité
            visuelle des produits et de professionnaliser la présentation sans
            compétences techniques spécifiques.
          </p>
        </Reveal>

        <div className="grid cards-2">
          {productFeatures.map((item, index) => (
            <Reveal key={item} delay={0.18 + index * 0.05}>
              <article className="feature">
                <span className="feature-dot" />
                <p>{item}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.45}>
          <div className="product-cta">
            <a
              className="btn btn-primary"
              href="https://novsuity.fr/"
              target="_blank"
              rel="noreferrer"
            >
              En savoir plus
            </a>
          </div>
        </Reveal>
      </Section>

      <footer id="contact" className="footer section-centered">
        <div className="container footer-contact-container">
          <Reveal>
            <p className="section-kicker">Contact</p>
          </Reveal>

<Reveal delay={0.05}>
  <h2 className="section-title footer-title-small">Parlons du projet</h2>
</Reveal>

<Reveal delay={0.1}>
  <p className="section-text">
    Une question, une collaboration, un partenariat ou un échange autour du projet ? <br />
    N’hésitez pas à nous contacter.
  </p>
</Reveal>

<div className="footer-meta">
  <div className="footer-social-row">
    <a
      className="footer-icon-link"
      href="mailto:valerie@nomenvi.com"
      aria-label="Envoyer un email à NOMENVI"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.236l7.386 6.155a1 1 0 0 0 1.228 0L20 8.236V18H4z" />
      </svg>
    </a>

    <a
      className="footer-icon-link"
      href="https://www.linkedin.com/in/val%C3%A9rie-decaille-vilmen/"
      target="_blank"
      rel="noreferrer"
      aria-label="Profil LinkedIn de NOMENVI"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.036-1.849-3.036-1.851 0-2.134 1.445-2.134 2.939v5.666h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.601 0 4.267 2.37 4.267 5.455v6.285zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
      </svg>
    </a>
  </div>

  <nav className="footer-legal-list" aria-label="Liens légaux">
    <a href="/mentions-legales.html">Mentions légales</a>
  </nav>

  <p className="footer-copy">
    © NOMENVI 2026 — Tous droits réservés
  </p>
</div>
        </div>
      </footer>
    </main>
  );
}