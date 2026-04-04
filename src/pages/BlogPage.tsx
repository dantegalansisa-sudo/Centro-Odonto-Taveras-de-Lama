import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { articles } from '../data/articles';

export default function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="bp" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-brutal)', fontSize: '48px', color: 'var(--primary)' }}>Artículo no encontrado</h1>
          <Link to="/" className="bp__back-link" style={{ marginTop: '24px', display: 'inline-block' }}>← Volver al inicio</Link>
        </div>
      </div>
    );
  }

  const otherArticles = articles.filter((a) => a.slug !== slug);

  return (
    <div className="bp">
      {/* Hero */}
      <section className="bp__hero">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <Link to="/" className="bp__back-link">← Volver al inicio</Link>
            <div className="bp__hero-meta">
              <span className="bp__category">{article.category}</span>
              <span className="bp__read-time">{article.readTime} de lectura</span>
            </div>
            <h1 className="bp__title">{article.title}</h1>
            <p className="bp__excerpt">{article.excerpt}</p>
          </motion.div>
        </div>
      </section>

      {/* Featured image */}
      <section className="bp__image-section">
        <div className="section-container">
          <motion.div
            className="bp__image-wrap"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <img src={article.img} alt={article.title} className="bp__image" />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="bp__content section">
        <div className="section-container">
          <div className="bp__grid">
            <motion.div
              className="bp__main"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {article.content.map((paragraph, i) => (
                <p key={i} className="bp__paragraph">{paragraph}</p>
              ))}

              {article.tips && (
                <div className="bp__tips">
                  <h3 className="bp__tips-title">Datos clave</h3>
                  <ul className="bp__tips-list">
                    {article.tips.map((tip) => (
                      <li key={tip} className="bp__tip">
                        <span className="bp__tip-check">✓</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              className="bp__sidebar"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="bp__cta-card">
                <h3 className="bp__cta-title">¿Necesitas una consulta?</h3>
                <p className="bp__cta-desc">Nuestro equipo está listo para ayudarte. Agenda tu cita hoy.</p>
                <a
                  href={`https://wa.me/18099439216?text=${encodeURIComponent(`Hola, leí el artículo "${article.title}" y me gustaría agendar una consulta.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bp__cta-btn"
                >
                  Agendar por WhatsApp →
                </a>
                <a href="tel:+18095473387" className="bp__cta-phone">
                  O llámanos: (809) 547-3387
                </a>
              </div>

              {otherArticles.length > 0 && (
                <div className="bp__other">
                  <h4 className="bp__other-title">Más artículos</h4>
                  {otherArticles.map((a) => (
                    <Link key={a.slug} to={`/blog/${a.slug}`} className="bp__other-link">
                      <span className="bp__other-category">{a.category}</span>
                      <span>{a.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
}
