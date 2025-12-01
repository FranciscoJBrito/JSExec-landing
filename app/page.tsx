import { ElectronIcon, IconApple, LinuxIcon, TypeScriptIcon, ViteJsIcon, WindowsIcon } from "@/assets/icons";
import { FilePenLine, FolderOpen, GithubIcon, Globe, Lock, Palette, ZapIcon } from "lucide-react";
import Image from "next/image";
import { Metadata } from 'next';
import { homePageMetadata } from './metadata';

export const metadata: Metadata = homePageMetadata;

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      {/* Header */}
      <header className="relative z-10 px-4 py-6 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <Image
              src="/icon.png"
              alt="WizardJS Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-white font-bold text-xl">WizardJS</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#tech" className="text-gray-300 hover:text-white transition-colors">Technology</a>
            <a href="https://github.com/FranciscoJBrito/WizardJS" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <GithubIcon className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-600/20 border border-yellow-500/30 rounded-full text-yellow-300 text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Open Source Alternative to RunJS
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Ultimate
            <span className="bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-400 bg-clip-text text-transparent block">
              JavaScript Playground
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            JavaScript & TypeScript playground with real-time execution,
            and advanced features. Built with Electron for macOS, Windows, and Linux.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            {/* Version Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Current Version: v1.1.0
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
              {/* macOS Download - Purple Theme */}
              <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 text-center hover:border-blue-500/70 transition-all duration-300 hover:bg-blue-900/30">
                <div className="flex justify-center items-center mb-4">
                  <IconApple className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold mb-2 text-lg">macOS</h3>
                <p className="text-blue-200 text-sm mb-6">Intel & Apple Silicon</p>
                <div className="space-y-3">
                  <a 
                    href="https://github.com/FranciscoJBrito/WizardJS/releases/download/v1.1.0/WizardJS-macOS-AppleSilicon.zip" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-sm transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Apple Silicon (.zip)
                  </a>
                  <a 
                    href="https://github.com/FranciscoJBrito/WizardJS/releases/download/v1.1.0/WizardJS-macOS-Intel.zip" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-sm transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Intel (.zip)
                  </a>
                </div>
              </div>
              
              {/* Windows Download - Yellow Theme */}
              <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 text-center hover:border-blue-500/70 transition-all duration-300 hover:bg-blue-900/30">
                <div className="flex justify-center items-center mb-4">
                  <WindowsIcon className="w-12 h-12 text-yellow-400" />
                </div>
                <h3 className="text-white font-semibold mb-2 text-lg">Windows</h3>
                <p className="text-blue-200 text-sm mb-6">Windows 10/11</p>
                <a 
                  href="https://github.com/FranciscoJBrito/WizardJS/releases/download/v1.1.0/WizardJS-Setup-1.1.0.exe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-sm transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Download (.exe)
                </a>
              </div>
              
              {/* Linux Download - Blue Theme */}
              <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 text-center hover:border-blue-500/70 transition-all duration-300 hover:bg-blue-900/30">
                <div className="flex justify-center items-center mb-4">
                  <LinuxIcon className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2 text-lg">Linux</h3>
                <p className="text-blue-200 text-sm mb-6">Debian/Ubuntu & RPM</p>
                <div className="space-y-3">
                  <a 
                    href="https://github.com/FranciscoJBrito/WizardJS/releases/download/v1.1.0/wizardjs_1.1.0_amd64.deb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-sm transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Debian (.deb)
                  </a>
                  <a 
                    href="https://github.com/FranciscoJBrito/WizardJS/releases/download/v1.1.0/wizardjs-1.1.0-1.x86_64.rpm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-sm transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    RPM (.rpm)
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a 
                href="https://github.com/FranciscoJBrito/WizardJS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:border-gray-500"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
              <a 
                href="https://github.com/FranciscoJBrito/WizardJS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-400 hover:bg-purple-500 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                </svg>
                Star on GitHub
              </a>
              <a 
                href="https://github.com/FranciscoJBrito/WizardJS/releases/tag/v1.1.0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm underline"
              >
                View All Downloads
              </a>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center items-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span>Free & Open Source</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              <span>Cross Platform</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-cyan-500 rounded-full"></span>
              <span>Monaco Editor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need for JavaScript and TypeScript development in one place
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-700/50 hover:border-yellow-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <ZapIcon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-time Execution</h3>
              <p className="text-gray-300">Smart auto-run with complete code detection and secure sandbox execution</p>
            </div>
            
            <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-colors">
               <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                 <FilePenLine className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Monaco Editor</h3>
              <p className="text-gray-300">VS Code editor with IntelliSense, syntax highlighting, and autocompletion</p>
            </div>
            
            <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-700/50 hover:border-yellow-500/50 transition-colors">
               <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                 <Palette className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Customizable</h3>
              <p className="text-gray-300">Multiple themes, professional fonts, and persistent configuration</p>
            </div>
            
            <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-colors">
               <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                 <Lock className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure Sandbox</h3>
              <p className="text-gray-300">Isolated execution environment with timeouts and security limits</p>
            </div>
            
            <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-700/50 hover:border-yellow-500/50 transition-colors">
               <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                 <FolderOpen className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">File Management</h3>
              <p className="text-gray-300">Complete file operations with professional keyboard shortcuts</p>
            </div>
            
            <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-colors">
               <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                 <Globe className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cross Platform</h3>
              <p className="text-gray-300">Available for macOS, Windows, and Linux with native performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/60">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Built with Modern Technology</h2>
          <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto">
            Powered by industry-leading tools and frameworks for the best development experience
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                <ElectronIcon className="w-12 h-12" />
             </div>
             <span className="text-white font-semibold">Electron</span>
             <span className="text-gray-400 text-sm">Cross-platform</span>
           </div>
           
           <div className="flex flex-col items-center">
             <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
               <TypeScriptIcon className="w-10 h-10" />
             </div>
             <span className="text-white font-semibold">TypeScript</span>
             <span className="text-gray-400 text-sm">Type safety</span>
           </div>
           
           <div className="flex flex-col items-center">
             <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
               <ViteJsIcon className="w-10 h-10" />
             </div>
             <span className="text-white font-semibold">Vite</span>
             <span className="text-gray-400 text-sm">Fast build</span>
           </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
               <div className="flex items-center space-x-3 mb-4">
                 <Image
                   src="/icon.png"
                   alt="WizardJS Logo"
                   width={40}
                   height={40}
                   className="rounded-lg"
                 />
                 <span className="text-white font-bold text-xl">WizardJS</span>
               </div>
              <p className="text-gray-300 mb-4 max-w-md">
                The ultimate JavaScript & TypeScript playground. Open source alternative to RunJS with Monaco Editor and real-time execution.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/FranciscoJBrito/WizardJS" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="https://github.com/FranciscoJBrito/WizardJS/releases" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Download</a></li>
                <li><a href="https://github.com/FranciscoJBrito/WizardJS/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="https://github.com/FranciscoJBrito/WizardJS" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://github.com/FranciscoJBrito/WizardJS/issues" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Issues</a></li>
                <li><a href="https://github.com/FranciscoJBrito/WizardJS/discussions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Discussions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 WizardJS. Made with ❤️ by <a href="https://github.com/FranciscoJBrito" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors">Francisco Brito</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
