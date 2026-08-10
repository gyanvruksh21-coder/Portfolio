"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
} from "lucide-react";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="text-gradient-cosmic">Extraordinary</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Interested in collaborating on Graph Neural Networks, full-stack REST API development, or tech community initiatives? Reach out directly!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 shadow-2xl">
              <h3 className="text-2xl font-extrabold text-white">Contact Information</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Feel free to email, call, or connect on LinkedIn & GitHub. I respond quickly!
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="mailto:khushijoshi.amcec@gmail.com"
                  className="flex items-center space-x-4 p-4 rounded-2xl glass-panel-interactive border border-white/10 text-gray-200 hover:text-white"
                >
                  <div className="p-3 rounded-xl bg-violet-600/30 text-violet-300 border border-violet-500/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono uppercase">Email Address</div>
                    <div className="text-sm font-semibold text-cyan-300 font-mono">khushijoshi.amcec@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+918884156247"
                  className="flex items-center space-x-4 p-4 rounded-2xl glass-panel-interactive border border-white/10 text-gray-200 hover:text-white"
                >
                  <div className="p-3 rounded-xl bg-cyan-600/30 text-cyan-300 border border-cyan-500/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono uppercase">Phone / Mobile</div>
                    <div className="text-sm font-semibold text-white font-mono">+91-8884156247</div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 rounded-2xl glass-panel border border-white/10 text-gray-200">
                  <div className="p-3 rounded-xl bg-emerald-600/30 text-emerald-300 border border-emerald-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono uppercase">Location</div>
                    <div className="text-sm font-semibold text-white">Bengaluru, Karnataka, India</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">Social Channels</div>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://github.com/Khush2803"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3.5 rounded-2xl glass-panel text-gray-300 hover:text-white hover:border-violet-400/50 flex items-center justify-center space-x-2 text-xs font-semibold border border-white/10 transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-violet-400" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/khushi-kalpesh-joshi-895b822a4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3.5 rounded-2xl glass-panel text-gray-300 hover:text-white hover:border-cyan-400/50 flex items-center justify-center space-x-2 text-xs font-semibold border border-white/10 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl space-y-6">
              <h3 className="text-2xl font-extrabold text-white">Send a Direct Message</h3>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-gray-300 text-sm">
                    Thank you for reaching out, Khushi will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-emerald-600/30 text-emerald-300 text-xs font-bold border border-emerald-500/40"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-semibold text-gray-300">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#080c14]/80 border border-white/10 text-white placeholder:text-gray-500 text-sm focus:border-cyan-400 outline-none transition-colors font-sans"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-semibold text-gray-300">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#080c14]/80 border border-white/10 text-white placeholder:text-gray-500 text-sm focus:border-cyan-400 outline-none transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-semibold text-gray-300">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="GNN Project / Full-Stack Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-[#080c14]/80 border border-white/10 text-white placeholder:text-gray-500 text-sm focus:border-cyan-400 outline-none transition-colors font-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-semibold text-gray-300">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Khushi, I'd like to talk about..."
                      className="w-full px-4 py-3 rounded-xl bg-[#080c14]/80 border border-white/10 text-white placeholder:text-gray-500 text-sm focus:border-cyan-400 outline-none transition-colors font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 hover:shadow-indigo-500/50 hover:scale-[1.01] transition-all flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
