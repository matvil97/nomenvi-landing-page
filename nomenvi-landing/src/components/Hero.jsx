import { motion, useScroll, useTransform } from "motion/react";

export default function Hero() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.35]);

  return (
    <section className="hero">
      <motion.div className="hero-background" style={{ y, opacity }} />
      
      <div className="container hero-content">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          NOMENVI
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Transformer le second-hand en opportunité
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Et si vendre un vêtement en ligne devenait aussi simple que le photographier ?
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <a
            className="btn btn-primary"
            href="https://fr.ulule.com/novsuity/"
            target="_blank"
            rel="noreferrer"
          >
            Soutenir NovSuity
          </a>

          <a className="btn btn-secondary" href="#vision">
            Découvrir le projet
          </a>
        </motion.div>
      </div>
    </section>
  );
}