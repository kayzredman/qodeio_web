import Image from "next/image";

export default function Services() {
  return (
    <section className="w-full min-h-screen relative flex flex-col items-center justify-center px-4 sm:px-0 pb-8 pt-24 sm:pt-40">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-slate-950 opacity-95" />
        <Image
          src="/images/services_bkg.png"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-15"
          priority
        />
      </div>

      <div className="max-w-6xl w-full mx-auto flex flex-col items-center gap-8 px-2 sm:px-4">
        {/* Heading and logo */}
        <div className="w-full flex flex-col items-center md:items-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center md:text-left mb-2">
            Empowering Your Digital Journey
          </h1>
          <p className="text-base sm:text-lg text-slate-200 font-normal text-center md:text-left mt-4 mb-2 max-w-2xl w-full">
            Together, we transform your ideas into powerful digital experiences.
          </p>
        </div>
        {/* Logo in bottom right */}
        <div className="hidden md:block">
          <div className="fixed bottom-8 right-8 z-10">
            <Image
              src="/images/logo.png"
              alt="QodeIO Logo"
              width={120}
              height={120}
              className="drop-shadow-2xl opacity-90"
              priority
            />
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-8">
          <div className="border border-cyan-400/30 rounded-lg pl-12 pr-8 py-6 bg-slate-950/60 min-h-[140px] flex flex-col">
            <h2 className="text-white font-semibold text-base mb-3">Web Solutions</h2>
            <p className="text-slate-300 text-sm leading-relaxed break-words">Lorem Ipsum dolor ait auid adellanges vind the tnd inte solutions.</p>
          </div>
          <div className="border border-cyan-400/30 rounded-lg pl-12 pr-8 py-6 bg-slate-950/60 min-h-[140px] flex flex-col">
            <h2 className="text-white font-semibold text-base mb-3">Custom Software</h2>
            <p className="text-slate-300 text-sm leading-relaxed break-words">Lorem ipsum dolor sit amet, adellanges and lages ano linre your ne needs.</p>
          </div>
          <div className="border border-cyan-400/30 rounded-lg pl-12 pr-8 py-6 bg-slate-950/60 min-h-[140px] flex flex-col">
            <h2 className="text-white font-semibold text-base mb-3">CLoud Solutions</h2>
            <p className="text-slate-300 text-sm leading-relaxed break-words">Lorem Ipsum dolor ait anet, the-adellanges wid pitile limy titind solutions.</p>
          </div>
          <div className="border border-cyan-400/30 rounded-lg pl-12 pr-8 py-6 bg-slate-950/60 min-h-[140px] flex flex-col">
            <h2 className="text-white font-semibold text-base mb-3">Mobile Development</h2>
            <p className="text-slate-300 text-sm leading-relaxed break-words">Lorem ipsum dolor sit amet, mdaliandong alali tateme - sdalleslogy wild sithse lime kpde co delite paot du tind solutions.</p>
          </div>
          <div className="border border-cyan-400/30 rounded-lg pl-12 pr-8 py-6 bg-slate-950/60 min-h-[140px] flex flex-col">
            <h2 className="text-white font-semibold text-base mb-3">Data & InfoSec Services</h2>
            <p className="text-slate-300 text-sm leading-relaxed break-words">Lorem ipsum dolor sit amet, regolong oild une met-adellsiology ahd toialtes lalies eligital the itnoe solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
