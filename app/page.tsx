export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0A0A0A', 
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Navbar */}
      <div style={{ 
        borderBottom: '1px solid #333', 
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>ARTIWORKS</span>
        <div style={{ display: 'flex', gap: '30px', color: '#999' }}>
          <a href="#" style={{ textDecoration: 'none', color: '#999' }}>Work</a>
          <a href="#" style={{ textDecoration: 'none', color: '#999' }}>Writing</a>
          <a href="#" style={{ textDecoration: 'none', color: '#999' }}>Dashboard</a>
        </div>
      </div>

      {/* Hero Section */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 40px' }}>
        <div style={{ color: '#B91C1C', fontSize: '14px', marginBottom: '20px' }}>
          // ARTIFICIAL BUILDER
        </div>
        <h1 style={{ fontSize: '72px', fontWeight: 'bold', marginBottom: '20px' }}>
          Arief.
          <br />
          <span style={{ color: '#999' }}>Build. Write. Dominate.</span>
        </h1>
        <p style={{ color: '#999', fontSize: '18px', maxWidth: '500px' }}>
          Personal digital ecosystem. Satu karya, satu waktu. 
          Dari coding, nulis, sampe habit tracking — semuanya ada di sini.
        </p>
        <div style={{ display: 'flex', gap: '15px', marginTop: '40px' }}>
          <button style={{ 
            backgroundColor: '#B91C1C', 
            border: 'none', 
            padding: '12px 24px', 
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            EXPLORE PROJECTS
          </button>
          <button style={{ 
            backgroundColor: 'transparent', 
            border: '1px solid #444', 
            padding: '12px 24px', 
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            READ ARTICLES
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{ 
        borderTop: '1px solid #222', 
        borderBottom: '1px solid #222',
        backgroundColor: '#0F0F0F',
        padding: '60px 40px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <div style={{ color: '#B91C1C', fontSize: '32px', fontWeight: 'bold' }}>10+</div>
            <div style={{ fontWeight: 'bold', marginTop: '10px' }}>Projects</div>
            <div style={{ color: '#666', fontSize: '14px' }}>Web, UI/UX, blockchain</div>
          </div>
          <div>
            <div style={{ color: '#B91C1C', fontSize: '32px', fontWeight: 'bold' }}>∞</div>
            <div style={{ fontWeight: 'bold', marginTop: '10px' }}>Growth</div>
            <div style={{ color: '#666', fontSize: '14px' }}>Gym, habit, roadmap</div>
          </div>
          <div>
            <div style={{ color: '#B91C1C', fontSize: '32px', fontWeight: 'bold' }}>#</div>
            <div style={{ fontWeight: 'bold', marginTop: '10px' }}>Movement</div>
            <div style={{ color: '#666', fontSize: '14px' }}>Bukan cuma akun IG</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ textAlign: 'center', padding: '30px', color: '#666', fontSize: '14px' }}>
        © 2026 ARTIWORKS — Digital base of Arief
      </div>
    </div>
  )
}
