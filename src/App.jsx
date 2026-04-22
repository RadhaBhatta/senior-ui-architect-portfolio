console.log('App.jsx is loading!');

import React, { useState } from 'react';
import * as Icons from 'lucide-react';


const App = () => {
  const [activeTab, setActiveTab] = useState('all');

  const stats = [
    {
      label: 'Scale',
      value: '50M+ MAU',
      icon: <Icons.Users className="text-blue-400" />, // Added Icons. prefix
    },
    {
      label: 'Efficiency',
      value: '90% Logic Reuse',
      icon: <Icons.Zap className="text-emerald-400" />, // Added Icons. prefix
    },
    {
      label: 'Uptime',
      value: '99.9%',
      icon: <Icons.ShieldCheck className="text-purple-400" />, // Added Icons. prefix
    },
  ];

  const projects = [
    {
      title: 'Enterprise Risk Portal',
      type: 'Angular',
      tags: ['Angular 19', 'RxJS', 'Standalone APIs'],
      desc: 'Architected a high-security risk management dashboard utilizing Signal-based state management for real-time data streaming.',
      link: '#',
    },
    {
      title: 'Enterprise Rationalization',
      type: 'Web',
      tags: ['React', 'TypeScript', 'Micro-frontends'],
      desc: 'Architected the migration of 72 legacy sub-apps into a unified React ecosystem for MetLife Japan.',
      link: '#',
    },
    {
      title: 'Cross-Framework Bridge',
      type: 'Hybrid',
      tags: ['Angular', 'React', 'Micro-frontends'],
      desc: 'Directed the migration of 70+ legacy sub-apps into a unified ecosystem using Module Federation and Web Components.',
      link: '#'
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-300 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            RB.dev
          </span>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#work" className="hover:text-blue-400 transition-colors">
              Work
            </a>
            <a href="#stack" className="hover:text-blue-400 transition-colors">
              Stack
            </a>
            <a
              href="mailto:radhabhatta05@gmail.com"
              className="bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-500 transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            AVAILABLE FOR SENIOR/LEAD ROLES
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Architecting <span className="text-blue-500">Hybrid</span> <br />
            Experiences.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
            Lead Software Engineer with 10+ years experience. I specialize in architecting performant, scalable applications across the <b>Angular</b> and <b>React</b> ecosystems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl"
              >
                <div className="mb-4">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="work" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Selected Impact</h2>
            <div className="flex bg-slate-800 p-1 rounded-lg">
              {['all', 'Angular', 'React'].map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`px-4 py-1.5 rounded-md text-sm transition-all ${
                    activeTab === t
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter((p) => activeTab === 'all' || p.type === activeTab || p.type === 'Hybrid')
              .map((project, i) => (
                <div key={i} className="group relative bg-slate-800/50 border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800 transition-all hover:-translate-y-2">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-slate-900 rounded-2xl group-hover:bg-blue-600/20 transition-colors">
                      {project.type === 'Angular' ? <Icons.ShieldCheck className="text-emerald-400" /> : <Icons.Monitor className="text-blue-400" />}
                    </div>
                    <Icons.ExternalLink size={20} className="text-slate-600 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-slate-900 rounded-md border border-slate-700 text-slate-400 uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Technical Footer */}
      <footer className="py-20 px-6 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-8">
            Let's build something scalable.
          </h2>
          <div className="flex justify-center gap-8 text-slate-500">
            <a
              href="https://github.com"
              className="hover:text-white transition-colors"
            >
              {/* <Github /> */}
            </a>
            <a
              href="https://linkedin.com/in/radha-madhavi/"
              className="hover:text-white transition-colors"
            >
              {/* <Linkedin /> */}
            </a>
            <a
              href="mailto:radhabhatta05@gmail.com"
              className="hover:text-white transition-colors"
            >
              <Icons.Mail />
            </a>
          </div>
          <p className="mt-12 text-sm text-slate-600">
            © 2026 Radha Bhatta. Engineered with React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;