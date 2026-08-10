"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  FileDown,
  ArrowDown,
  Sparkles,
  Brain,
  Layers,
  Award,
  CheckCircle2,
  Rocket,
  ShieldCheck,
} from "lucide-react";

interface HeroProps {
  onOpenTerminal: () => void;
}

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 1.6 1.6 1.6 1.6 0 0 0-1.6-1.6z"/>
  </svg>
);

export default function Hero({ onOpenTerminal }: HeroProps) {
  const [rolesIndex, setRolesIndex] = useState(0);

  const roles = [
    "GNN & ML Research Developer",
    "Founder & CEO @ Compassion Crew",
    "Full-Stack FastAPI & Next.js Engineer",
    "Data Science Undergrad @ AMC College",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRolesIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Status & Leadership Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-lg shadow-emerald-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Founder & CEO, Compassion Crew</span>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full glass-panel border border-violet-500/30 text-violet-300 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
                <span>NCC Leading Flight Cadet</span>
              </div>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
                Hi, I'm{" "}
                <span className="text-gradient-cosmic">Khushi Kalpesh Joshi</span>
              </h1>

              {/* Dynamic Role Switcher */}
              <div className="flex items-center space-x-3 text-xl sm:text-2xl lg:text-3xl font-bold text-gray-300 h-10">
                <span className="text-gray-400">I am a</span>
                <motion.span
                  key={rolesIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-cyan-400 font-mono font-extrabold border-b-2 border-cyan-400/40 pb-0.5"
                >
                  {roles[rolesIndex]}
                </motion.span>
              </div>

              {/* Bio Summary from Resume */}
              <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
                CS (Data Science) undergraduate at AMC Engineering College, shipping across ML & full-stack software development. 
                Built a multi-scale Graph Neural Network achieving <span className="text-cyan-300 font-semibold font-mono">0.033 eV/atom MAE</span> on crystal property prediction and production REST APIs powering OCR pipelines.
              </p>
            </div>

            {/* High Impact Highlights */}
            <div className="flex flex-wrap gap-3 pt-1">
              <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl glass-panel border border-white/10 text-xs font-semibold text-gray-200">
                <Brain className="w-4 h-4 text-violet-400" />
                <span>PyTorch & PyTorch Geometric</span>
              </div>
              <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl glass-panel border border-white/10 text-xs font-semibold text-gray-200">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>FastAPI & REST APIs</span>
              </div>
              <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl glass-panel border border-white/10 text-xs font-semibold text-gray-200">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Math Olympiad 1st Place</span>
              </div>
            </div>

            {/* CTAs & Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="group px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 text-white font-bold shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:scale-[1.02] transition-all flex items-center space-x-2 text-sm sm:text-base"
              >
                <span>View Projects</span>
                <Rocket className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/khushi_resume.pdf"
                download="Khushi_Kalpesh_Joshi_Resume.pdf"
                className="px-6 py-3.5 rounded-2xl glass-panel text-gray-100 font-bold border border-white/15 hover:border-cyan-400/50 hover:text-white hover:scale-[1.02] transition-all flex items-center space-x-2 text-sm sm:text-base shadow-lg"
              >
                <FileDown className="w-4.5 h-4.5 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center space-x-2.5 pl-2">
                <a
                  href="https://github.com/Khush2803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl glass-panel text-gray-300 hover:text-white hover:border-violet-400/50 hover:scale-110 transition-all border border-white/10 shadow-lg flex items-center justify-center"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/khushi-kalpesh-joshi-895b822a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl glass-panel text-gray-300 hover:text-white hover:border-cyan-400/50 hover:scale-110 transition-all border border-white/10 shadow-lg flex items-center justify-center"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="mailto:khushijoshi.amcec@gmail.com"
                  className="p-3 rounded-2xl glass-panel text-gray-300 hover:text-white hover:border-emerald-400/50 hover:scale-110 transition-all border border-white/10 shadow-lg flex items-center justify-center"
                  title="Direct Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Profile Photo with Glowing Halo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            <div className="relative group w-72 sm:w-80 lg:w-96 aspect-square">
              {/* Outer Pulsing Aura */}
              <div className="absolute -inset-5 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-400 rounded-full blur-3xl opacity-50 group-hover:opacity-85 transition-opacity duration-500 animate-pulse" />

              {/* Rotating Gradient Frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 rounded-full animate-spin-slow opacity-90" />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#080c14] shadow-2xl bg-[#080c14]">
                <Image
                  src="/khushi.jpeg"
                  alt="Khushi Kalpesh Joshi Profile Photo"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 280px, (max-width: 1200px) 320px, 384px"
                />
              </div>

              {/* Floating Floating Info Pill 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-2 glass-panel px-4 py-2.5 rounded-2xl border border-white/20 shadow-2xl flex items-center space-x-2.5 text-xs font-semibold text-white"
              >
                <div className="w-7 h-7 rounded-xl bg-violet-600/30 flex items-center justify-center text-violet-300 font-bold border border-violet-500/30">
                  ⚛️
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider font-mono">GNN Model MAE</div>
                  <div className="font-mono text-cyan-300">0.033 eV/atom GNN</div>
                </div>
              </motion.div>

              {/* Floating Info Pill 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-2 glass-panel px-4 py-2.5 rounded-2xl border border-white/20 shadow-2xl flex items-center space-x-2.5 text-xs font-semibold text-white"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider font-mono">B.E. CS (Data Science)</div>
                  <div className="text-gray-200">AMC College (2023–2027)</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 text-center flex flex-col items-center"
        >
          <a
            href="#about"
            className="text-gray-400 hover:text-white text-xs font-mono tracking-widest uppercase flex flex-col items-center space-y-2 transition-colors"
          >
            <span>Explore Portfolio</span>
            <ArrowDown className="w-4 h-4 text-cyan-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
