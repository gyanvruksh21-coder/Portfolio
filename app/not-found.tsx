"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f17] text-white px-4">
      <div className="text-center space-y-6 max-w-md glass-panel p-8 rounded-3xl border border-white/10">
        <div className="w-16 h-16 rounded-2xl bg-primary-900/40 border border-primary-500/30 text-primary-400 flex items-center justify-center mx-auto text-2xl font-bold font-mono">
          404
        </div>
        <h1 className="text-3xl font-extrabold">Page Not Found</h1>
        <p className="text-gray-400 text-sm">
          The requested page could not be located on Khushi's neural portfolio.
        </p>
        <Link
          href="/"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-primary-500/25 hover:scale-105 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
