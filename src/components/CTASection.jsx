import { ArrowUpRight, Download, Pizza, Sparkles } from "lucide-react";

function CTASection() {
  return (
    <section id="cta" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="cta-panel relative overflow-hidden rounded-[1rem] border border-lava/20 bg-gradient-to-r from-white/8 via-lava/10 to-blush/10 p-8 shadow-glow backdrop-blur-md sm:p-10 ">
        {/* <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -right-20 top-[-4.5rem] h-52 w-52 rounded-full bg-lava/20 blur-3xl" />
          <div className="absolute -left-16 bottom-[-5rem] h-52 w-52 rounded-full bg-blush/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_24%),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:auto,72px_72px,72px_72px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-night/35 via-transparent to-night/25" />
        </div> */}

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-amber-100/90">
              <Sparkles className="h-4 w-4 text-amber-200" />
              Ready to launch
            </div> */}

            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-mist sm:text-4xl lg:text-[2.8rem]">
              Make the last section feel as premium as the first bite.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
              Give users one confident final action with a cleaner conversion block, stronger visual rhythm, and a CTA
              that feels built into the PizzaFlow experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/70">
                <Pizza className="h-4 w-4 text-lava" />
                Top menu highlights
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/70">
                <Download className="h-4 w-4 text-amber-200" />
                One-tap app install
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[1rem] border border-white/10 bg-black/25 p-5 shadow-soft backdrop-blur-md sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/45">Launch APP</p>
                  <p className="mt-3 font-display text-2xl font-semibold text-mist">Start your first order in under a minute.</p>
                </div>
                {/* <span className="rounded-2xl border border-lava/20 bg-lava/10 p-3 text-lava">
                  <Pizza className="h-5 w-5" />
                </span> */}
              </div>

              <p className="mt-5 text-sm leading-7 text-white/65">
                Fast onboarding, clear order states, and a warm premium interface designed to convert without shouting.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#top"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blush via-lava to-amber-300 px-6 py-3.5 text-sm font-semibold text-night transition duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
                >
                  Get the App
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#showcase"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-mist transition duration-300 hover:border-lava/40 hover:bg-white/10"
                >
                  Explore Menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
