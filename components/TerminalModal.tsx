"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal, CornerDownLeft, Sparkles, CheckCircle2 } from "lucide-react";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  command: string;
  type: "input" | "system" | "error" | "success" | "json";
  output: string | string[] | Record<string, unknown>;
}

export default function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: "welcome",
      type: "system",
      output: [
        "Welcome to Khushi Kalpesh Joshi's Interactive Neural Console v3.0",
        "Type 'help' for available commands, or 'about' to view portfolio JSON metadata.",
      ],
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    const newItems: CommandHistoryItem[] = [
      ...history,
      { command: trimmed, type: "input", output: "" },
    ];

    switch (lower) {
      case "help":
        newItems.push({
          command: "",
          type: "system",
          output: [
            "AVAILABLE COMMANDS:",
            "  about        — View Khushi's full profile & credentials JSON",
            "  skills       — View technical skills, ML frameworks & accuracy stats",
            "  projects     — List GNN & full-stack development projects",
            "  leadership   — View COMPASSION CREW & election coordinator roles",
            "  achievements — Display Olympiad 1st place, Robotics & INTSO medals",
            "  contact      — View email, phone, location & social handles",
            "  resume       — Trigger download of Khushi's official PDF resume",
            "  clear        — Reset terminal console history",
            "  hacker       — Activate secret neural matrix mode",
            "  exit         — Close the developer console",
          ],
        });
        break;

      case "about":
        newItems.push({
          command: "",
          type: "json",
          output: {
            name: "Khushi Kalpesh Joshi",
            title: "GNN & ML Research Developer | Founder & CEO @ COMPASSION CREW",
            institution: "AMC Engineering College, Bengaluru (2023–2027)",
            email: "khushijoshi.amcec@gmail.com",
            phone: "+91-8884156247",
            location: "Bengaluru, Karnataka, India",
            github: "https://github.com/Khush2803",
            linkedin: "https://www.linkedin.com/in/khushi-kalpesh-joshi-895b822a4/",
            nccCertificates: "Leading Flight Cadet (B & C Certificates)",
            languagesSpoken: ["English", "Hindi", "Gujarati", "French (B2)"],
          },
        });
        break;

      case "skills":
        newItems.push({
          command: "",
          type: "system",
          output: [
            "TECHNICAL CAPABILITIES:",
            "  Machine Learning ...... PyTorch, PyTorch Geometric, Scikit-learn, Pandas, NumPy",
            "  Backend / Web ......... FastAPI, REST APIs (OpenAPI), Flask, Next.js, React",
            "  Languages ............. Python, Java, C, SQL",
            "  Tools & Labs .......... Git, Jupyter Notebook, VS Code, Tesseract OCR",
          ],
        });
        break;

      case "projects":
        newItems.push({
          command: "",
          type: "system",
          output: [
            "FEATURED PROJECTS & ML SYSTEMS:",
            "  1. GNN for Crystal Property Prediction — Multi-scale GNN (MAE 0.033 eV/atom, R² 0.996)",
            "  2. CarbonDrop — OCR document carbon footprint calculator (FastAPI + React)",
            "  3. Email Phishing Classifier — Supervised ML model with NLP feature engineering",
            "  4. Movie Recommendation System — TF-IDF content filtering & Streamlit UI",
            "  5. Tech-O-Ween Browser Game — 3-level custom Canvas API game for 25 teams",
          ],
        });
        break;

      case "leadership":
        newItems.push({
          command: "",
          type: "system",
          output: [
            "LEADERSHIP & EXPERIENCE:",
            "  • Founder & CEO, COMPASSION CREW (2026–Present)",
            "    - Leading pan-India community for education, women's empowerment, animal welfare.",
            "    - Co-organized 'Intelligent Healthcare: Agentic AI' at PES University.",
            "  • SheBuilds Bangalore — Event Lead & Sponsorship (2025–2026)",
            "    - Organized Founders Talk, AI Agents Workshop, and TEDx-style Tech Talk.",
            "  • Volunteer Coordinator, Lok Sabha Elections (2024)",
            "    - Managed 50+ volunteers and polling operations.",
          ],
        });
        break;

      case "achievements":
        newItems.push({
          command: "",
          type: "system",
          output: [
            "HONORS & ACHIEVEMENTS:",
            "  🥇 Ontario Math Olympiad — 1st Place Winner",
            "  🤖 Robotics Competition — National Finalist",
            "  🏅 INTSO Merit Medals — Mathematics, Science & English",
            "  🎖️ NCC Leading Flight Cadet — B & C Certificate Holder",
          ],
        });
        break;

      case "contact":
        newItems.push({
          command: "",
          type: "system",
          output: [
            "CONTACT INFORMATION:",
            "  Email: khushijoshi.amcec@gmail.com",
            "  Phone: +91-8884156247",
            "  Location: Bengaluru, Karnataka, India",
            "  GitHub: https://github.com/Khush2803",
            "  LinkedIn: https://www.linkedin.com/in/khushi-kalpesh-joshi-895b822a4/",
          ],
        });
        break;

      case "resume":
        window.open("/khushi_resume.pdf", "_blank");
        newItems.push({
          command: "",
          type: "success",
          output: "Opening Khushi's official PDF resume in new tab...",
        });
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
        onClose();
        setInputVal("");
        return;

      case "hacker":
        newItems.push({
          command: "",
          type: "success",
          output: "⚡ NEURAL MATRIX CORE ACTIVATED! PyTorch GNN Model Loaded with 0.033 MAE.",
        });
        break;

      default:
        newItems.push({
          command: "",
          type: "error",
          output: `Command not recognized: '${trimmed}'. Type 'help' to view available commands.`,
        });
        break;
    }

    setHistory(newItems);
    setInputVal("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div key="terminal-modal-container" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          key="terminal-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080c14]/85 backdrop-blur-md"
        />

        {/* Console Container */}
        <motion.div
          key="terminal-modal-card"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative w-full max-w-3xl glass-panel rounded-3xl border border-cyan-500/30 shadow-2xl z-10 overflow-hidden font-mono text-sm"
        >
          {/* Terminal Window Bar */}
          <div className="bg-[#0f172a] px-5 py-3.5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs text-gray-400 font-mono ml-2 flex items-center space-x-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>khushi-joshi@neural-console:~</span>
              </span>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Console Body */}
          <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4 bg-[#080c14]/90 text-gray-200">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                {item.type === "input" && (
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <span>$</span>
                    <span className="font-bold">{item.command}</span>
                  </div>
                )}

                {item.type === "system" && Array.isArray(item.output) && (
                  <div className="text-gray-300 space-y-0.5 pl-2 border-l-2 border-cyan-500/40">
                    {item.output.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                )}

                {item.type === "json" && typeof item.output === "object" && (
                  <pre className="p-4 rounded-xl bg-[#0b0f19] text-cyan-300 text-xs overflow-x-auto border border-cyan-500/20">
                    {JSON.stringify(item.output, null, 2)}
                  </pre>
                )}

                {item.type === "success" && (
                  <div className="text-emerald-400 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{String(item.output)}</span>
                  </div>
                )}

                {item.type === "error" && (
                  <div className="text-red-400 font-semibold">{String(item.output)}</div>
                )}
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center space-x-2 pt-2 text-cyan-400">
              <span className="font-bold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="type a command (e.g. help, about, skills, projects, achievements)..."
                className="w-full bg-transparent outline-none text-white font-mono placeholder:text-gray-600 text-sm"
              />
              <CornerDownLeft className="w-4 h-4 text-gray-500" />
            </div>
            <div ref={bottomRef} />
          </div>

          {/* Footer Quick Hints */}
          <div className="bg-[#0f172a]/60 px-6 py-2.5 border-t border-white/5 flex flex-wrap items-center justify-between text-[11px] text-gray-400 font-mono">
            <span>Try typing: <button onClick={() => handleCommand("about")} className="text-cyan-400 underline">about</button>, <button onClick={() => handleCommand("projects")} className="text-cyan-400 underline">projects</button>, <button onClick={() => handleCommand("achievements")} className="text-cyan-400 underline">achievements</button></span>
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-gray-800 text-gray-300 font-mono">ESC</kbd> to close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
