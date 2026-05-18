"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Cek preferensi user dari localStorage atau system preference
    const isDark = localStorage.getItem("darkMode") === "true" ||
      (!localStorage.getItem("darkMode") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.documentElement.classList.toggle("dark", newMode);
  };

  const greetings = ["Hello", "Bonjour", "Halo", "स्वागत हे", "Ciao", "Olá", "おい", "Hallå", "Guten tag", "Hallo"];

  const projects = [
    { title: "ARTIWORKS Ecosystem", category: "Web Development", year: "2026" },
    { title: "Personal Dashboard", category: "Fullstack App", year: "2026" },
    { title: "Habit Tracker", category: "UI/UX Design", year: "2026" },
    { title: "Gym Progress App", category: "Mobile Web", year: "2025" },
    { title: "Blockchain Explorer", category: "Web3 Project", year: "2025" },
    { title: "Content System", category: "CMS Integration", year: "2025" },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      {/* Background & Text Colors */}
      <div className="bg-white dark:bg-black text-black dark:text-white">
        
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50">
          <span className="text-xl font-bold tracking-tight">ARTIWORKS</span>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:underline decoration-2 underline-offset-4">Work</a>
            <a href="#" className="hover:underline decoration-2 underline-offset-4">About</a>
            <a href="#" className="hover:underline decoration-2 underline-offset-4">Contact</a>
            <button onClick={toggleDarkMode} className="ml-4 text-sm">
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </nav>

        {/* Hero Section - dengan sapaan bergantian */}
        <section className="max-w-6xl mx-auto px-8 py-20">
          <div className="text-2xl md:text-3xl font-light text-gray-500 dark:text-gray-400 mb-12 h-12">
            {/* Greeting animation sederhana */}
            <span className="inline-block animate-pulse">→</span> Hello
          </div>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8">
            Arief—
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            Building digital ecosystem. Coding, writing, and growth tracking — one karya at a time.
            <br /><br />
            The combination of my passion for <span className="text-black dark:text-white font-medium">design, code & interaction</span> positions me in a unique place in the web world.
          </p>
        </section>

        {/* Work Grid - Persis seperti Dennis Snellenberg */}
        <section className="max-w-6xl mx-auto px-8 py-20">
          <h2 className="text-2xl font-medium mb-12">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                {/* Image Placeholder - Nanti ganti dengan gambar real */}
                <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-900 mb-4 overflow-hidden rounded-sm">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-800 dark:to-gray-700 group-hover:scale-105 transition-transform duration-500 ease-out"></div>
                </div>
                {/* Title with hover underline effect */}
                <h3 className="text-xl font-medium group-hover:underline decoration-2 underline-offset-4 transition-all duration-200">
                  {project.title}
                </h3>
                {/* Category and Year */}
                <div className="flex justify-between items-center mt-1">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{project.category}</p>
                  <p className="text-gray-400 dark:text-gray-500 text-sm">{project.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Future Goals / About preview section */}
        <section className="max-w-6xl mx-auto px-8 py-20 border-t border-gray-100 dark:border-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-medium mb-6">Future Goals</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Membangun ekosistem digital yang terintegrasi: dari website pusat, dashboard pribadi, 
                hingga sistem konten yang otomatis. Semua untuk mendukung growth sebagai builder.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-6">Stack</h2>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "TailwindCSS", "Supabase", "Framer Motion", "Vercel"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm text-gray-500">
          <p>© 2026 ARTIWORKS — Digital base of Arief</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">GitHub</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </footer>
      </div>

      {/* Global style untuk animasi dan transisi */}
      <style jsx global>{`
        * {
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        section {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
