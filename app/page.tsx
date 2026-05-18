// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Navbar - Minimalis seperti Dennis */}
      <nav className="flex justify-between items-center p-8 border-b border-gray-200 dark:border-gray-800">
        <span className="text-xl font-bold tracking-tight">ARTIWORKS</span>
        <div className="flex gap-8 text-sm">
          <a href="#" className="hover:underline">Work</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Hero Section - Mirip sapaan Dennis */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-8">
          Arief—
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl">
          Building digital ecosystem. Coding, writing, and growth tracking — one karya at a time.
        </p>
      </section>

      {/* Work Grid */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-2xl font-medium mb-12">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3,4,5,6].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 group-hover:scale-105 transition-transform duration-300"></div>
              </div>
              <h3 className="text-xl font-medium group-hover:underline">Project {item}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Web Design & Development</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer sederhana */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm text-gray-500">
        <p>© 2026 ARTIWORKS — Digital base of Arief</p>
      </footer>
    </div>
  )
}
