export default function Home() {
  return (
    <div style={{
      backgroundColor: '#000000',
      color: '#FFFFFF',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      margin: 0,
      padding: 0
    }}>
      {/* Navbar - Minimalis seperti Lando Norris */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '28px 64px',
        borderBottom: '1px solid #1A1A1A',
        flexWrap: 'wrap'
      }}>
        <span style={{ fontSize: '18px', fontWeight: '500', letterSpacing: '1px' }}>ARTIWORKS</span>
        <div style={{ display: 'flex', gap: '40px', fontSize: '13px', fontWeight: '400', textTransform: 'uppercase' }}>
          <a href="#" style={{ color: '#A3A3A3', textDecoration: 'none' }}>Work</a>
          <a href="#" style={{ color: '#A3A3A3', textDecoration: 'none' }}>Writing</a>
          <a href="#" style={{ color: '#A3A3A3', textDecoration: 'none' }}>Dashboard</a>
        </div>
      </nav>

      {/* Hero Section - Mirip Lando Norris: Nama besar + deskripsi */}
      <section style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '140px 64px 100px 64px'
      }}>
        <h1 style={{
          fontSize: 'clamp(56px, 12vw, 128px)',
          fontWeight: '700',
          lineHeight: '1',
          marginBottom: '32px',
          letterSpacing: '-3px'
        }}>
          Arief.
        </h1>
        <p style={{
          fontSize: 'clamp(18px, 3vw, 22px)',
          color: '#A3A3A3',
          maxWidth: '600px',
          lineHeight: '1.4',
          fontWeight: '400'
        }}>
          Builder & storyteller. Membangun ekosistem digital pribadi — satu karya dalam satu waktu.
        </p>
      </section>

      {/* Featured Image Section - Gaya grid gambar Lando */}
      <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 64px 80px 64px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          gridAutoRows: 'minmax(200px, auto)'
        }}>
          {/* Grid kotak-kotak seperti gallery Lando Norris */}
          <div style={{ gridColumn: 'span 2', gridRow: 'span 2', backgroundColor: '#1A1A1A', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333' }}>IMAGE 1</div>
          <div style={{ backgroundColor: '#1A1A1A', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333' }}>IMAGE 2</div>
          <div style={{ backgroundColor: '#1A1A1A', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333' }}>IMAGE 3</div>
          <div style={{ backgroundColor: '#1A1A1A', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333' }}>IMAGE 4</div>
          <div style={{ backgroundColor: '#1A1A1A', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333' }}>IMAGE 5</div>
        </div>
      </section>

      {/* Quote Section */}
      <section style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '80px 64px',
        borderTop: '1px solid #1A1A1A',
        borderBottom: '1px solid #1A1A1A',
        marginBottom: '80px'
      }}>
        <p style={{
          fontSize: 'clamp(28px, 6vw, 48px)',
          fontWeight: '500',
          lineHeight: '1.2',
          color: '#E5E5E5',
          maxWidth: '900px',
          fontStyle: 'normal'
        }}>
          "It doesn't matter where you start, it's how you progress from there."
        </p>
        <p style={{ color: '#666', marginTop: '24px', fontSize: '14px', fontWeight: '300' }}>— Arief, Founder of Artiworks</p>
      </section>

      {/* Projects Grid - Mirip Hall of Fame Helmet section */}
      <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 64px 100px 64px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '400', marginBottom: '48px', letterSpacing: '1px' }}>PROJECTS</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '40px'
        }}>
          {[1, 2, 3, 4].map((item) => (
            <div key={item}>
              <div style={{
                backgroundColor: '#1A1A1A',
                aspectRatio: '1/1',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#555',
                fontSize: '14px'
              }}>PROJECT {item}</div>
              <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px' }}>Project Name {item}</h3>
              <p style={{ color: '#A3A3A3', fontSize: '13px', lineHeight: '1.4' }}>Brief description of this project.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Writing Section */}
      <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 64px 100px 64px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '400', marginBottom: '48px', letterSpacing: '1px' }}>WRITING</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {[
            { title: "Kenapa Arief Bangun Artiworks?", date: "2026" },
            { title: "Mindset Builder: Bikin Tools untuk Hidup Sendiri", date: "2026" },
            { title: "Dari IG ke Digital Base", date: "2026" }
          ].map((post, idx) => (
            <div key={idx} style={{ borderBottom: '1px solid #1A1A1A', paddingBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '400', marginBottom: '8px' }}>{post.title}</h3>
                <span style={{ color: '#666', fontSize: '12px' }}>{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid #1A1A1A',
        padding: '48px 64px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        fontSize: '12px',
        color: '#666'
      }}>
        <span>© 2026 ARTIWORKS</span>
        <div style={{ display: 'flex', gap: '32px' }}>
          <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Instagram</a>
          <a href="#" style={{ color: '#666', textDecoration: 'none' }}>GitHub</a>
          <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Contact</a>
        </div>
      </footer>
    </div>
  );
}
