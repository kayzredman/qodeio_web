import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 w-full z-50 bg-slate-950 border-b border-cyan-400/20 shadow-lg backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 py-3 sm:py-4 sm:px-6 lg:px-8 flex items-center gap-4 sm:gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="QodeIO Logo"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
          />
          <span className="text-white font-bold text-sm sm:text-base lg:text-lg whitespace-nowrap tracking-wide">QodeIO</span>
        </div>

        {/* Spacer to push menu right */}
        <div className="flex-1" />

        {/* Navigation Links - Hidden on mobile */}
        <div className="items-center gap-6 lg:gap-8 hidden sm:flex justify-end">
          <a href="/" className="text-white hover:text-cyan-400 transition-colors text-sm lg:text-base font-medium px-2 py-1 rounded">
            Home
          </a>
          <a href="/about" className="text-white hover:text-cyan-400 transition-colors text-sm lg:text-base font-medium px-2 py-1 rounded">
            About
          </a>
          <a href="/services" className="text-white hover:text-cyan-400 transition-colors text-sm lg:text-base font-medium px-2 py-1 rounded">
            Services
          </a>
          <a href="#contact" className="text-white hover:text-cyan-400 transition-colors text-sm lg:text-base font-medium px-2 py-1 rounded">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
