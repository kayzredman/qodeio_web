import Image from "next/image";

export default function About() {
  return (
    <section className="w-full min-h-screen relative flex items-center justify-center px-4 sm:px-0 pb-8">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-slate-950 opacity-98" />
        <Image
          src="/images/about_bkg.png"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-10"
          priority
        />
      </div>

      <div className="max-w-5xl w-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Pioneering the Future, One<br />Solutions at a Time
          </h1>
          <p className="text-lg text-slate-200 font-normal">
            Our journey, values, and vision that drives us forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 w-full mt-4">
            <div className="flex-1">
              <h2 className="text-white font-semibold text-lg mb-2">Our Story:</h2>
              <p className="text-slate-200 text-base">
                Founded in 2016, QodeIO’s mission: to transform complex challenges into elegant digital solutions.
              </p>
            </div>
            <div className="flex-1">
              <h2 className="text-white font-semibold text-lg mb-2">Our Values:</h2>
              <p className="text-slate-200 text-base">
                Innovation, Integrity, and Impact. These core principles guide every line we code, every word we write, and every partnership we build.
              </p>
            </div>
          </div>
        </div>
        {/* Right: Logo */}
        <div className="flex-1 flex items-center justify-center mt-40 sm:mt-56">
          <Image
            src="/images/logo.png"
            alt="QodeIO Logo"
            width={260}
            height={260}
            className="drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
