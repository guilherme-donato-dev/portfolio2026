import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUpRight,
  Database,
  Server,
  Code2,
  Terminal,
  Layers,
  Cpu
} from './components/Icons';
import { Card } from './components/Card';
import { Badge } from './components/Badge';
import { Project, SocialLink } from './types';

// --- Data & Configuration ---

const SOCIALS: SocialLink[] = [
  { href: "https://github.com/guilherme-donato-dev", icon: <Github size={20} />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/guilhermedonatodev/", icon: <Linkedin size={20} />, label: "LinkedIn" },
  { href: "mailto:hello@guilhermedonato.dev", icon: <Mail size={20} />, label: "Email" },
];

const STACK = [
  { name: "Django", icon: <Server size={16} /> },
  { name: "FastAPI", icon: <Database size={16} /> },
  { name: "SQL", icon: <Database size={16} /> },
  { name: "Next.js", icon: <Layers size={16} /> },
  { name: "TypeScript", icon: <Code2 size={16} /> },
  { name: "Golang", icon: <Cpu size={16} /> },
];

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'API Gateway Service',
    description: 'Microsserviço de roteamento de alta performance.',
    tech: 'Go',
    icon: <Server className="text-blue-600" size={32} />,
    color: 'bg-blue-50'
  },
  {
    id: '2',
    title: 'E-commerce Core',
    description: 'Backend robusto com gestão de inventário.',
    tech: 'Django / DRF',
    icon: <Database className="text-green-600" size={32} />,
    color: 'bg-green-50'
  },
  {
    id: '3',
    title: 'Analytics Dashboard',
    description: 'Visualização de dados em tempo real.',
    tech: 'Next.js / SQL',
    icon: <Layers className="text-purple-600" size={32} />,
    color: 'bg-purple-50'
  },
  {
    id: '4',
    title: 'Auth Provider',
    description: 'Sistema centralizado de autenticação OAuth2.',
    tech: 'Go / Redis',
    icon: <Cpu className="text-cyan-600" size={32} />,
    color: 'bg-cyan-50'
  },
  {
    id: '5',
    title: 'Task Queue Worker',
    description: 'Processamento assíncrono de tarefas pesadas.',
    tech: 'Python / Celery',
    icon: <Terminal className="text-yellow-600" size={32} />,
    color: 'bg-yellow-50'
  },
  {
    id: '6',
    title: 'Legacy Migration',
    description: 'Ferramentas de migração de dados críticos.',
    tech: 'SQL / Shell',
    icon: <Code2 className="text-gray-600" size={32} />,
    color: 'bg-gray-50'
  },
];

// --- Components ---

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold font-mono text-sm">
          GD
        </div>
        <h1 className="font-semibold text-gray-900 tracking-tight hidden sm:block">guilhermedonato.dev</h1>
      </div>
      
      <nav className="flex items-center gap-1">
        {SOCIALS.map((link) => (
          <a 
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

const BioCard = () => (
  <Card className="md:col-span-2 row-span-1 md:row-span-2 p-8 justify-between relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
      <Terminal size={120} />
    </div>
    
    <div className="z-10">
      <Badge className="mb-4 bg-gray-900 text-white border-gray-900">Sobre Mim</Badge>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
        Olá, sou Guilherme.
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
        Sou Guilherme Donato, 24 anos, desenvolvedor backend formado em Análise e Desenvolvimento de Sistemas, com experiência em Python, Django, FastAPI e também no desenvolvimento full stack com Next.js.
        <br /><br />
        Trabalho com SQL, AWS e integrações de Inteligência Artificial, incluindo criação de chatbots. Atualmente, estou ampliando meus conhecimentos estudando Golang para desenvolver soluções mais robustas e escaláveis.
      </p>
    </div>
    
    <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-2">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Disponível para novos projetos
      </div>
    </div>
  </Card>
);

const StackCard = () => (
  <Card className="md:col-span-1 row-span-1 md:row-span-2 p-6 bg-gray-50/50">
    <div className="flex flex-col h-full">
      <div className="mb-6">
         <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider font-mono mb-1">Stack</h3>
         <h2 className="text-xl font-semibold text-gray-900">Tecnologias</h2>
      </div>
      
      <div className="flex-1 flex flex-col gap-3">
        {STACK.map((tech) => (
          <div 
            key={tech.name}
            className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-gray-300 transition-colors cursor-default group"
          >
            <div className="flex items-center gap-3">
              <div className="text-gray-400 group-hover:text-gray-700 transition-colors">
                {tech.icon}
              </div>
              <span className="font-medium text-gray-700">{tech.name}</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-gray-400 transition-colors"></div>
          </div>
        ))}
      </div>
    </div>
  </Card>
);

const ProjectCardItem: React.FC<{ project: Project }> = ({ project }) => (
  <Card className="group cursor-pointer h-full aspect-square sm:aspect-auto">
    <div className={`h-[40%] ${project.color} flex items-center justify-center border-b border-gray-100 relative overflow-hidden`}>
      <div className="transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
        {project.icon}
      </div>
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <div className="bg-white p-1.5 rounded-full shadow-sm">
          <ArrowUpRight size={16} className="text-gray-900" />
        </div>
      </div>
    </div>
    <div className="p-5 flex flex-col justify-between h-[60%] bg-white">
      <div>
        <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">
          {project.description}
        </p>
      </div>
      <div className="mt-4">
        <Badge className="bg-gray-50 text-gray-600 border-gray-100">
          {project.tech}
        </Badge>
      </div>
    </div>
  </Card>
);

const Footer = () => (
  <footer className="py-12 text-center">
    <p className="text-gray-400 text-sm font-mono">
      © {new Date().getFullYear()} Guilherme Donato. Construído com React & Tailwind.
    </p>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 bg-dot-pattern font-sans selection:bg-gray-900 selection:text-white">
      <Header />
      
      <main className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-auto">
          
          {/* Bio & Intro - Takes 2 cols on Desktop */}
          <BioCard />
          
          {/* Tech Stack - Takes 1 col on Desktop */}
          <StackCard />
          
          {/* Projects Section Header (Optional visual break, but keeping it tight for Bento feel) */}
          <div className="md:col-span-3 mt-4 mb-2 flex items-center justify-between">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider font-mono">
              Projetos Selecionados
            </h3>
            <span className="h-px flex-1 bg-gray-200 ml-4"></span>
          </div>

          {/* Project Grid Items */}
          {PROJECTS.map((project) => (
            <ProjectCardItem key={project.id} project={project} />
          ))}

          {/* Call to Action / Contact Box */}
          <Card className="md:col-span-3 p-8 bg-gray-900 border-gray-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Vamos trabalhar juntos?</h2>
              <p className="text-gray-400">Estou sempre aberto a discutir código, arquitetura ou novas oportunidades.</p>
            </div>
            <a 
              href="mailto:hello@guilhermedonato.dev"
              className="whitespace-nowrap px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Mail size={18} />
              Entrar em contato
            </a>
          </Card>

        </div>
      </main>

      <Footer />
    </div>
  );
}