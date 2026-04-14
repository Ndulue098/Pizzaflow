import SectionHeading from "./SectionHeading";

function HowItWorksSection({ steps }) {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="A smooth three-step flow from craving to doorstep."
          description="Each moment is designed to be obvious, calm, and reassuring, so new users always know what to do next."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3 h-full grow bg-re">
          {steps.map((step, index) => (
            <div key={step.number} className={`relative  `} style={{ paddingTop: `${index * 3}rem` }}>
              <p className="text-6xl font-thin uppercase tracking-[0.em] text-lava/80 mb-3 ">{step.number}</p>
              <article className="timeline-step relative rounded-[1rem] hover:border-lava/80 transition-all duration-700  border border-white/10 bg-night/50 px-6 py-2  min-h-[12rem]">
                <h3 className="mt-5 font-display text-2xl font-semibold text-mist">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{step.description}</p>
              </article>

              {/* {index < steps.length - 1 ? (
                <div className="pointer-events-none absolute right-[-2.4rem] top-1/2 z-10 hidden -translate-y-1/2 lg:block" style={{ paddingTop: `${index * 3}rem` }}>
                  <svg
                    width="94"
                    height="44"
                    viewBox="0 0 94 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="overflow-visible"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 22C28 22 26 6 49 6C66 6 69 22 85 22"
                      stroke="url(#flowGradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="6 6"
                    />
                    <path
                      d="M4 22C28 22 26 38 49 38C66 38 69 22 85 22"
                      stroke="url(#flowGradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="6 6"
                    />
                    <path d="M77 14L87 22L77 30" stroke="#FDE68A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="flowGradient" x1="4" y1="22" x2="85" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F97316" stopOpacity="0.12" />
                        <stop offset="0.52" stopColor="#FB923C" stopOpacity="0.95" />
                        <stop offset="1" stopColor="#FDE68A" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              ) : null} */}
            </div>
          ))}
        </div>
    </section>
  );
}

export default HowItWorksSection;
