import React, { useState } from 'react';
import { Menu, X, Brain, Layers, Mail, Home } from 'lucide-react';

const NavLink = ({ href, icon: Icon, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-neutral-200 hover:text-white hover:bg-white/5 transition"
  >
    <Icon size={16} />
    <span>{label}</span>
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60 bg-neutral-900/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 grid place-items-center">
              <Brain size={18} />
            </div>
            <span className="font-semibold tracking-tight">AI Engineer</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#home" icon={Home} label="Home" />
            <NavLink href="#projects" icon={Layers} label="Projects" />
            <NavLink href="#contact" icon={Mail} label="Contact" />
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-200 hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-neutral-900/90">
          <div className="px-4 py-3 space-y-1">
            <NavLink href="#home" icon={Home} label="Home" onClick={close} />
            <NavLink href="#projects" icon={Layers} label="Projects" onClick={close} />
            <NavLink href="#contact" icon={Mail} label="Contact" onClick={close} />
          </div>
        </div>
      )}
    </header>
  );
}
