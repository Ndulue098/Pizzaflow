function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignmentClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignmentClass}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-200/70">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-mist sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-white/65">{description}</p>
    </div>
  );
}

export default SectionHeading;
