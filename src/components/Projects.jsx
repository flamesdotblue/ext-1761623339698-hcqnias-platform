import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Layers, Bot, Cpu } from 'lucide-react';

const projects = [
  {
    icon: Brain,
    title: 'RAG Platform for Enterprise Docs',
    desc:
      'Built a robust retrieval-augmented generation service with hybrid search (BM25 + vector), advanced chunking, and evaluation harness. Reduced hallucinations by 42%.',
    tags: ['RAG', 'OpenAI', 'LangChain', 'pgvector'],
    link: '#',
  },
  {
    icon: Bot,
    title: 'Multi-Agent Workflow Orchestrator',
    desc:
      'Designed an agentic system coordinating task-specific tools via event-driven graph. Enabled autonomous report generation with guardrails and human-in-the-loop.',
    tags: ['Agents', 'Graph', 'Guardrails', 'TypeScript'],
    link: '#',
  },
  {
    icon: Cpu,
    title: 'Vision QA for Manufacturing',
    desc:
      'Deployed a defect detection pipeline using transformer backbones and on-edge quantization. Achieved 96% F1 with <50ms latency.',
    tags: ['Vision', 'ONNX', 'Quantization', 'Edge'],
    link: '#',
  },
  {
    icon: Layers,
    title: 'MLOps Observability Suite',
    desc:
      'Implemented data drift, prompt telemetry, and model metrics with alerts. Drove weekly model improvements and faster incident response.',
    tags: ['MLOps', 'Prometheus', 'Evals', 'Dashboards'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-neutral-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(45rem_30rem_at_top,rgba(56,189,248,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Selected Work</h2>
          <p className="mt-3 text-neutral-300">
            A snapshot of recent builds. Each project ships with evaluations, instrumentation, and clear success metrics.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ icon: Icon, title, desc, tags, link, index }) {
  return (
    <motion.a
      href={link}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5 hover:border-cyan-400/40"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="h-10 w-10 rounded-lg bg-white/10 grid place-items-center text-cyan-300">
          <Icon size={20} />
        </div>
        <div className="text-xs text-neutral-400">Case Study</div>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs rounded-md border border-white/10 bg-white/5 px-2 py-1 text-neutral-300">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 text-sm text-cyan-300 opacity-0 group-hover:opacity-100 transition">Read more →</div>
    </motion.a>
  );
}
