export default function About() {
  return (
    <section id="about" className="w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Subtle circuit background - hidden on mobile */}
      <div className="absolute inset-0 opacity-10 hidden sm:block">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 600">
          <line x1="0" y1="200" x2="1200" y2="200" stroke="rgb(34, 211, 238)" strokeWidth="1.5" />
          <line x1="0" y1="400" x2="1200" y2="400" stroke="rgb(34, 211, 238)" strokeWidth="1.5" />
          <line x1="300" y1="0" x2="300" y2="600" stroke="rgb(34, 211, 238)" strokeWidth="1.5" />
          <line x1="600" y1="0" x2="600" y2="600" stroke="rgb(34, 211, 238)" strokeWidth="1.5" />
          <line x1="900" y1="0" x2="900" y2="600" stroke="rgb(34, 211, 238)" strokeWidth="1.5" />
          <circle cx="300" cy="200" r="5" fill="rgb(34, 211, 238)" />
          <circle cx="600" cy="400" r="5" fill="rgb(34, 211, 238)" />
          <circle cx="900" cy="200" r="5" fill="rgb(34, 211, 238)" />
        </svg>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left side content */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white">
              About Us
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 sm:text-gray-400 leading-relaxed">
              At QodeIO, we believe in the power of innovation and technology to transform businesses. From code to creation, we deliver solutions that drive success and exceed expectations.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-gray-300 sm:text-gray-400 leading-relaxed">
              Our team of dedicated professionals brings years of expertise in software development, digital strategy, and technology consulting. We partner with our clients to understand their unique challenges and deliver custom solutions that create lasting impact.
            </p>

            <div className="pt-2 sm:pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto text-center">
                Learn More
              </button>
            </div>
          </div>

          {/* Right side - Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-6">
            <div className="bg-slate-800/50 backdrop-blur border border-cyan-400/20 rounded-xl p-4 sm:p-6 hover:border-cyan-400/50 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-cyan-400 text-lg sm:text-xl">⚡</span>
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-white mb-2">Fast & Efficient</h3>
              <p className="text-xs sm:text-sm text-gray-400">Optimized solutions built for performance and scalability.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-cyan-400/20 rounded-xl p-4 sm:p-6 hover:border-cyan-400/50 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-cyan-400 text-lg sm:text-xl">🎯</span>
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-white mb-2">Focused Solutions</h3>
              <p className="text-xs sm:text-sm text-gray-400">Tailored approaches to meet your specific business needs.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-cyan-400/20 rounded-xl p-4 sm:p-6 hover:border-cyan-400/50 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-cyan-400 text-lg sm:text-xl">🚀</span>
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-white mb-2">Innovation First</h3>
              <p className="text-xs sm:text-sm text-gray-400">Cutting-edge technology and forward-thinking strategies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
