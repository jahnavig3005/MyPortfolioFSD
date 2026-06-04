import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import Badge from '@/components/Badge';
import Section from '@/components/Section';
import { education, experience, featuredWork, profile, skills, stats, strengths } from '@/lib/data';

function Nav() {
  const links = ['About', 'Work', 'Experience', 'Skills', 'Contact'];
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="font-mono text-sm font-semibold text-white">JG.dev</a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-slate-300 transition hover:text-sky-300">{link}</a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-[length:42px_42px] opacity-40" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="relative mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-300">
            <Sparkles className="h-4 w-4 text-sky-300" /> {profile.seniority} {profile.role}
          </div>
          <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-white md:text-7xl">
            Building <span className="gradient-text">scalable web systems</span> that feel fast, clean, and reliable.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{profile.tagline}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#work" className="rounded-full bg-sky-300 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-white">View featured work</a>
            <a href={`mailto:${profile.email}`} className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-sky-300">Contact me</a>
          </div>
        </div>
        <div className="card rounded-3xl p-6 shadow-glow">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 font-mono text-sm">
            <p className="text-slate-500">candidate.classification</p>
            <p className="mt-3 text-sky-300">{profile.classification}</p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />

      <Section id="about" eyebrow="Role signal" title="A product-minded engineer with strong frontend architecture depth.">
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div className="card rounded-3xl p-7">
            <h3 className="text-xl font-semibold text-white">Why Software Engineer?</h3>
            <p className="mt-4 leading-7 text-slate-300">The strongest evidence is hands-on delivery of React, Next.js, TypeScript, micro-frontends, API integrations, AWS services, CI/CD, testing, accessibility, and performance optimization. Product ownership experience adds business context, but the primary hiring narrative is full-stack software engineering.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {strengths.map((item) => <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-200 transition hover:-translate-y-1 hover:border-sky-400/60">{item}</div>)}
          </div>
        </div>
      </Section>

      <Section id="work" eyebrow="Featured work" title="High-impact systems recruiters can understand in seconds.">
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredWork.map((project, index) => (
            <article key={project.title} className="card group rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-sky-400/50">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-sm text-sky-300">0{index + 1}</span>
                <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:text-sky-300" />
              </div>
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{project.type}</p>
              <p className="mt-5 leading-7 text-slate-300">{project.impact}</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-400">
                {project.details.map((detail) => <li key={detail}>• {detail}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="experience" eyebrow="Experience" title="Production delivery across commerce, payments, APIs, and cloud workflows.">
        <div className="space-y-6">
          {experience.map((job) => (
            <article key={job.company} className="card rounded-3xl p-7">
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div><h3 className="text-2xl font-semibold text-white">{job.role}</h3><p className="text-sky-300">{job.company}</p></div>
                <span className="font-mono text-sm text-slate-400">{job.period}</span>
              </div>
              <p className="mt-4 text-slate-300">{job.summary}</p>
              <ul className="mt-5 grid gap-3 text-slate-300 md:grid-cols-2">
                {job.bullets.map((bullet) => <li key={bullet} className="rounded-2xl bg-slate-950/50 p-4">{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="Skills" title="A modern full-stack toolkit built for fast shipping and stable releases.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="card rounded-3xl p-6">
              <h3 className="mb-5 text-xl font-semibold text-white">{group.replace('CloudDevOps', 'Cloud & DevOps').replace('QualitySecurity', 'Quality & Security')}</h3>
              <div className="flex flex-wrap gap-2">{items.map((item) => <Badge key={item}>{item}</Badge>)}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Ready to build polished, production-grade web products.">
        <div className="card rounded-3xl p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-semibold text-white">{profile.name}</h3>
              <p className="mt-3 text-slate-300">{profile.role} focused on scalable React/Next.js architecture, accessible UX, API-driven products, and AWS-backed delivery.</p>
              <div className="mt-6 space-y-3 text-slate-300">
                <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-sky-300" /> {profile.email}</p>
                <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-sky-300" /> {profile.phone}</p>
                <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-sky-300" /> {profile.location}</p>
              </div>
            </div>
            <div className="space-y-3">
              {education.map((item) => <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-slate-300">{item}</div>)}
              <div className="flex gap-3 pt-3">
                <a aria-label="LinkedIn" href={profile.linkedin} className="rounded-full border border-slate-700 p-3 transition hover:border-sky-300"><Linkedin /></a>
                <a aria-label="Email" href={`mailto:${profile.email}`} className="rounded-full border border-slate-700 p-3 transition hover:border-sky-300"><Mail /></a>
                <a aria-label="GitHub placeholder" href="#top" className="rounded-full border border-slate-700 p-3 transition hover:border-sky-300"><Github /></a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
