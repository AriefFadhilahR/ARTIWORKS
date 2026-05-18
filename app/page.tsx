'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Animasi fade-in saat scroll
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }
          .fade-in-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          .project-card {
            transition: transform 0.4s ease, opacity 0.4s ease;
          }
          .project-card:hover {
            transform: scale(0.98);
            opacity: 0.9;
          }
          .nav-link {
            position: relative;
            transition: color 0.3s ease;
          }
          .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 1px;
            bottom: -4px;
            left: 0;
            background-color: #ffffff;
            transition: width 0.3s ease;
          }
          .nav-link:hover::after {
            width: 100%;
          }
          @media (max-width: 768px) {
            .grid-layout {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>

      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          <span style={styles.logo}>ARTIWORKS</span>
          <div style={styles.navLinks}>
            <a href="#" style={styles.navLink} className="nav-link">WORK</a>
            <a href="#" style={styles.navLink} className="nav-link">WRITING</a>
            <a href="#" style={styles.navLink} className="nav-link">DASHBOARD</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent} className="fade-in">
          <div style={styles.heroBadge}>DIGITAL ECOSYSTEM</div>
          <h1 style={styles.heroTitle}>
            Arief.
          </h1>
          <p style={styles.heroSubtitle}>
            Builder & storyteller.
          </p>
          <p style={styles.heroDescription}>
            Membangun ekosistem digital pribadi — satu karya dalam satu waktu.<br />
            Dari coding, nulis, sampai habit tracking.
          </p>
          <div style={styles.buttonGroup}>
            <button style={styles.primaryButton}>EXPLORE PROJECTS</button>
            <button style={styles.secondaryButton}>READ ARTICLES</button>
          </div>
        </div>
      </section>

      {/* Grid Gallery - Mirip Hall of Fame Lando Norris */}
      <section style={styles.gallerySection}>
        <div style={styles.galleryGrid} className="grid-layout">
          <div style={styles.galleryItemLarge} className="project-card fade-in">
            <div style={styles.imagePlaceholder}>PROJECT 1</div>
          </div>
          <div style={styles.galleryItem} className="project-card fade-in">
            <div style={styles.imagePlaceholder}>PROJECT 2</div>
          </div>
          <div style={styles.galleryItem} className="project-card fade-in">
            <div style={styles.imagePlaceholder}>PROJECT 3</div>
          </div>
          <div style={styles.galleryItem} className="project-card fade-in">
            <div style={styles.imagePlaceholder}>PROJECT 4</div>
          </div>
          <div style={styles.galleryItemLarge} className="project-card fade-in">
            <div style={styles.imagePlaceholder}>PROJECT 5</div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section style={styles.quoteSection}>
        <div style={styles.quoteContainer} className="fade-in">
          <p style={styles.quoteText}>
            "It doesn't matter where you start,<br />
            it's how you progress from there."
          </p>
          <p style={styles.quoteAuthor}>— Arief, Founder of Artiworks</p>
        </div>
      </section>

      {/* Projects Hall of Fame - Mirip Helmet Section */}
      <section style={styles.projectsSection}>
        <div style={styles.sectionHeader} className="fade-in">
          <h2 style={styles.sectionTitle}>PROJECTS</h2>
          <a href="#" style={styles.sectionLink}>VIEW ALL →</a>
        </div>
        <div style={styles.projectsGrid}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="project-card fade-in" style={styles.projectItem}>
              <div style={styles.projectImage}>PROJECT {item}</div>
              <h3 style={styles.projectTitle}>Project Name {item}</h3>
              <p style={styles.projectDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Writing Section */}
      <section style={styles.writingSection}>
        <div style={styles.sectionHeader} className="fade-in">
          <h2 style={styles.sectionTitle}>WRITING</h2>
          <a href="#" style={styles.sectionLink}>VIEW ALL →</a>
        </div>
        <div style={styles.writingList}>
          {[
            { title: "Kenapa Arief Bangun Artiworks?", date: "2026" },
            { title: "Mindset Builder: Bikin Tools untuk Hidup Sendiri", date: "2026" },
            { title: "Dari IG ke Digital Base: Evolusi Personal Branding", date: "2026" },
            { title: "Coding, Gym, dan Habit: Disiplin Digital", date: "2026" }
          ].map((post, idx) => (
            <div key={idx} className="fade-in" style={styles.writingItem}>
              <div style={styles.writingItemInner}>
                <h3 style={styles.writingTitle}>{post.title}</h3>
                <span style={styles.writingDate}>{post.date}</span>
              </div>
              <div style={styles.writingDivider} />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <span>© 2026 ARTIWORKS</span>
          <div style={styles.footerLinks}>
            <a href="#" style={styles.footerLink}>Instagram</a>
            <a href="#" style={styles.footerLink}>GitHub</a>
            <a href="#" style={styles.footerLink}>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    margin: 0,
    padding: 0,
    overflowX: 'hidden' as const,
  },
  navbar: {
    borderBottom: '1px solid #1A1A1A',
    position: 'sticky' as const,
    top: 0,
    backgroundColor: '#000000',
    zIndex: 100,
  },
  navContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '24px 48px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
  },
  logo: {
    fontSize: '18px',
    fontWeight: '500',
    letterSpacing: '1px',
  },
  navLinks: {
    display: 'flex',
    gap: '40px',
  },
  navLink: {
    color: '#A3A3A3',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: '400',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  },
  hero: {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    padding: '0 48px',
  },
  heroContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%',
  },
  heroBadge: {
    color: '#666',
    fontSize: '12px',
    letterSpacing: '2px',
    marginBottom: '24px',
    textTransform: 'uppercase' as const,
  },
  heroTitle: {
    fontSize: 'clamp(64px, 12vw, 140px)',
    fontWeight: '700',
    lineHeight: '1',
    marginBottom: '24px',
    letterSpacing: '-3px',
  },
  heroSubtitle: {
    fontSize: 'clamp(20px, 4vw, 28px)',
    color: '#A3A3A3',
    marginBottom: '16px',
    fontWeight: '400',
  },
  heroDescription: {
    fontSize: '16px',
    color: '#A3A3A3',
    maxWidth: '600px',
    lineHeight: '1.6',
    marginBottom: '40px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap' as const,
  },
  primaryButton: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    border: 'none',
    padding: '12px 28px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    border: '1px solid #333',
    color: '#FFFFFF',
    padding: '12px 28px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'border-color 0.3s ease',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  },
  gallerySection: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '80px 48px',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    gridAutoRows: 'minmax(250px, auto)',
  },
  galleryItemLarge: {
    gridColumn: 'span 2',
    gridRow: 'span 2',
  },
  galleryItem: {
    gridColumn: 'span 1',
    gridRow: 'span 1',
  },
  imagePlaceholder: {
    backgroundColor: '#1A1A1A',
    width: '100%',
    height: '100%',
    minHeight: '250px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#555',
    fontSize: '14px',
  },
  quoteSection: {
    borderTop: '1px solid #1A1A1A',
    borderBottom: '1px solid #1A1A1A',
    padding: '100px 48px',
    margin: '40px 0',
  },
  quoteContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center' as const,
  },
  quoteText: {
    fontSize: 'clamp(28px, 5vw, 48px)',
    fontWeight: '500',
    lineHeight: '1.3',
    color: '#E5E5E5',
    marginBottom: '24px',
  },
  quoteAuthor: {
    color: '#666',
    fontSize: '14px',
  },
  projectsSection: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '80px 48px',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: '48px',
    flexWrap: 'wrap' as const,
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: '400',
    letterSpacing: '1px',
  },
  sectionLink: {
    color: '#A3A3A3',
    textDecoration: 'none',
    fontSize: '13px',
    transition: 'color 0.3s ease',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '40px',
  },
  projectItem: {
    cursor: 'pointer',
  },
  projectImage: {
    backgroundColor: '#1A1A1A',
    aspectRatio: '1/1',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#555',
    marginBottom: '20px',
  },
  projectTitle: {
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: '8px',
  },
  projectDescription: {
    color: '#A3A3A3',
    fontSize: '13px',
    lineHeight: '1.5',
  },
  writingSection: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '80px 48px',
    borderTop: '1px solid #1A1A1A',
  },
  writingList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0',
  },
  writingItem: {
    padding: '20px 0',
  },
  writingItemInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexWrap: 'wrap' as const,
    marginBottom: '16px',
  },
  writingTitle: {
    fontSize: '18px',
    fontWeight: '400',
    marginBottom: '8px',
  },
  writingDate: {
    color: '#666',
    fontSize: '12px',
  },
  writingDivider: {
    height: '1px',
    backgroundColor: '#1A1A1A',
    marginTop: '16px',
  },
  footer: {
    borderTop: '1px solid #1A1A1A',
    padding: '48px 48px',
  },
  footerContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: '20px',
    fontSize: '12px',
    color: '#666',
  },
  footerLinks: {
    display: 'flex',
    gap: '32px',
  },
  footerLink: {
    color: '#666',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
};
