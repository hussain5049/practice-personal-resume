import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import { CursorGlow, ScrollProgress } from "./components/Effects.jsx";
import PrintResume from "./components/PrintResume.jsx";
import { profile } from "./data/resume.js";

export default function App() {
  return (
    <>
    <PrintResume />
    <div className="noise relative print:hidden">
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="relative z-10 border-t border-white/5 py-10">
        <div className="container-x flex flex-col items-center justify-between gap-3 text-sm text-mist md:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="no-print">
            Built with React, Vite, Tailwind &amp; Framer Motion ·{" "}
            <a href="#top" className="text-fog hover:text-mint">
              Back to top ↑
            </a>
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}
