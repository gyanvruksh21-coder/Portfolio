"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Sparkles, CheckCircle, Tag, Folder } from "lucide-react";

export interface ProjectType {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string | null;
  featured?: boolean;
  highlights: string[];
}

interface ProjectModalProps {
  project: ProjectType | null;
  isOpen: boolean;
  onClose: () => void;
}

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div key="project-modal-container" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            key="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#080c14]/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            key="project-modal-card"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-2xl glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl z-10 space-y-6 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="space-y-1 pr-6">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-gray-900/80 text-cyan-300 border border-cyan-500/20">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase">
                      Flagship Project
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white pt-2">
                  {project.title}
                </h3>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl glass-panel text-gray-400 hover:text-white border border-white/10 hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center space-x-1.5">
                <Folder className="w-4 h-4" />
                <span>Project Overview</span>
              </h4>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Key Technical Highlights</span>
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {project.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="glass-panel p-3 rounded-xl border border-white/10 flex items-start space-x-2 text-xs sm:text-sm text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center space-x-1.5">
                <Tag className="w-4 h-4" />
                <span>Technologies & Frameworks</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-gray-900/80 text-cyan-300 border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm flex items-center space-x-2 border border-white/15 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Code</span>
              </a>

              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-sm flex items-center space-x-2 shadow-lg shadow-indigo-500/25 hover:scale-105 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demonstration</span>
                </a>
              ) : (
                <span className="text-xs text-gray-400 font-mono">
                  Demo available upon request
                </span>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
