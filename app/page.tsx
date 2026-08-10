"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import TerminalModal from "@/components/TerminalModal";

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Global Keyboard Shortcut: ⌘K or Ctrl+K opens Terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Navigation Bar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Page Sections */}
      <Hero onOpenTerminal={() => setTerminalOpen(true)} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      {/* Footer & Scroll Controls */}
      <Footer />
      <ScrollToTop />

      {/* Developer Terminal Console Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </main>
  );
}
