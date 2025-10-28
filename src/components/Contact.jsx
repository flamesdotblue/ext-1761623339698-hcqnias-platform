import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Get in touch</h2>
          <p className="mt-3 text-neutral-300">
            Interested in collaborating, hiring, or just geeking out about model architectures? Drop a line.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`Inquiry from ${data.get('name')}`);
                const body = encodeURIComponent(`${data.get('message')}\n\nReply to: ${data.get('email')}`);
                window.location.href = `mailto:hello@ai.engineer?subject=${subject}&body=${body}`;
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name">
                  <input name="name" required className="w-full rounded-md bg-neutral-900/80 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400" />
                </Field>
                <Field label="Email">
                  <input type="email" name="email" required className="w-full rounded-md bg-neutral-900/80 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400" />
                </Field>
              </div>
              <Field label="Message">
                <textarea name="message" rows={5} required className="w-full rounded-md bg-neutral-900/80 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400" />
              </Field>
              <div className="flex items-center gap-3">
                <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2 font-medium text-neutral-900 hover:opacity-95">
                  <Mail size={16} /> Send Message
                </button>
                <span className="text-xs text-neutral-400">Opens your email client</span>
              </div>
            </form>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-semibold">Elsewhere</h3>
            <p className="mt-2 text-sm text-neutral-300">Prefer DMs? Reach me on these platforms.</p>
            <div className="mt-4 grid gap-3">
              <Social href="https://github.com/" icon={Github} label="GitHub" handle="github.com/your-handle" />
              <Social href="https://www.linkedin.com/" icon={Linkedin} label="LinkedIn" handle="linkedin.com/in/your-handle" />
              <Social href="mailto:hello@ai.engineer" icon={Mail} label="Email" handle="hello@ai.engineer" />
            </div>
            <footer className="mt-10 pt-6 border-t border-white/10 text-xs text-neutral-400">
              © {new Date().getFullYear()} AI Engineer • Built with React, Tailwind, and Spline
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-neutral-300">{label}</span>
      {children}
    </label>
  );
}

function Social({ href, icon: Icon, label, handle }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-between rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2 hover:bg-neutral-900"
    >
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-md bg-white/10 grid place-items-center">
          <Icon size={18} />
        </div>
        <div>
          <div className="text-sm font-medium">{label}</div>
          <div className="text-xs text-neutral-400">{handle}</div>
        </div>
      </div>
      <span className="text-xs text-cyan-300">Open →</span>
    </a>
  );
}
