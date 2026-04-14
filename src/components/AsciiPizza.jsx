import { useEffect, useState } from "react";

const frames = [
  String.raw`
      _...._
   .-'      '-.
  /  .-''''-.  \
 |  /  .--.  \  |
 | |  ( () ) | |
 |  \  '--'  /  |
  \  '-.__.-'  /
   '-.______.-
`,
  String.raw`
      _...._
   .-'      '-.
  /  .-''''-.  \
 |  /  .--.  \  |
 | |  ( >< ) | |
 |  \  '--'  /  |
  \  '-.__.-'  /
   '-.______.-
`,
  String.raw`
      _...._
   .-'      '-.
  /  .-''''-.  \
 |  /  .--.  \  |
 | |  ( ^^ ) | |
 |  \  '--'  /  |
  \  '-.__.-'  /
   '-.______.-
`,
];

function AsciiPizza() {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setFrameIndex((currentIndex) => (currentIndex + 1) % frames.length);
    }, 900);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="hero-ascii rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur-md">
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-amber-200/70">Fresh from the oven</p>
      <pre
        aria-hidden="true"
        className="font-mono text-[0.6rem] leading-[1.1] text-amber-100/90 sm:text-xs"
      >
        {frames[frameIndex]}
      </pre>
      <p className="mt-3 text-sm text-white/60">Animated ASCII baked with a subtle looping pulse.</p>
    </div>
  );
}

export default AsciiPizza;
