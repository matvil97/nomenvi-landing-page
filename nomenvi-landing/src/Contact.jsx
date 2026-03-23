import { motion } from "motion/react";
import "./styles.css";
//
function Reveal({ children, delay = 0, y = 24 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="section section-centered contact-hero">
        <div className="container">
          <Reveal>
            <p className="section-kicker">Contact</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="section-title">Parlons de votre projet</h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="section-text">
              Une question, une collaboration, un partenariat ou un échange
              autour de NovSuity ? Contactez-nous directement.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="hero-actions">
              <Link className="btn btn-secondary" to="/">
                Retour à l’accueil
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid cards-2">
            <Reveal>
              <article className="card">
                <h3>Email</h3>
                <p>contact@nomenvi.com</p>
              </article>
            </Reveal>

            <Reveal delay={0.08}>
              <article className="card">
                <h3>Site web</h3>
                <p>Nomenvie.com</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <p className="section-kicker">NOMENVI</p>
            <p className="footer-brand">Nomenvie.com</p>
          </div>

          <div>
            <h3 className="footer-title">Navigation</h3>
            <div className="footer-links">
              <Link to="/">Accueil</Link>
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