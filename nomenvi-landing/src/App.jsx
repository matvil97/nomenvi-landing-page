import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
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
        text="NOMENVI s’appuie sur un écosystème agile et complémentaire, mêlant marketing, digital, accompagnement technique et partenaires spécialisés. Une organisation souple, orientée résultats, qui permet d’avancer rapidement tout en sécurisant le développement."
      >
        <div className="grid cards-3">
          <Reveal delay={0.04}>
            <article className="card">
              <h3>Marketing & communication</h3>
              <p>
                Une approche terrain et réseaux sociaux, notamment avec
                l’implication de ma fille sur ces sujets.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="card">
              <h3>Solutions digitales & web</h3>
              <p>
                Développement et réflexion autour des outils numériques, avec le
                soutien de mon fils sur les aspects techniques.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.16}>
            <article className="card">
              <h3>Partenaires & experts</h3>
              <p>
                Design produit, prototypage, propriété intellectuelle,
                fabrication : un réseau de partenaires spécialisés accompagne le
                projet à chaque étape clé.
              </p>
            </article>
          </Reveal>
        </div>
      </Section>

      <Section
        centered
        title="Une approche engagée"
        text="NOMENVI s’inscrit dans une dynamique durable : faciliter la revente, prolonger la vie des produits et réduire le gaspillage. Nous croyons qu’une meilleure présentation peut aussi encourager une économie circulaire plus concrète, plus simple et plus accessible."
      />

      <Section
        centered
        title="Notre ambition"
        text="Simplifier la création de visuels produits, accélérer la mise en ligne d’articles, valoriser chaque produit quel que soit son prix, et encourager une consommation plus responsable."
      />

      <ImageSection
        id="novsuity"
        title="Le kit qui révolutionne la vente en ligne de vêtements"
        text="Une solution innovante pour présenter, photographier et vendre plus vite, sans contraintes."
        image="/images/produit_novsuity.webp"
        alt="Produit NovSuity en situation"
      >
        <Reveal delay={0.14}>
          <p className="section-text text-soft product-description">
            Conçu pour les vendeurs de seconde main et les particuliers, ce kit
            simplifie chaque étape : de la mise en scène à la publication de vos
            articles.
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
      </ImageSection>

      <section className="cta section-centered">
        <div className="container">
          <Reveal>
            <p className="section-kicker">Rejoindre l’aventure</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="cta-title">
              Le projet entre aujourd’hui dans une phase stratégique de
              lancement.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="section-text">
              Soutenez NovSuity sur Ulule ou contactez-nous pour imaginer une
              collaboration, un partenariat ou un accompagnement au
              développement.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="https://fr.ulule.com/novsuity/"
                target="_blank"
                rel="noreferrer"
              >
                Soutenir NovSuity
              </a>

              <Link className="btn btn-secondary" to="/contact">
                Nous contacter
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <p className="section-kicker">NOMENVI</p>
            <p className="footer-brand">
              Nomenvie.com
            </p>
            <p className="footer-text">
              Solutions innovantes pour simplifier la mise en valeur et la vente
              en ligne des articles de seconde main.
            </p>
          </div>

          <div>
            <h3 className="footer-title">Navigation</h3>
            <div className="footer-links">
              <a href="#vision">Vision</a>
              <a href="#novsuity">NovSuity</a>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="footer-title">Informations</h3>
            <div className="footer-links">
              <a href="/mentions-legales">Mentions légales</a>
              <a href="/cgv-cgu">CGV / CGU</a>
              <a href="/politique-confidentialite">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}