import SectionHeading from "./SectionHeading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

function ShowcaseSection({ pizzas }) {
  return (
    <section id="showcase" className="reveal-section mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Showcase"
        title="A craveable gallery built to sell texture, heat, and flavor."
        description="High-quality pizza imagery, elegant framing, and subtle motion make the app feel delicious before the first bite."
        align="center"
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {pizzas.map((pizza, index) => (
          <Dialog key={pizza.title}>
            <DialogTrigger asChild>
              <button
                type="button"
                className={`showcase-card group overflow-hidden rounded-[1rem] border flex flex-col  border-white/10 bg-white/5 text-left shadow-soft transition hover:border-lava/30 ${
                  index === 0 ? "sm:col-span-2 xl:col-span-2" : ""
                }`}
              >
                <div className="overflow-hidden ">
                  <img
                    src={pizza.image}
                    alt={pizza.title}
                    loading="lazy"
                    className="h-72 w-full object-cover transition  duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold text-mist">{pizza.title}</h3>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-amber-100/85">
                      {pizza.tag}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/65">{pizza.subtitle}</p>
                </div>
              </button>
            </DialogTrigger>
            <DialogContent className="overflow-hidden">
              <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
                <div className="overflow-hidden">
                  <img src={pizza.image} alt={pizza.title} className="h-72 w-full object-cover md:h-full" />
                </div>
                <div className="p-6 sm:p-6">
                  <DialogHeader>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border border-lava/20 bg-lava/10 px-3 py-1 text-xs font-medium text-amber-100/85">
                        {pizza.tag}
                      </span>
                      <span className="text-sm text-white/45">{pizza.price}</span>
                    </div>
                    <DialogTitle className="pt-2">{pizza.title}</DialogTitle>
                    <DialogDescription>{pizza.details}</DialogDescription>
                  </DialogHeader>

                  <div className="mt-8">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/45">Ingredients</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {pizza.ingredients.map((ingredient) => (
                        <span
                          key={ingredient}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8  border-t-2 border-white/10  p-4 px-2">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/45">Why it stands out</p>
                    <p className="mt-3 text-sm leading-7 text-white/65">
                      This menu item is designed to show off the app&apos;s premium photography, richer discovery flow,
                      and simple detail browsing before checkout.
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}

export default ShowcaseSection;
