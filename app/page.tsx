"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.documentElement.classList.toggle("dark", newMode);
  };

  const projects = [
    { title: "ARTIWORKS Ecosystem", category: "Web Development", year: "2026" },
    { title: "Personal Dashboard", category: "Fullstack App", year: "2026" },
    { title: "Habit Tracker", category: "UI/UX Design", year: "2026" },
    { title: "Gym Progress App", category: "Mobile Web", year: "2025" },
  ];

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
        
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-200 dark:border-gray-800">
          <span className="text-xl font-bold">ARTIWORKS</span>
          <div className="flex gap-6 items-center">
            <a href="#" className="hover:underline">Work</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
            <button 
              onClick={toggleDarkMode}
              className="px-3 py-1 rounded border border-gray-300 dark:border-gray-700"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-8 py-24">
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-6">
            Arief—
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Building digital ecosystem. Coding, writing, and growth tracking — one karya at a time.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mt-6">
            The combination of my passion for <span className="text-black dark:text-white font-medium">design, code & interaction</span> positions me in a unique place in the web world.
          </p>
        </section>

        {/* Work Grid */}
        <section className="max-w-6xl mx-auto px-8 py-16">
          <h2 className="text-2xl font-medium mb-12">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-900 mb-4 overflow-hidden rounded-sm">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 group-hover:scale-105 transition-transform duration-500"></div>
                </div>
                <h3 className="text-xl font-medium group-hover:underline">
                  {project.title}
                </h3>
                <div className="flex justify-between mt-1">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{project.category}</p>
                  <p className="text-gray-400 dark:text-gray-500 text-sm">{project.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm text-gray-500">
          <p>© 2026 ARTIWORKS — Digital base of Arief</p>
        </footer>
      </div>
    </div>
  );
}
