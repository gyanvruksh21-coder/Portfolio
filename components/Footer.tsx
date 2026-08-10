"use client";

import { Mail, Heart, Sparkles } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 relative z-10 bg-[#060910]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Brand */}
          <div className="space-y-1 text-center md:text-left">
            <div className="text-lg font-black text-white tracking-wider">
              Khushi Kalpesh Joshi<span className="text-cyan-400">.</span>
            </div>
            <p className="text-xs text-gray-400 font-mono">
              GNN & ML Research Developer | Founder & CEO @ COMPASSION CREW
            </p>
          </div>

          {/* Center Copyright */}
          <div className="text-xs text-gray-400 font-mono flex items-center space-x-1.5">
            <span>Designed & Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>using Next.js 16 & React 19</span>
          </div>

          {/* Right Links */}
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/Khush2803"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-panel text-gray-400 hover:text-white border border-white/10 hover:border-cyan-400/50 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/khushi-kalpesh-joshi-895b822a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-panel text-gray-400 hover:text-white border border-white/10 hover:border-cyan-400/50 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:khushijoshi.amcec@gmail.com"
              className="p-2.5 rounded-xl glass-panel text-gray-400 hover:text-white border border-white/10 hover:border-cyan-400/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
