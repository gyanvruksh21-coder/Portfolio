"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderGit2,
  Eye,
  Star,
  ExternalLink,
  Sparkles,
  Atom,
  Flame,
  ShieldAlert,
  Film,
  Gamepad2,
  ShoppingCart,
  Heart,
  BarChart,
  LineChart,
} from "lucide-react";
import ProjectModal, { ProjectType } from "./ProjectModal";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const projects: ProjectType[] = [
    {
      id: 1,
      title: "GNN for Crystal Property Prediction",
      description:
        "Developed a multi-scale Graph Neural Network (GNN) using 3 cutoff radii (4Å, 6Å, 8Å) with cross-attention fusion. Achieved a state-of-the-art MAE 0.033 eV/atom and R² 0.996 on Materials Project held-out test sets while resolving Weisfeiler-Lehman (WL) isomorphism collisions.",
      technologies: [
        "PyTorch",
        "PyTorch Geometric",
        "Materials Project API",
        "Graph Neural Networks",
        "Python",
      ],
      github: "https://github.com/Khush2803",
      demo: null,
      featured: true,
      category: "Machine Learning & GNN Engineering",
      highlights: [
        "Multi-scale GNN architecture using 3 cutoff radii (4Å, 6Å, 8Å) with cross-attention fusion",
        "Achieved MAE 0.033 eV/atom and R² 0.996 on held-out test sets",
        "Resolved WL isomorphism collisions across 10 material pairs in TiO2, SnO2, and Fe2O3 systems",
        "Overcame structural ambiguity where distinct crystal structures appear identical to standard GNNs",
      ],
    },
    {
      id: 2,
      title: "CarbonDrop — OCR Carbon Footprint Engine",
      description:
        "Built a multi-domain carbon footprint calculator processing real receipts, utility bills, and tickets via OCR, fuzzy-matching items against DEFRA/EPA emission datasets for per-item CO2 figures. Engineered 6 simulation endpoints, EcoCredits gamification, and auto-generated OpenAPI specs.",
      technologies: [
        "FastAPI",
        "React",
        "Tailwind",
        "SQLite",
        "Tesseract OCR",
        "RapidFuzz",
        "Chart.js",
      ],
      github: "https://github.com/Khush2803/CarbonDrop.git",
      demo: null,
      featured: true,
      category: "Full-Stack REST API & OCR Data Pipeline",
      highlights: [
        "OCR receipt & bill parsing with RapidFuzz fuzzy item matching against DEFRA/EPA emission datasets",
        "Engineered 6 what-if simulation endpoints for carbon footprint forecasting",
        "Integrated EcoCredits gamification layer & interactive Chart.js emission dashboards",
        "Documented production REST API via auto-generated OpenAPI specs",
      ],
    },
    {
      id: 3,
      title: "Email Phishing Detection System",
      description:
        "Built a supervised machine learning classifier to detect and flag phishing emails. Engineered comprehensive text features, performed TF-IDF vectorization, and ran cross-validated model evaluation to select optimal metrics.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NLP",
        "Seaborn",
        "Classification",
      ],
      github: "https://github.com/Khush2803",
      demo: null,
      featured: true,
      category: "Cybersecurity & Machine Learning",
      highlights: [
        "Supervised ML classifier for email security and phishing detection",
        "Feature engineering pipeline analyzing text structures and email metadata",
        "Cross-validated evaluation selecting top accuracy models",
        "Seaborn performance visualization plots",
      ],
    },
    {
      id: 4,
      title: "Movie Recommendation System",
      description:
        "Implemented a content-based recommendation engine using TF-IDF text vectorization and cosine similarity matrix matching. Developed an interactive Streamlit UI for personalized movie recommendations.",
      technologies: ["Python", "Scikit-learn", "Streamlit", "TF-IDF", "NLP"],
      github: "https://github.com/Khush2803",
      demo: null,
      featured: false,
      category: "NLP & Streamlit Application",
      highlights: [
        "TF-IDF content-based similarity matching engine",
        "Cosine similarity matrix recommendation algorithm",
        "Interactive Streamlit web frontend",
      ],
    },
    {
      id: 5,
      title: "Tech-O-Ween 3-Level Browser Game",
      description:
        "Designed and implemented a custom 3-level browser game for Tech-O-Ween (engaging 25 teams) and organized a campus esports tournament with 120+ participants.",
      technologies: ["HTML5 Canvas", "JavaScript", "CSS3", "Game Design"],
      github: "https://github.com/Khush2803/skribble-",
      demo: null,
      featured: false,
      category: "Game Design & Campus Event",
      highlights: [
        "Custom 3-level browser game developed for Tech-O-Ween (25 teams)",
        "Canvas API animation loop & collision detection",
        "Campus esports tournament reaching 120+ participants",
      ],
    },
    {
      id: 6,
      title: "Krochet Freelance E-commerce Store",
      description:
        "A responsive e-commerce website designed and developed for a local crochet fashion brand. Features product catalog displays, cart functionality, and mobile-friendly navigation aligned with client brand identity.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "E-commerce"],
      github: "https://github.com/Khush2803",
      demo: null,
      featured: false,
      category: "E-commerce & Web Development",
      highlights: [
        "Responsive catalog design for mobile & desktop viewports",
        "Interactive shopping cart state management",
        "Client brand visual alignment",
      ],
    },
    {
      id: 7,
      title: "Unemployment Rate Data Analysis",
      description:
        "Analyzed unemployment rate datasets to identify regional and temporal trends across India. Performed data cleaning and exploratory data analysis using Pandas, Matplotlib, and Seaborn.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
      github: "https://github.com/Khush2803/Unemployment-analysis.git",
      demo: null,
      featured: false,
      category: "Data Analysis & EDA",
      highlights: [
        "Regional employment trend extraction across time series",
        "Pandas data preprocessing & missing value imputation",
        "Seaborn heatmaps and statistical plots",
      ],
    },
    {
      id: 8,
      title: "Sales & Revenue Analytics Engine",
      description:
        "Conducted exploratory data analysis on commercial sales datasets to uncover purchasing patterns and revenue trends. Created visual reports using Matplotlib to support data-driven decision making.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "EDA"],
      github: "https://github.com/Khush2803",
      demo: null,
      featured: false,
      category: "Business Intelligence",
      highlights: [
        "Customer purchasing behavior and seasonality analysis",
        "Revenue trend forecasting and report generation",
      ],
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : activeFilter === "featured"
      ? projects.filter((p) => p.featured)
      : activeFilter === "ml"
      ? projects.filter((p) => p.category.includes("Machine") || p.category.includes("GNN") || p.category.includes("Cybersecurity") || p.category.includes("NLP"))
      : projects.filter((p) => p.category.includes("REST") || p.category.includes("Full-Stack") || p.category.includes("Web") || p.category.includes("E-commerce") || p.category.includes("Game"));

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "featured", label: "Flagship / Featured" },
    { id: "ml", label: "GNN & Machine Learning" },
    { id: "web", label: "Full-Stack & Web" },
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Software & ML Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Projects & <span className="text-gradient-cosmic">ML Systems</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Explore my flagship Graph Neural Network development, production REST APIs, ML classifiers, and full-stack web applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`relative px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? "text-white border-cyan-400/50 shadow-lg shadow-cyan-500/20"
                    : "text-gray-400 border-white/10 hover:text-white glass-panel"
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600/60 via-violet-600/60 to-cyan-500/60 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Projects Grid Container */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="glass-panel-interactive p-6 sm:p-7 rounded-3xl border border-white/10 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Category & Featured Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-gray-900/80 text-cyan-300 border border-cyan-500/20">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center space-x-1 text-amber-300 text-xs font-bold font-mono bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                        <Star className="w-3.5 h-3.5 fill-amber-300" />
                        <span>FLAGSHIP</span>
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-gray-200 bg-white/5 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-gray-400 bg-white/5">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 text-xs font-semibold text-gray-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-gray-400" />
                    <span>Source Code</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-violet-600/30 text-violet-300 hover:bg-violet-600/50 hover:text-white border border-violet-500/30 text-xs font-bold transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub Button */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/Khush2803"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-2xl glass-panel text-white font-bold border border-white/15 hover:border-cyan-400/50 hover:scale-105 transition-all text-sm sm:text-base shadow-xl"
          >
            <GithubIcon className="w-5 h-5 text-cyan-400" />
            <span>Explore All Repositories on GitHub</span>
          </a>
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
