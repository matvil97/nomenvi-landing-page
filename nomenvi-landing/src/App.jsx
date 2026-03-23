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
          <p className="eyebrow">NOMENVI · Nomenvie.com</p>
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
        text="NOMENVI est née d’un constat simple : mettre en valeur un article à vendre en ligne reste souvent compliqué, chronophage et peu optimisé..."
      />

      <ImageSection
        title="La fondatrice"
        text="Fondatrice de NOMENVI, je pilote la stratégie..."
        image="/images/fondatrices.jpeg"
        reverse
      />

      <Section
        centered
        title="Une équipe en construction, déjà engagée"
        text="NOMENVI s’appuie sur un écosystème agile..."
      />

      <Section
        centered
        title="Une approche engagée"
        text="NOMENVI s’inscrit dans une dynamique durable..."
      />

      <Section
        centered
        title="Notre ambition"
        text="Simplifier la création de visuels produits..."
      />

      <ImageSection
        id="novsuity"
        title="Le kit qui révolutionne la vente en ligne de vêtements"
        text="Une solution innovante pour présenter, photographier et vendre plus vite, sans contraintes."
        image="/images/produit_novsuity.webp"
      >
        <Reveal>
          <p className="section-text text-soft">
            Conçu pour les vendeurs de seconde main...
          </p>
        </Reveal>

        <div className="grid cards-2">
          {productFeatures.map((item) => (
            <article className="feature" key={item}>
              <span className="feature-dot" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </ImageSection>

      {/* CONTACT EN BAS */}

      <footer id="contact" className="footer section-centered">
        <div className="container">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Parlons du projet</h2>

          <p className="section-text">
            Une question, une collaboration, un partenariat ? Écrivez-nous.
          </p>

          <div className="grid cards-2">
            <article className="card">
              <h3>Email</h3>
              <p>contact@nomenvi.com</p>
            </article>

            <article className="card">
              <h3>Site</h3>
              <p>Nomenvie.com</p>
            </article>
          </div>

          <div className="footer-legal">
            <a href="#">Mentions légales</a>
            <a href="#">CGV / CGU</a>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </main>
  );
}