"use client";
import React, { useEffect, useState } from 'react';
import { MapPin, PlaneTakeoff, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[680px] md:min-h-[620px] lg:min-h-[620px] max-w-[1920px] mx-auto overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Original overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        {/* Your original blue glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-custom-blue/30 blur-3xl opacity-60" />

        {/* New animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400/20 to-orange-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-l from-amber-500/15 to-yellow-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-yellow-400/8 via-orange-500/8 to-amber-600/8 rounded-full blur-3xl animate-spin-slow"></div>

        {/* Gradient overlay with your specific gradient */}
        <div className="absolute inset-0 bg_gradient opacity-10"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/60 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Content container */}
      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl px-2 lg:px-0">
          <div className="grid h-[680px] md:h-[620px] lg:h-[620px] grid-cols-1 lg:grid-cols-2 items-center gap-10">

            {/* Left: Enhanced content with animations */}
            <div className={`flex flex-col gap-y-4 text-white max-w-2xl transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

              {/* Enhanced welcome text with gradient line */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 lg:w-12 h-[2px] bg_gradient"></div>
                <h5 className="text-sm sm:text-base font-bold uppercase tracking-wide lg:tracking-[0.22em] text-white/90 animate-pulse">
                  Welcome to NEW HIGHER TRAVELS
                </h5>
              </div>

              {/* Enhanced main heading with gradient text */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
                  Turning Travel Dreams
                </span>{" "}
                <span className="bg_gradient_text animate-gradient">
                  into Reality
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                Custom itineraries, exclusive deals, and a world of possibilities
              </p>

              {/* Enhanced button with gradient */}
              <div className="pt-2">
                <button className="group relative mt-2 h-12 px-8 rounded-lg bg_gradient text-white font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    <PlaneTakeoff className="w-5 h-5" />
                    Get Started
                  </span>
                </button>
              </div>
            </div>

            {/* Right: Enhanced animated image composition */}
            <div className={`relative hidden lg:block transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ transitionDelay: '0.3s' }}>

              {/* Main circular photo with enhanced effects */}
              <div className="relative mx-auto w-[380px] h-[380px]">
                {/* Enhanced rotating halos */}
                <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-yellow-400/40 via-orange-500/20 to-transparent animate-spin-slow" />
                <div className="absolute -inset-4 rounded-full bg-gradient-to-l from-amber-500/30 via-transparent to-yellow-600/20 animate-spin-reverse" />

                {/* Image circle with enhanced glow */}
                <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-yellow-400/20 ring-offset-2 ring-offset-yellow-400/10 shadow-2xl shadow-yellow-500/20 transform transition-all duration-700">
                  <img
                    src="/images/london.jpg"
                    alt="Destination preview"
                    className="w-full h-full object-cover"
                  />
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-yellow-400/20" />
                </div>

                {/* Enhanced floating badges */}
                <div className="absolute -top-4 -left-6 animate-float-medium">
                  <div className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-xl px-4 py-2 border border-yellow-400/30 shadow-xl">
                    <MapPin className="h-4 w-4 text-yellow-400 drop-shadow-lg" />
                    <span className="text-white/90 text-sm font-medium">Top Spots</span>
                  </div>
                </div>

                <div className="absolute bottom-6 -right-8 animate-float-slow">
                  <div className="flex items-center gap-2 rounded-xl bg-white/15 backdrop-blur-xl px-4 py-3 border border-yellow-400/30 shadow-xl">
                    <PlaneTakeoff className="h-4 w-4 text-yellow-400 drop-shadow-lg" />
                    <span className="text-white/90 text-sm font-medium">Exclusive Deals</span>
                  </div>
                </div>

                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 animate-float-fast">
                  <div className="rounded-full bg_gradient text-white px-4 py-2 text-sm font-semibold shadow-2xl border border-yellow-400/40">
                    24/7 Support
                  </div>
                </div>
              </div>

              {/* Enhanced secondary tilted card */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-6 animate-float-medium" style={{ animationDelay: '1s' }}>
                <div className="w-40 h-28 rounded-xl overflow-hidden border border-yellow-400/30 shadow-2xl shadow-yellow-500/20">
                  <img
                    src="/images/turkey.jpg"
                    alt="Preview"
                    className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
                </div>
              </div>

              {/* Enhanced sparkles with golden glow */}
              <div className="absolute -top-8 right-20 text-yellow-400 animate-pulse drop-shadow-lg">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="absolute top-1/4 -right-8 text-amber-400 animate-pulse" style={{ animationDelay: '1.5s' }}>
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="absolute bottom-1/3 left-12 text-orange-400 animate-pulse" style={{ animationDelay: '3s' }}>
                <Sparkles className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced styles with your gradient */}
      <style jsx>{`
        .bg_gradient {
          background: #FFCE61;
          background: linear-gradient(101deg, #ffce61 0%, #a37000 100%);
        }
        
        .bg_gradient_text {
          background: linear-gradient(101deg, #ffce61 0%, #a37000 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-12px) rotate(-6deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 12s linear infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4.5s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-gradient { animation: gradient 3s ease infinite; }
      `}</style>
    </section>
  )
}

export default Hero;