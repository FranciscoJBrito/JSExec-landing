"use client";

import { ElectronIcon, IconApple, LinuxIcon, TypeScriptIcon, ViteJsIcon, WindowsIcon } from "@/assets/icons";
import { ChevronDown, Code2, Download, FolderOpen, Github, Globe, Lock, Terminal, Wand2, X, Zap } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

type OSType = "windows" | "macos" | "linux" | "unknown";

interface DownloadOption {
  os: OSType;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  url: string;
  variant?: string;
}

const DOWNLOAD_OPTIONS: DownloadOption[] = [
  {
    os: "windows",
    label: "Windows",
    sublabel: "Windows 10/11 (64-bit)",
    icon: <WindowsIcon className="w-8 h-8" />,
    url: "https://github.com/FranciscoJBrito/WizardJS/releases/download/v1.1.0/WizardJS-Setup-1.1.0.exe",
  },
  {
    os: "macos",
    label: "macOS",
    sublabel: "Apple Silicon (M1/M2/M3)",
    icon: <IconApple className="w-8 h-8" />,
    url: "https://github.com/FranciscoJBrito/WizardJS/releases/download/v1.1.0/WizardJS-macOS-AppleSilicon.zip",
    variant: "apple-silicon",
  },
  {
    os: "macos",
    label: "macOS",
    sublabel: "Intel (x64)",
    icon: <IconApple className="w-8 h-8" />,
    url: "https://github.com/FranciscoJBrito/WizardJS/releases/download/v1.1.0/WizardJS-macOS-Intel.zip",
    variant: "intel",
  },
  {
    os: "linux",
    label: "Linux",
    sublabel: "Debian/Ubuntu (.deb)",
    icon: <LinuxIcon className="w-8 h-8" />,
    url: "https://github.com/FranciscoJBrito/WizardJS/releases/download/v1.1.0/wizardjs_1.1.0_amd64.deb",
    variant: "deb",
  },
  {
    os: "linux",
    label: "Linux",
    sublabel: "Fedora/RHEL (.rpm)",
    icon: <LinuxIcon className="w-8 h-8" />,
    url: "https://github.com/FranciscoJBrito/WizardJS/releases/download/v1.1.0/wizardjs-1.1.0-1.x86_64.rpm",
    variant: "rpm",
  },
];

function detectOS(): OSType {
  if (typeof window === "undefined") return "unknown";
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  const platform = window.navigator.platform?.toLowerCase() || "";
  
  if (platform.includes("win") || userAgent.includes("windows")) {
    return "windows";
  }
  if (platform.includes("mac") || userAgent.includes("macintosh") || userAgent.includes("mac os")) {
    return "macos";
  }
  if (platform.includes("linux") || userAgent.includes("linux")) {
    return "linux";
  }
  
  return "unknown";
}

function getPrimaryDownload(os: OSType): DownloadOption {
  const option = DOWNLOAD_OPTIONS.find(opt => opt.os === os);
  return option || DOWNLOAD_OPTIONS[0];
}

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Real-time Execution",
    description: "Smart auto-run with complete code detection and secure sandbox execution",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "TypeScript Native",
    description: "Transpilation and type checking built-in. No configuration required.",
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Monaco Editor",
    description: "The power of VS Code in your hands. IntelliSense and autocompletion included.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "100% Offline",
    description: "No connection, no limits. Your code never leaves your machine.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Protected Sandbox",
    description: "Isolated execution with timeouts. Experiment safely.",
  },
  {
    icon: <FolderOpen className="w-6 h-6" />,
    title: "Open Source",
    description: "Open source and free. Contribute, learn, and customize.",
  },
];

// Floating Particles Component
function MagicalParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}

// Download Dropdown Component
function DownloadDropdown({ 
  isOpen, 
  onClose, 
  options 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  options: DownloadOption[];
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      ref={dropdownRef}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 md:w-96 dropdown-magical rounded-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#F6DE1E]/10">
        <span className="text-white font-medium">Select your System</span>
        <button 
          onClick={onClose}
          className="text-[#888888] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      {/* Options */}
      <div className="py-2 space-y-1">
        {options.map((option, index) => (
          <a
            key={`${option.os}-${option.variant || index}`}
            href={option.url}
            target="_blank"
            rel="noopener noreferrer"
            className="dropdown-item flex items-center gap-4 px-4 py-3 rounded-xl group"
            onClick={onClose}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center group-hover:border-[#F6DE1E]/30 transition-colors">
              {option.icon}
            </div>
            <div className="flex-1">
              <div className="text-white font-medium group-hover:text-[#F6DE1E] transition-colors">
                {option.label}
              </div>
              <div className="text-[#888888] text-sm">{option.sublabel}</div>
            </div>
            <Download className="w-5 h-5 text-[#888888] group-hover:text-[#F6DE1E] transition-colors" />
          </a>
        ))}
      </div>
      
      {/* Footer */}
      <div className="px-4 py-3 border-t border-[#F6DE1E]/10">
        <a 
          href="https://github.com/FranciscoJBrito/WizardJS/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#888888] hover:text-[#F6DE1E] text-sm transition-colors flex items-center gap-2"
        >
          <Github className="w-4 h-4" />
          View all versions on GitHub
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  const [detectedOS, setDetectedOS] = useState<OSType>("unknown");
  const [primaryDownload, setPrimaryDownload] = useState<DownloadOption>(getPrimaryDownload("unknown"));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const os = detectOS();
    setDetectedOS(os);
    setPrimaryDownload(getPrimaryDownload(os));
  }, []);

  return (
    <div className="min-h-screen bg-[#050508]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050508]/90 backdrop-blur-xl border-b border-[#F6DE1E]/10">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-[#F6DE1E]/30 blur-xl rounded-full animate-pulse"></div>
              <Image
                src="/icon.png"
                alt="WizardJS Logo"
                width={44}
                height={44}
                className="relative rounded-xl"
              />
            </div>
            <span className="text-white font-bold text-xl tracking-tight font-magical">WizardJS</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-[#888888] hover:text-[#F6DE1E] transition-colors font-medium">
              Features
            </a>
            <a href="#tech" className="text-[#888888] hover:text-[#F6DE1E] transition-colors font-medium">
              Technology
            </a>
            <a 
              href="https://github.com/FranciscoJBrito/WizardJS" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-[#888888] hover:text-white transition-colors font-medium"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-hero-gradient overflow-hidden">
        {/* Magical Background Effects */}
        <MagicalParticles />
        
        {/* Arcane Circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-[800px] h-[800px]">
            <div className="summoning-circle"></div>
            <div className="summoning-circle"></div>
            <div className="summoning-circle"></div>
          </div>
        </div>
        
        {/* Constellation Pattern */}
        <div className="absolute inset-0 bg-constellation opacity-30"></div>
        
        {/* Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F6DE1E]/8 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-[100px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-5 py-2.5 bg-[#F6DE1E]/10 border border-[#F6DE1E]/30 rounded-full mb-8">
              <Wand2 className="w-4 h-4 text-[#F6DE1E] mr-2" />
              <span className="text-[#F6DE1E] text-sm font-medium">Open Source Alternative to RunJS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              <span className="font-magical">The Ultimate</span>
              <span className="block title-magical text-glow-magical font-magical mt-2">
                JavaScript Playground
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-[#AAAAAA] mb-12 max-w-3xl mx-auto leading-relaxed">
              JavaScript & TypeScript playground with real-time execution, and advanced features. 
              <span className="text-white"> Built with Electron for macOS, Windows, and Linux.</span>
            </p>

            {/* Smart Download Section */}
            <div className="flex flex-col items-center gap-6 mb-12 relative">
              {/* Primary Download Button */}
              <a
                href={primaryDownload.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 btn-primary px-10 py-5 rounded-2xl text-lg"
              >
                <Wand2 className="w-6 h-6 transition-transform" />
                <span className="font-semibold">Download for {primaryDownload.label}</span>
              </a>

              {/* Secondary Options - Dropdown Trigger */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="btn-secondary px-6 py-3 rounded-xl text-sm flex items-center gap-2 font-medium"
                >
                  <span>Download Options</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <DownloadDropdown 
                  isOpen={isDropdownOpen} 
                  onClose={() => setIsDropdownOpen(false)} 
                  options={DOWNLOAD_OPTIONS}
                />
              </div>

              {/* Version Badge */}
              <div className="flex items-center gap-4 text-sm text-[#888888]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  v1.1.0
                </span>
                <span className="text-[#3A3A3A]">•</span>
                <span>macOS, Windows, Linux</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-[#888888] text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F6DE1E] rounded-full"></div>
                <span>100% Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F6DE1E] rounded-full"></div>
                <span>No Telemetry</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F6DE1E] rounded-full"></div>
                <span>Monaco Editor</span>
              </div>
              <a 
                href="https://github.com/FranciscoJBrito/WizardJS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#F6DE1E] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Star on GitHub</span>
              </a>
            </div>
          </div>

          {/* Code Preview with Magical Frame */}
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="relative">
              {/* Outer Magical Glow */}
              {/* <div className="absolute -inset-4 bg-gradient-to-r from-[#F6DE1E]/20 via-[#8B5CF6]/10 to-[#F6DE1E]/20 rounded-3xl blur-2xl opacity-50"></div> */}
              
              {/* Magical Frame */}
              <div className="magical-frame">
                <div className="bg-[#0A0A0A] rounded-2xl overflow-hidden">
                  {/* Window Controls */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#111111] border-b border-[#1A1A1A]">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#28CA41]"></div>
                    <div className="flex-1 flex justify-center">
                      <span className="text-[#888888] text-sm font-mono flex items-center gap-2">
                        <Wand2 className="w-4 h-4 text-[#F6DE1E]" />
                        spell.ts
                      </span>
                    </div>
                  </div>
                  {/* Code Content */}
                  <div className="p-6 font-mono text-sm leading-relaxed">
                    <div className="flex">
                      <span className="text-[#3A3A3A] w-8 select-none">1</span>
                      <span><span className="text-[#C586C0]">const</span> <span className="text-[#9CDCFE]">spell</span> <span className="text-white">=</span> <span className="text-[#CE9178]">&quot;Abracadabra&quot;</span><span className="text-white">;</span></span>
                    </div>
                    <div className="flex">
                      <span className="text-[#3A3A3A] w-8 select-none">2</span>
                      <span></span>
                    </div>
                    <div className="flex">
                      <span className="text-[#3A3A3A] w-8 select-none">3</span>
                      <span><span className="text-[#C586C0]">interface</span> <span className="text-[#4EC9B0]">Wizard</span> <span className="text-[#F6DE1E]">{"{"}</span></span>
                    </div>
                    <div className="flex">
                      <span className="text-[#3A3A3A] w-8 select-none">4</span>
                      <span className="pl-4"><span className="text-[#9CDCFE]">name</span><span className="text-white">:</span> <span className="text-[#4EC9B0]">string</span><span className="text-white">;</span></span>
                    </div>
                    <div className="flex">
                      <span className="text-[#3A3A3A] w-8 select-none">5</span>
                      <span className="pl-4"><span className="text-[#9CDCFE]">power</span><span className="text-white">:</span> <span className="text-[#4EC9B0]">number</span><span className="text-white">;</span></span>
                    </div>
                    <div className="flex">
                      <span className="text-[#3A3A3A] w-8 select-none">6</span>
                      <span><span className="text-[#F6DE1E]">{"}"}</span></span>
                    </div>
                    <div className="flex">
                      <span className="text-[#3A3A3A] w-8 select-none">7</span>
                      <span></span>
                    </div>
                    <div className="flex">
                      <span className="text-[#3A3A3A] w-8 select-none">8</span>
                      <span><span className="text-[#DCDCAA]">console</span><span className="text-white">.</span><span className="text-[#DCDCAA]">log</span><span className="text-white">(</span><span className="text-[#CE9178]">`✨ ${"{"}</span><span className="text-[#9CDCFE]">spell</span><span className="text-[#CE9178]">{"}"} - Magic activated!`</span><span className="text-white">);</span></span>
                    </div>
                  </div>
                  {/* Output Panel */}
                  <div className="border-t border-[#1A1A1A] bg-[#0A0A0A] p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#888888] text-xs uppercase tracking-wider">Output</span>
                      <span className="text-[#F6DE1E] text-xs flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-[#F6DE1E] rounded-full animate-pulse"></span>
                        Conjured
                      </span>
                    </div>
                    <div className="font-mono text-sm text-[#F6DE1E]">
                      → ✨ Abracadabra - Magic activated!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 bg-section-gradient relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-runes-pattern opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-magical">
              Powerful <span className="title-magical text-glow-yellow">Features</span>
            </h2>
            <p className="text-xl text-[#AAAAAA] max-w-2xl mx-auto">
              Everything you need for JavaScript and TypeScript development in one place
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card-magical p-8 rounded-2xl transition-all duration-300 group hover:translate-y-[-4px]"
              >
                <div className="feature-icon w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-[#F6DE1E] group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-[#AAAAAA] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tech" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#050508] relative">
        <div className="absolute inset-0 bg-arcane-pattern"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-magical">
              Built with <span className="title-magical text-glow-yellow">Modern Technology</span>
            </h2>
            <p className="text-xl text-[#AAAAAA] max-w-2xl mx-auto">
              Powered by industry-leading tools and frameworks for the best development experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-magical p-8 rounded-2xl text-center group hover:translate-y-[-4px] transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 feature-icon rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <ElectronIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Electron</h3>
              <p className="text-[#888888]">Multiplatform portal</p>
            </div>
            
            <div className="card-magical p-8 rounded-2xl text-center group hover:translate-y-[-4px] transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 feature-icon rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <TypeScriptIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">TypeScript</h3>
              <p className="text-[#888888]">Type safety and type checking</p>
            </div>
            
            <div className="card-magical p-8 rounded-2xl text-center group hover:translate-y-[-4px] transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 feature-icon rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <ViteJsIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Vite</h3>
              <p className="text-[#888888]">Lightning-fast development</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-hero-gradient relative overflow-hidden">
        {/* Magical Effects */}
        <div className="absolute inset-0 bg-constellation opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F6DE1E]/10 rounded-full blur-[100px]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Wand2 className="w-16 h-16 text-[#F6DE1E] mx-auto mb-8 animate-float" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-magical">
            Start your <span className="title-magical text-glow-magical">Adventure</span>
          </h2>
          <p className="text-xl text-[#AAAAAA] mb-10 max-w-2xl mx-auto">
            Download WizardJS and unlock the power of instant JavaScript and TypeScript code writing and execution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={primaryDownload.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-5 rounded-2xl text-lg flex items-center gap-3"
            >
              <Wand2 className="w-5 h-5" />
              Free Download
            </a>
            <a
              href="https://github.com/FranciscoJBrito/WizardJS"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-4 rounded-xl text-lg flex items-center gap-3"
            >
              <Github className="w-5 h-5" />
              Explore Repository
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050508] border-t border-[#F6DE1E]/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#F6DE1E]/20 blur-lg rounded-full"></div>
                  <Image
                    src="/icon.png"
                    alt="WizardJS Logo"
                    width={44}
                    height={44}
                    className="relative rounded-xl"
                  />
                </div>
                <span className="text-white font-bold text-xl font-magical">WizardJS</span>
              </div>
              <p className="text-[#888888] mb-6 max-w-md leading-relaxed">
                The ultimate JavaScript & TypeScript playground. Open source alternative to RunJS with Monaco Editor and real-time execution.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/FranciscoJBrito/WizardJS" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#F6DE1E]/10 flex items-center justify-center text-[#888888] hover:text-[#F6DE1E] hover:border-[#F6DE1E]/30 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-6">Product</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#features" className="text-[#888888] hover:text-[#F6DE1E] transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="https://github.com/FranciscoJBrito/WizardJS/releases" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#F6DE1E] transition-colors">
                    Downloads
                  </a>
                </li>
                <li>
                  <a href="https://github.com/FranciscoJBrito/WizardJS/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#F6DE1E] transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-6">Community</h3>
              <ul className="space-y-4">
                <li>
                  <a href="https://github.com/FranciscoJBrito/WizardJS" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#F6DE1E] transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://github.com/FranciscoJBrito/WizardJS/issues" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#F6DE1E] transition-colors">
                    Report Issues
                  </a>
                </li>
                <li>
                  <a href="https://github.com/FranciscoJBrito/WizardJS/discussions" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#F6DE1E] transition-colors">
                    Discussions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#F6DE1E]/10 mt-12 pt-8 text-center">
            <p className="text-[#888888]">
              © 2025 WizardJS. Made with ❤️ by{" "}
              <a 
                href="https://github.com/FranciscoJBrito" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#F6DE1E] hover:text-glow-yellow transition-all"
              >
                Francisco Brito
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
