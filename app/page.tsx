"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    if (newMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  const projects = [
    { title: "ARTIWORKS Ecosystem", category: "Web Development", year: "2026" },
    { title: "Personal Dashboard", category: "Fullstack App", year: "2026" },
    { title: "Habit Tracker", category: "UI/UX Design", year: "2026" },
    { title: "Gym Progress App", category: "Mobile Web", year: "2025" },
    { title: "Blockchain Explorer", category: "Web3 Project", year: "2025" },
    { title: "Content System", category: "CMS Integration", year: "2025" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <span className="logo">ARTIWORKS</span>
        <div className="nav-links">
          <a href="#">Work</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <button onClick={toggleDarkMode} className="theme-toggle">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Arief—</h1>
          <p>
            Building digital ecosystem. Coding, writing, and growth tracking — one karya at a time.
          </p>
          <p className="second-p">
            The combination of my passion for{" "}
            <span className="highlight">design, code & interaction</span> positions me in a unique place in the web world.
          </p>
        </div>
      </section>

      {/* Work Grid */}
      <section>
        <div className="container">
          <h2 className="section-title">Selected Work</h2>
          <div className="work-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image"></div>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 ARTIWORKS — Digital base of Arief</p>
      </footer>
    </>
  );
}
