"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Brain,
  Globe,
  Database,
  Terminal,
  Sparkles,
  Layers,
  CheckCircle2,
  Cpu,
  FileCode,
  Box,
  Wrench,
} from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillGroups = [
    {
      id: "languages",
      title: "Languages",
      icon: Code2,
      skills: [
        { name: "Python", category: "languages", iconName: "python", badgeColor: "text-[#3776AB]", borderColor: "group-hover:border-[#3776AB]/50" },
        { name: "JavaScript", category: "languages", iconName: "js", badgeColor: "text-[#F7DF1E]", borderColor: "group-hover:border-[#F7DF1E]/50" },
        { name: "Java", category: "languages", iconName: "java", badgeColor: "text-[#5382A1]", borderColor: "group-hover:border-[#5382A1]/50" },
        { name: "C", category: "languages", iconName: "c", badgeColor: "text-[#A8B9CC]", borderColor: "group-hover:border-[#A8B9CC]/50" },
        { name: "SQL", category: "languages", iconName: "sql", badgeColor: "text-[#336791]", borderColor: "group-hover:border-[#336791]/50" },
        { name: "HTML5", category: "languages", iconName: "html", badgeColor: "text-[#E34F26]", borderColor: "group-hover:border-[#E34F26]/50" },
        { name: "CSS3", category: "languages", iconName: "css", badgeColor: "text-[#1572B6]", borderColor: "group-hover:border-[#1572B6]/50" },
      ],
    },
    {
      id: "ml",
      title: "Machine Learning & Data Science",
      icon: Brain,
      skills: [
        { name: "PyTorch", category: "ml", iconName: "pytorch", badgeColor: "text-[#EE4C2C]", borderColor: "group-hover:border-[#EE4C2C]/50" },
        { name: "PyTorch Geometric", category: "ml", iconName: "pyg", badgeColor: "text-[#FF6B6B]", borderColor: "group-hover:border-[#FF6B6B]/50" },
        { name: "Scikit-learn", category: "ml", iconName: "sklearn", badgeColor: "text-[#F7931E]", borderColor: "group-hover:border-[#F7931E]/50" },
        { name: "Pandas", category: "ml", iconName: "pandas", badgeColor: "text-[#150458]", borderColor: "group-hover:border-[#38bdf8]/50" },
        { name: "NumPy", category: "ml", iconName: "numpy", badgeColor: "text-[#013243]", borderColor: "group-hover:border-[#4DABCF]/50" },
        { name: "Matplotlib", category: "ml", iconName: "matplotlib", badgeColor: "text-[#11557C]", borderColor: "group-hover:border-[#38bdf8]/50" },
        { name: "Graph Neural Networks (GNNs)", category: "ml", iconName: "gnn", badgeColor: "text-[#a78bfa]", borderColor: "group-hover:border-[#a78bfa]/50" },
        { name: "NLP & Sentiment Analysis", category: "ml", iconName: "nlp", badgeColor: "text-[#34d399]", borderColor: "group-hover:border-[#34d399]/50" },
      ],
    },
    {
      id: "web",
      title: "Backend & Web Frameworks",
      icon: Globe,
      skills: [
        { name: "FastAPI", category: "web", iconName: "fastapi", badgeColor: "text-[#009688]", borderColor: "group-hover:border-[#009688]/50" },
        { name: "REST APIs (OpenAPI)", category: "web", iconName: "rest", badgeColor: "text-[#85EA2D]", borderColor: "group-hover:border-[#85EA2D]/50" },
        { name: "Next.js", category: "web", iconName: "nextjs", badgeColor: "text-white", borderColor: "group-hover:border-white/50" },
        { name: "React", category: "web", iconName: "react", badgeColor: "text-[#61DAFB]", borderColor: "group-hover:border-[#61DAFB]/50" },
        { name: "Tailwind CSS", category: "web", iconName: "tailwind", badgeColor: "text-[#06B6D4]", borderColor: "group-hover:border-[#06B6D4]/50" },
        { name: "Flask", category: "web", iconName: "flask", badgeColor: "text-gray-300", borderColor: "group-hover:border-gray-400/50" },
        { name: "Bootstrap", category: "web", iconName: "bootstrap", badgeColor: "text-[#7952B3]", borderColor: "group-hover:border-[#7952B3]/50" },
      ],
    },
    {
      id: "tools",
      title: "Tools, Databases & Libraries",
      icon: Wrench,
      skills: [
        { name: "Git", category: "tools", iconName: "git", badgeColor: "text-[#F05032]", borderColor: "group-hover:border-[#F05032]/50" },
        { name: "GitHub", category: "tools", iconName: "github", badgeColor: "text-white", borderColor: "group-hover:border-white/50" },
        { name: "Jupyter Notebook", category: "tools", iconName: "jupyter", badgeColor: "text-[#F37626]", borderColor: "group-hover:border-[#F37626]/50" },
        { name: "SQLite", category: "tools", iconName: "sqlite", badgeColor: "text-[#003B57]", borderColor: "group-hover:border-[#38bdf8]/50" },
        { name: "Tesseract OCR", category: "tools", iconName: "ocr", badgeColor: "text-[#34d399]", borderColor: "group-hover:border-[#34d399]/50" },
        { name: "RapidFuzz", category: "tools", iconName: "fuzzy", badgeColor: "text-[#fbbf24]", borderColor: "group-hover:border-[#fbbf24]/50" },
        { name: "Streamlit", category: "tools", iconName: "streamlit", badgeColor: "text-[#FF4B4B]", borderColor: "group-hover:border-[#FF4B4B]/50" },
        { name: "Chart.js", category: "tools", iconName: "chartjs", badgeColor: "text-[#FF6384]", borderColor: "group-hover:border-[#FF6384]/50" },
      ],
    },
  ];

  const allSkills = skillGroups.flatMap((group) => group.skills);

  const displayedGroups =
    activeCategory === "all"
      ? skillGroups
      : skillGroups.filter((g) => g.id === activeCategory);

  const categoryTabs = [
    { id: "all", label: "All Skills", icon: Layers },
    { id: "languages", label: "Languages", icon: Code2 },
    { id: "ml", label: "Machine Learning & Data", icon: Brain },
    { id: "web", label: "Backend & Web", icon: Globe },
    { id: "tools", label: "Tools & Libraries", icon: Wrench },
  ];

  const renderSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "python":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.927 0C5.64 0 6.012 2.735 6.012 2.735l.006 2.835h5.992v.853H3.633S0 5.992 0 12.247c0 6.256 3.167 6.046 3.167 6.046h1.892v-2.67s-.103-3.18 3.125-3.18h5.36s2.985.045 2.985-2.903V3.623S16.949 0 11.927 0zm-2.88 1.848a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1zm.88 20.304c6.287 0 5.915-2.735 5.915-2.735l-.006-2.835h-5.992v-.853h8.378s3.633.431 3.633-5.824c0-6.256-3.167-6.046-3.167-6.046h-1.892v2.67s.103 3.18-3.125 3.18h-5.36s-2.985-.045-2.985 2.903v5.882S7.051 22.152 12.073 22.152zm2.88-1.848a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z"/>
          </svg>
        );
      case "js":
        return (
          <div className="w-5 h-5 rounded bg-[#F7DF1E] text-black font-extrabold text-[11px] flex items-center justify-center font-mono">
            JS
          </div>
        );
      case "java":
        return (
          <div className="w-5 h-5 rounded bg-[#5382A1] text-white font-extrabold text-[10px] flex items-center justify-center font-mono">
            ☕
          </div>
        );
      case "c":
        return (
          <div className="w-5 h-5 rounded bg-[#A8B9CC] text-black font-black text-[11px] flex items-center justify-center font-mono">
            C
          </div>
        );
      case "sql":
        return <Database className="w-5 h-5 text-[#38bdf8]" />;
      case "html":
        return (
          <div className="w-5 h-5 rounded bg-[#E34F26] text-white font-black text-[9px] flex items-center justify-center font-mono">
            H5
          </div>
        );
      case "css":
        return (
          <div className="w-5 h-5 rounded bg-[#1572B6] text-white font-black text-[9px] flex items-center justify-center font-mono">
            C3
          </div>
        );
      case "pytorch":
        return <span className="text-base leading-none">🔥</span>;
      case "pyg":
        return <span className="text-base leading-none">🕸️</span>;
      case "sklearn":
        return <span className="text-base leading-none">⚙️</span>;
      case "pandas":
        return <span className="text-base leading-none">🐼</span>;
      case "numpy":
        return <span className="text-base leading-none">🔢</span>;
      case "matplotlib":
        return <span className="text-base leading-none">📊</span>;
      case "gnn":
        return <span className="text-base leading-none">⚛️</span>;
      case "nlp":
        return <span className="text-base leading-none">💬</span>;
      case "fastapi":
        return <span className="text-base leading-none">⚡</span>;
      case "rest":
        return <span className="text-base leading-none">🔌</span>;
      case "nextjs":
        return (
          <div className="w-5 h-5 rounded-full bg-white text-black font-extrabold text-[10px] flex items-center justify-center font-mono">
            N
          </div>
        );
      case "react":
        return (
          <svg className="w-5 h-5 text-[#61DAFB] animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="2" fill="currentColor"/>
            <ellipse cx="12" cy="12" rx="10" ry="4.5"/>
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"/>
          </svg>
        );
      case "tailwind":
        return <span className="text-base leading-none">🌊</span>;
      case "flask":
        return <span className="text-base leading-none">🧪</span>;
      case "bootstrap":
        return (
          <div className="w-5 h-5 rounded bg-[#7952B3] text-white font-extrabold text-[11px] flex items-center justify-center font-mono">
            B
          </div>
        );
      case "git":
        return <span className="text-base leading-none">🌿</span>;
      case "github":
        return <span className="text-base leading-none">🐙</span>;
      case "jupyter":
        return <span className="text-base leading-none">🪐</span>;
      case "sqlite":
        return <span className="text-base leading-none">🗄️</span>;
      case "ocr":
        return <span className="text-base leading-none">👁️</span>;
      case "fuzzy":
        return <span className="text-base leading-none">🔍</span>;
      case "streamlit":
        return <span className="text-base leading-none">👑</span>;
      case "chartjs":
        return <span className="text-base leading-none">📈</span>;
      default:
        return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-3 text-3xl sm:text-5xl font-black text-white tracking-tight">
              <span className="text-gradient-cosmic font-mono">#</span>
              <span>skills</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl font-normal">
              Technologies, frameworks, machine learning libraries, and tools I work with daily — extracted directly from my shipping experience and resume.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="glass-panel px-4 py-2 rounded-2xl border border-white/10 flex items-center space-x-3 text-xs font-mono text-cyan-300">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>{allSkills.length} Core Technologies Verified</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center space-x-2 border ${
                  isActive
                    ? "text-white border-cyan-400/50 bg-white/10 shadow-lg shadow-cyan-500/15"
                    : "text-gray-400 border-white/10 hover:text-white hover:bg-white/5 glass-panel"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-cyan-400" : "text-gray-400"}`} />
                <span>{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeSkillInspTab"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 via-violet-600/50 to-cyan-500/50 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Skill Badges Container with Single Keyed Motion Wrapper for AnimatePresence */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-10"
          >
            {displayedGroups.map((group) => (
              <div key={group.id} className="space-y-4">
                {activeCategory === "all" && (
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-gray-400 uppercase tracking-wider pl-1">
                    <group.icon className="w-4 h-4 text-cyan-400" />
                    <span>{group.title}</span>
                  </div>
                )}

                {/* Badges Flex Grid */}
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, delay: idx * 0.02 }}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className={`group relative glass-panel-interactive px-4 py-3 rounded-2xl border border-white/10 flex items-center space-x-3 text-sm font-semibold text-white cursor-default shadow-md ${skill.borderColor}`}
                    >
                      <div className="flex-shrink-0 flex items-center justify-center">
                        {renderSkillIcon(skill.iconName)}
                      </div>
                      <span className="tracking-wide text-gray-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
