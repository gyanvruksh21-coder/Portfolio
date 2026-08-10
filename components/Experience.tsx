"use client";

import { motion } from "framer-motion";
import { Briefcase, Globe, Users, Calendar, CheckCircle2, ShieldCheck, Heart } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Founder & CEO",
      organization: "COMPASSION CREW",
      period: "2026 – Present",
      roleType: "Pan-India Social Impact Community",
      icon: Heart,
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
      points: [
        "Founded and lead a pan-India social-impact community focused on education, women's empowerment, animal welfare, and community development.",
        "Connecting students, tech professionals, and changemakers across India through expert talks, workshops, and volunteering initiatives.",
        "Co-organized 'Intelligent Healthcare: The Rise of Agentic AI' with Moksha Foundation at PES University, coordinating an industry AI speaker and full-day agenda.",
      ],
    },
    {
      title: "Organizing Team — Event Lead & Sponsorship",
      organization: "SheBuilds Bangalore",
      period: "2025 – 2026",
      roleType: "Women-in-Tech Initiative",
      icon: Briefcase,
      badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/40",
      points: [
        "Event Lead (2026) & Media/Sponsorship Outreach (2025) for a major women-in-tech initiative in Bangalore.",
        "Organized 3 expert sessions in 2026: Founders Talk, MCP & AI Agents Workshop, and TEDx-style Tech Talk — managing speakers and venue logistics.",
        "Supported an AI & Vibe Coding Workshop in collaboration with Compassion Crew at PES College, Banashankari.",
      ],
    },
    {
      title: "Designer & Event Organizer",
      organization: "College Technical Events — AMC Engineering College",
      period: "2026",
      roleType: "Technical & Esports Organizer",
      icon: Users,
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      points: [
        "Designed a custom 3-level browser game for Tech-O-Ween, engaging 25 student developer teams.",
        "Organized and executed a campus-wide esports tournament reaching 120+ participants.",
        "Supervised event logistics, bracket schedules, and live stream broadcasting.",
      ],
    },
    {
      title: "Volunteer Coordinator",
      organization: "Election Commission of India — Lok Sabha Elections",
      period: "2024",
      roleType: "National Civic Leadership",
      icon: Globe,
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      points: [
        "Managed 50+ volunteers and polling station operations during the 2024 Indian General Elections.",
        "Assisted voters, supervised polling station logistics, and resolved on-ground operational issues in real time.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Impact & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Leadership & <span className="text-gradient-cosmic">Experience</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Proven leadership as Founder & CEO of Compassion Crew, event lead for SheBuilds Bangalore, and civic coordinator.
          </p>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.organization}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel-interactive p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Top Icon & Period */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center text-indigo-300 group-hover:scale-110 transition-transform">
                    <exp.icon className="w-6 h-6" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${exp.badgeColor} flex items-center space-x-1.5`}>
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </span>
                </div>

                {/* Title & Organization */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-sm font-bold text-violet-300 mb-1 font-mono">
                  {exp.organization}
                </p>
                <div className="text-xs text-gray-400 font-mono mb-6">
                  {exp.roleType}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-gray-400 font-mono flex items-center justify-between">
                <span>Community & Technical Leadership</span>
                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
