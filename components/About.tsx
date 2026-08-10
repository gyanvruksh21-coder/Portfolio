"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code,
  LineChart,
  Users,
  Award,
  MapPin,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Trophy,
  Globe2,
  FileCheck,
} from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: LineChart,
      title: "Machine Learning & GNN Engineering",
      description:
        "Engineered multi-scale Graph Neural Networks with PyTorch Geometric achieving 0.033 eV/atom MAE & 0.996 R² on Materials Project test sets.",
      color: "from-violet-500/20 to-indigo-500/20",
      borderColor: "border-violet-500/30",
      iconColor: "text-violet-400",
    },
    {
      icon: Code,
      title: "Full-Stack & REST APIs",
      description:
        "Building production-style REST APIs with FastAPI, OpenAPI specs, React, Next.js, and OCR data pipelines for real-world impact.",
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30",
      iconColor: "text-cyan-400",
    },
    {
      icon: Users,
      title: "Leadership & Community",
      description:
        "Founder & CEO of Compassion Crew, organizing AI workshops & pan-India impact events reaching 120+ participants.",
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
      iconColor: "text-emerald-400",
    },
    {
      icon: Trophy,
      title: "Olympiad & Academic Honors",
      description:
        "1st Place in Ontario Math Olympiad, Robotics Competition Finalist, INTSO Medals, and NCC Leading Flight Cadet.",
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
      iconColor: "text-amber-400",
    },
  ];

  const stats = [
    {
      label: "Education",
      value: "B.E. Computer Science",
      icon: GraduationCap,
      subtext: "Data Science Specialization (2023–2027)",
    },
    {
      label: "Institution",
      value: "AMC Engineering College",
      icon: MapPin,
      subtext: "Bengaluru, Karnataka, India",
    },
    {
      label: "Community Role",
      value: "Founder & CEO",
      icon: Users,
      subtext: "COMPASSION CREW (Pan-India)",
    },
    {
      label: "Defense Cadet",
      value: "NCC Leading Flight Cadet",
      icon: ShieldCheck,
      subtext: "B & C Certificate Holder",
    },
  ];

  const achievements = [
    "🥇 Ontario Math Olympiad — 1st Place",
    "🤖 Robotics Competition Finalist",
    "🏅 INTSO Merit Medals (Math, Science, English)",
    "🎖️ NCC Leading Flight Cadet (B & C Certificates)",
  ];

  const languagesSpoken = [
    { lang: "English", level: "Fluent" },
    { lang: "Hindi", level: "Native" },
    { lang: "Gujarati", level: "Native" },
    { lang: "French", level: "B2 Intermediate" },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-panel border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-cosmic">Khushi</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            CS (Data Science) undergraduate shipping across ML engineering and production web systems. 
            Founder & CEO of a pan-India social impact community, experienced team leader, and competitive Olympiad winner.
          </p>
        </div>

        {/* Profile Spotlight Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left: Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden glass-panel p-3 border border-white/15 shadow-2xl group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/khushi.jpeg"
                  alt="Khushi Kalpesh Joshi Profile Photo"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-2xl border border-white/15 backdrop-blur-md">
                  <div className="text-white font-bold text-lg">Khushi Kalpesh Joshi</div>
                  <div className="text-cyan-300 text-xs font-mono">B.E. Computer Science (Data Science)</div>
                  <div className="text-violet-300 text-xs font-semibold mt-1">Founder & CEO, COMPASSION CREW</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio & Background */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Bridging <span className="text-gradient-cosmic">Advanced ML Engineering</span> & Full-Stack Systems
            </h3>

            <p className="text-gray-300 leading-relaxed text-base">
              Currently pursuing my B.E. in Computer Science with specialization in Data Science at AMC Engineering College in Bengaluru, India (2023–2027). 
              My core technical focus includes Graph Neural Networks (GNNs), materials property prediction, sentiment NLP pipelines, and production REST APIs.
            </p>

            <p className="text-gray-300 leading-relaxed text-base">
              As Founder & CEO of COMPASSION CREW, I connect students, tech professionals, and changemakers across India through workshops, expert talks, and volunteering. 
              I have led 50+ person volunteer teams for national elections and organized high-impact AI events.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-panel-interactive p-4 rounded-2xl border border-white/10 flex items-start space-x-3.5"
                >
                  <div className="p-2.5 rounded-xl bg-violet-900/40 text-violet-400 border border-violet-500/20">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono uppercase tracking-wider">{stat.label}</div>
                    <div className="text-white font-bold text-sm sm:text-base">{stat.value}</div>
                    <div className="text-[11px] text-gray-400 font-mono mt-0.5">{stat.subtext}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements & Languages Bar */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {/* Achievements Card */}
              <div className="glass-panel p-4 rounded-2xl border border-amber-500/30 space-y-2">
                <div className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider flex items-center space-x-1.5">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span>Key Achievements</span>
                </div>
                <ul className="space-y-1 text-xs text-gray-300">
                  {achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Languages Spoken Card */}
              <div className="glass-panel p-4 rounded-2xl border border-cyan-500/30 space-y-2">
                <div className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center space-x-1.5">
                  <Globe2 className="w-4 h-4 text-cyan-400" />
                  <span>Multilingual Proficiency</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {languagesSpoken.map((l, i) => (
                    <div key={i} className="text-xs">
                      <span className="text-white font-semibold">{l.lang}</span>
                      <div className="text-[10px] text-gray-400 font-mono">{l.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Highlights Section */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">What I Bring to the Table</h3>
            <p className="text-gray-400 text-sm mt-2">Combining deep algorithmic engineering with leadership and execution.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`glass-panel-interactive p-6 rounded-3xl border ${item.borderColor} relative overflow-hidden group`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 border border-white/10 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
