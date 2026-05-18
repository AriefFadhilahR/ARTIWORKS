export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight">ARTIWORKS</span>
          <div className="space-x-8 text-gray-400">
            <a href="#" className="hover:text-white transition">Work</a>
            <a href="#" className="hover:text-white transition">Writing</a>
            <a href="#" className="hover:text-white transition">Dashboard</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="max-w-3xl">
          <div className="text-red-600 text-sm font-mono mb-4">// ARTIFICIAL BUILDER</div>
          <h1 className="text-7xl font-bold tracking-tight leading-tight">
            Arief.
            <br />
            <span className="text-gray-400">Build. Write. Dominate.</span>
          </h1>
          <p className="text-gray-400 text-lg mt-6 max-w-xl">
            Personal digital ecosystem. One karya, satu waktu. 
            Dari coding, nulis, sampe habit tracking — semuanya ada di sini.
          </p>
          <div className="flex gap-4 mt-10">
            <button className="bg-red-700 hover:bg-red-800 px-6 py-3 font-semibold transition">
              EXPLORE PROJECTS
            </button>
            <button className="border border-gray-700 hover:border-white px-6 py-3 font-semibold transition">
              READ ARTICLES
            </button>
          </div>
        </div>
      </section>

      {/* Stats / Quick Preview */}
      <section className="border-t border-gray-800 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="text-red-600 text-3xl font-bold">10+</div>
            <div className="text-white text-lg font-semibold mt-2">Projects</div>
            <div className="text-gray-500 text-sm">Web, UI/UX, blockchain</div>
          </div>
          <div>
            <div className="text-red-600 text-3xl font-bold">∞</div>
            <div className="text-white text-lg font-semibold mt-2">Growth</div>
            <div className="text-gray-500 text-sm">Gym, habit, learning roadmap</div>
          </div>
          <div>
            <div className="text-red-600 text-3xl font-bold">#</div>
            <div className="text-white text-lg font-semibold mt-2">Movement</div>
            <div className="text-gray-500 text-sm">Bukan cuma akun IG</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 text-gray-500 text-sm text-center py-8">
        © 2026 ARTIWORKS — Digital base of Arief
      </footer>
    </div>
  )
}
