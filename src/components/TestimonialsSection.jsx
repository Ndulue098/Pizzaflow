import { Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";

function TestimonialsSection({ testimonials }) {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted by people who want pizza ordering to feel effortless."
        description="Social proof that reinforces simplicity, speed, and a premium brand experience."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="testimonial-card rounded-[1rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-md"
          >
            <Quote className="h-8 w-8 text-lava/80" />
            <p className="mt-5 text-base leading-8 text-white/72">&quot;{testimonial.quote}&quot;</p>
            <div className="mt-8">
              <p className="font-display text-xl font-semibold text-mist">{testimonial.name}</p>
              <p className="mt-1 text-sm text-white/45">{testimonial.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
