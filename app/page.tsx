export default function Home() {
  return (
    <div style={{
      backgroundColor: '#000000',
      color: '#FFFFFF',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      margin: 0,
      padding: 0
    }}>
      {/* Navbar - Minimalis */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 48px',
        borderBottom: '1px solid #1A1A1A',
        flexWrap: 'wrap'
      }}>
        <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '-0.5px' }}>ARTIWORKS</span>
        <div style={{ display: 'flex', gap: '32px', fontSize: '14px', fontWeight: '500' }}>
          <a href="#" style={{ color: '#A3A3A3', textDecoration: 'none' }}>WORK</a>
          <a href="#" style={{ color: '#A3A3A3', textDecoration: 'none' }}>WRITING</a>
          <a href="#" style={{ color: '#A3A3A3', textDecoration: 'none' }}>DASHBOARD</a>
        </div>
      </nav>

      {/* Hero Section - Gaya Lando Norris: Nama Besar + Baris Tagline */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '120px 48px 80px 48px'
      }}>
        <div style={{ marginBottom: '32px' }}>
          <span style={{
            color: '#991B1B',
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '1px'
          }}>DIGITAL ECOSYSTEM</span>
        </div>
        <h1 style={{
          fontSize: 'clamp(48px, 10vw, 96px)',
          fontWeight: '700',
          lineHeight: '1.1',
          marginBottom: '24px',
          letterSpacing: '-2px'
        }}>
          Arief.
          <br />
          <span style={{ color: '#A3A3A3' }}>Build. Write. Dominate.</span>
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#A3A3A3',
          maxWidth: '600px',
          marginBottom: '48px'
        }}>
          Personal digital base. Satu karya, satu waktu. Dari coding, nulis, sampai habit tracking — semuanya ada di sini.
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button style={{
            backgroundColor: '#991B1B',
            border: 'none',
            padding: '12px 28px',
            color: 'white',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer'
          }}>EXPLORE PROJECTS</button>
          <button style={{
            backgroundColor: 'transparent',
            border: '1px solid #333',
            padding: '12px 28px',
            color: 'white',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer'
          }}>READ ARTICLES</button>
        </div>
      </section>

      {/* Quote/Manifesto Section */}
      <section style={{
        backgroundColor: '#0A0A0A',
        padding: '80px 48px',
        marginTop: '40px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            fontSize: 'clamp(24px, 5vw, 40px)',
            fontWeight: '500',
            lineHeight: '1.3',
            color: '#E5E5E5',
            maxWidth: '900px',
            fontStyle: 'italic'
          }}>
            "Bukan cuma akun Instagram. Tapi rumah digital. Tempat gua belajar, berkarya, dan membangun diri."
          </p>
          <p style={{ color: '#666', marginTop: '24px', fontSize: '14px' }}>— Arief, Founder of Artiworks</p>
        </div>
      </section>

      {/* Projects Showcase - Gaya Grid Lando Norris */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '48px' }}>Featured Projects</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px'
        }}>
          {[1, 2, 3].map((item) => (
            <div key={item} style={{ borderBottom: '1px solid #222', paddingBottom: '20px' }}>
              <div style={{
                backgroundColor: '#1A1A1A',
                aspectRatio: '16/9',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#555'
              }}>PROJECT IMAGE</div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>Project Name {item}</h3>
              <p style={{ color: '#A3A3A3', fontSize: '14px', marginBottom: '16px' }}>Brief description of this awesome project.</p>
              <a href="#" style={{ color: '#991B1B', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>VIEW PROJECT →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Stats & Metrics Section */}
      <section style={{
        backgroundColor: '#050505',
        borderTop: '1px solid #1A1A1A',
        borderBottom: '1px solid #1A1A1A',
        padding: '70px 48px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
          <div>
            <div style={{ color: '#991B1B', fontSize: '48px', fontWeight: '700' }}>10+</div>
            <div style={{ fontWeight: '600', marginTop: '8px' }}>Projects Built</div>
            <div style={{ color: '#666', fontSize: '14px' }}>Web, UI/UX, Blockchain</div>
          </div>
          <div>
            <div style={{ color: '#991B1B', fontSize: '48px', fontWeight: '700' }}>∞</div>
            <div style={{ fontWeight: '600', marginTop: '8px' }}>Growth Metrics</div>
            <div style={{ color: '#666', fontSize: '14px' }}>Gym, Habits, Roadmap</div>
          </div>
          <div>
            <div style={{ color: '#991B1B', fontSize: '48px', fontWeight: '700' }}>1</div>
            <div style={{ fontWeight: '600', marginTop: '8px' }}>Movement</div>
            <div style={{ color: '#666', fontSize: '14px' }}>Personal Ecosystem</div>
          </div>
        </div>
      </section>

      {/* Writing Teaser */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700' }}>Latest Writing</h2>
          <a href="#" style={{ color: '#A3A3A3', textDecoration: 'none' }}>VIEW ALL →</a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {[
            { title: "Kenapa Arief Bangun Artiworks?", date: "18/05/2026" },
            { title: "Mindset Builder: Bikin Tools untuk Hidup Sendiri", date: "17/05/2026" },
            { title: "Dari IG ke Digital Base: Evolusi Personal Branding", date: "16/05/2026" }
          ].map((post, idx) => (
            <div key={idx} style={{ borderBottom: '1px solid #1A1A1A', paddingBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '500', marginBottom: '8px' }}>{post.title}</h3>
                <span style={{ color: '#666', fontSize: '14px' }}>{post.date}</span>
              </div>
              <p style={{ color: '#A3A3A3', fontSize: '14px' }}>Preview of the article content goes here.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid #1A1A1A',
        padding: '48px 48px 32px 48px',
        textAlign: 'center',
        color: '#666',
        fontSize: '12px'
      }}>
        <p>© 2026 ARTIWORKS — Digital base of Arief</p>
        <p style={{ marginTop: '16px' }}>Built with Next.js • Hosted on Vercel</p>
      </footer>
    </div>
  );
}
