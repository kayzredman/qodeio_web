export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden flex flex-col items-center justify-center pt-16 sm:pt-20 lg:pt-0">
      {/* Circuit Board Background - hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden hidden sm:block opacity-100">
        {/* Dim overlay */}
        <div className="absolute inset-0 bg-slate-950 opacity-90 z-0" />
        <svg className="absolute w-full h-full opacity-5 z-10" preserveAspectRatio="none" viewBox="0 0 1200 800">
          {/* Horizontal lines */}
          <line x1="100" y1="100" x2="1100" y2="100" stroke="rgb(34, 211, 238)" strokeWidth="2" />
          <line x1="150" y1="200" x2="950" y2="200" stroke="rgb(34, 211, 238)" strokeWidth="2" />
          <line x1="200" y1="300" x2="1000" y2="300" stroke="rgb(34, 211, 238)" strokeWidth="2" />
          <line x1="100" y1="500" x2="1100" y2="500" stroke="rgb(34, 211, 238)" strokeWidth="2" />
          <line x1="150" y1="600" x2="950" y2="600" stroke="rgb(34, 211, 238)" strokeWidth="2" />
          
          {/* Vertical lines */}
          <line x1="200" y1="50" x2="200" y2="400" stroke="rgb(34, 211, 238)" strokeWidth="2" />
          <line x1="400" y1="100" x2="400" y2="650" stroke="rgb(34, 211, 238)" strokeWidth="2" />
          <line x1="700" y1="0" x2="700" y2="700" stroke="rgb(34, 211, 238)" strokeWidth="2" />
          <line x1="900" y1="100" x2="900" y2="750" stroke="rgb(34, 211, 238)" strokeWidth="2" />
          
          {/* Diagonal lines */}
          <line x1="0" y1="0" x2="400" y2="400" stroke="rgb(34, 211, 238)" strokeWidth="1.5" />
          <line x1="800" y1="0" x2="1200" y2="400" stroke="rgb(34, 211, 238)" strokeWidth="1.5" />
          
          {/* Connection dots */}
          <circle cx="200" cy="100" r="6" fill="rgb(34, 211, 238)" />
          <circle cx="400" cy="200" r="6" fill="rgb(34, 211, 238)" />
          <circle cx="700" cy="300" r="6" fill="rgb(34, 211, 238)" />
          <circle cx="900" cy="500" r="6" fill="rgb(34, 211, 238)" />
          <circle cx="500" cy="600" r="6" fill="rgb(34, 211, 238)" />
          <circle cx="1000" cy="150" r="4" fill="rgb(34, 211, 238)" />
          <circle cx="300" cy="400" r="4" fill="rgb(34, 211, 238)" />
        </svg>
      </div>

      {/* Content */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-start justify-center">
        <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
            Building<br />Tomorrow&apos;s<br />Digital Solutions
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 sm:text-gray-400 leading-relaxed max-w-2xl">
            Transform your ideas into reality with cutting-edge technology and innovative solutions tailored to your needs.
          </p>
        </div>

        {/* Right side decorative elements */}
        <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 h-96 w-96 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
