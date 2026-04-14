import FeatureIcon from "./FeatureIcon";
import SectionHeading from "./SectionHeading";



function FeaturesSection({ features }) {
  return (
    <section id="features" className="reveal-section mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <h2 className="decorated-heading w-full text-xl font-semibold uppercase tracking-[0.35em] text-amber-200/70 text-center mb-12">Features</h2>
      <div className="overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-soft backdrop-blur-md">
        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="border-b border-white/10 p-8 sm:p-8 lg:border-b-0 lg:border-r flex flex-col justify-between">
            <SectionHeading
              // eyebrow=""
              title="Everything a first-time pizza customer needs, minus the friction."
              description="Designed to feel premium from the first tap, with thoughtful flows that turn indecision into confidence."
            />
            <div className="mt-10 space-y-4 ">
              <div className="rounded-[1rem]  border-lava/20 bg-gradient-to-br from-lava/12 to-transparent ">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-200/65">Why it feels better</p>
                <p className="mt-3 max-w-sm text-sm leading-7 text-white/68">
                  Cleaner onboarding, clearer order feedback, and a warmer visual language that makes the app feel easy
                  before users even tap.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-px bg-white/10 md:grid-cols-2">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className={`feature-card group relative bg-night/70 p-6 sm:p-7 text-center  flex flex-col items-center justify-center ${
                  index % 2 === 0 ? "md:border-r md:border-white/0 " : ""
                }`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-100">
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-lava/50 to-transparent" />
                  <div className="absolute inset-y-6 right-0 w-px bg-gradient-to-b from-transparent via-amber-200/20 to-transparent" />
                </div>
                <FeatureIcon name={feature.icon} />
                <h3 className="mt-8 font-display text-2xl font-semibold text-mist">{feature.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-white/65">{feature.description}</p>
                <div className="mt-8 flex items-center gap-3  text-sm font-medium text-white/45">
                  <span className="h-px w-8 bg-white/20" />
                  Built for smooth ordering
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
