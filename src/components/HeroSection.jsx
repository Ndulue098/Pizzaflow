import { useEffect, useState } from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import useLandingAnimations from "../hooks/useLandingAnimations";
import { heroSlides } from "../data/content";

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useLandingAnimations();

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 30000);

    return () => window.clearInterval(intervalId);
  }, []);

  const currentSlide = heroSlides[activeSlide];

  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="hero-copy max-w-2xl">
          <div className="hero-badge inline-flex items-center rounded-full border border-lava/30 bg-lava/10 px-4 py-2 text-sm font-medium text-amber-100 shadow-soft">
            Pizza ordering redesigned for beginners
          </div>
          <h1 className="hero-title mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-mist sm:text-6xl lg:text-7xl">
            Order Pizza Smarter
          </h1>
          <p className="hero-text mt-6 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
            PizzaFlow helps first-time users discover the right pizza, customize with confidence, and track every order
            with the polished feel of a premium consumer app.
          </p>

          <div className="hero-actions mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blush via-lava to-amber-300 px-6 py-3.5 text-sm font-semibold text-night shadow-glow transition duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
            >
              Download App
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-mist transition hover:border-lava/40 hover:bg-white/10"
            >
              <PlayCircle className="h-4 w-4 text-amber-200" />
              Get Started
            </a>
          </div>

          <dl className="hero-stats mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div>
              <dt className="text-sm text-white/45">Avg. checkout</dt>
              <dd className="mt-2 font-display text-2xl font-bold text-mist">45s</dd>
            </div>
            <div>
              <dt className="text-sm text-white/45">Order accuracy</dt>
              <dd className="mt-2 font-display text-2xl font-bold text-mist">99.2%</dd>
            </div>
            <div>
              <dt className="text-sm text-white/45">Happy diners</dt>
              <dd className="mt-2 font-display text-2xl font-bold text-mist">12k+</dd>
            </div>
          </dl>
        </div>


        {/* hero img */}
        <div className=" relative ">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-lava/25 via-blush/15 to-transparent blur-3xl" />
          <div className="overflow-hidden rounded-[1rem] border border-white/10 bg-panel p-1 shadow-soft backdrop-blur-xl ">
            <div className="relative overflow-hidden rounded-[1rem]">
              <img
                key={currentSlide.title}
                src={currentSlide.image}
                alt={currentSlide.title}
                className="hero-carousel-image h-[26rem] w-full object-cover sm:h-[32rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-4 ">
                <div className="max-w-lx  rounded-[1rem] border border-white/10 bg-night/55 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm text-white/50">{currentSlide.label}</p>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-amber-100/85">
                      {currentSlide.accent}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <h2 className="hero-slide-content font-display text-2xl font-semibold text-mist sm:text-3xl">
                      {currentSlide.title}
                    </h2>
                    <span className="rounded-md bg-emerald-400/15 max-w-[6rem] px-2 py-1 text-xs font-medium text-emerald-200">
                      {currentSlide.prepTime}
                    </span>
                  </div>
                  <p className="hero-slide-content mt-4 text-sm leading-7 text-white/65">{currentSlide.description}</p>
                  <div className="mt-6 flex items-center gap-2">
                    {heroSlides.map((slide, index) => (
                      <button
                        key={slide.title}
                        type="button"
                        aria-label={`Show ${slide.title}`}
                        onClick={() => setActiveSlide(index)}
                        className={`h-2.5 rounded-full transition duration-300 ${
                          index === activeSlide ? "w-10 bg-amber-200" : "w-2.5 bg-white/30 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
