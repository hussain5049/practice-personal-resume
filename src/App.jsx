import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Ecosystem from "./components/Ecosystem.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import PrintResume from "./components/PrintResume.jsx";
import { CursorGlow, Marquee, NeuralCanvas, Scanline, ScrollProgress } from "./components/Effects.jsx";
import { profile } from "./data/resume.js";

export default function App() {
  return (
    <>
      <PrintResume />
      <div className="relative print:hidden">
        <NeuralCanvas />
        <Scanline />
        <ScrollProgress />
        <CursorGlow />
        <Nav />
        <main className="relative z-10">
          <Hero />
          <Marquee />
          <About />
          <Ecosystem />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <footer className="relative z-10 border-t border-mint/15 py-10">
          <div className="container-x text-center font-mono text-[11px] uppercase tracking-[0.12em] text-mist">
            © {new Date().getFullYear()} {profile.name} // Managing Director &amp; Technical Head at{" "}
            <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-mint">
              omebly.com
            </a>{" "}
            // Kolkata, India • Downtown Dubai, UAE
            <span className="mx-3 hidden md:inline">·</span>
            <a href="#top" className="mt-2 block text-fog hover:text-mint md:mt-0 md:inline">
              Back to top ↑
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
