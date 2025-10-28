import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Bot, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-24 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 w-full lg:max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200">
            <Bot size={14} /> AI Engineer • LLMs • Agents • MLOps
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Building intelligent systems that ship
          </h1>
          <p className="mt-4 text-neutral-300 leading-relaxed max-w-xl">
            I design, train, and deploy production-grade AI: retrieval-augmented generation, multi-agent workflows, vision pipelines, and robust MLOps. I care about measurable impact and delightful UX.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2 font-medium text-neutral-900 hover:opacity-95"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 font-medium text-white hover:bg-white/10"
            >
              <Cpu size={16} /> Hire Me
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-neutral-300">
            <Badge>LLMs</Badge>
            <Badge>RAG</Badge>
            <Badge>Agents</Badge>
            <Badge>Vision</Badge>
            <Badge>MLOps</Badge>
            <Badge>LangChain</Badge>
            <Badge>OpenAI</Badge>
            <Badge>Vector DBs</Badge>
          </div>
        </motion.div>

        <div className="relative z-0 w-full lg:flex-1 h-[40vh] sm:h-[50vh] lg:h-[60vh]" />
      </div>
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1">
      {children}
    </span>
  );
}
