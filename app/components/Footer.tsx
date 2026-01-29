export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 md:py-12 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 w-full">
          {/* Left: Logo and Copyright */}
          <div className="flex items-center gap-4">
            <span className="text-white font-bold text-sm sm:text-base">QodeIO</span>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-0">
              &copy; 2016 QodeIO. All rights reserved.
            </p>
          </div>

          {/* Right: Powered by QodeIO */}
          <div className="flex items-center gap-2 sm:border-l sm:border-slate-800/50 sm:pl-8">
            <p className="text-gray-400 text-xs sm:text-sm mb-0">
              Site powered by
            </p>
            <span className="text-white font-semibold text-xs sm:text-sm">QodeIO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
