// import { Pizza } from "lucide-react";
import pizzaIcon from '../pizzas/pizzaIcon.svg'
const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Showcase", href: "#showcase" },
  { label: "Reviews", href: "#testimonials" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-night/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          {/* <span className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-gradient-to-br from-blush via-lava to-amber-300 text-lg font-bold shadow-glow"> */}
            
          {/* <Pizza className="h-6 w-6 bg-lava from-blush via-lava to-amber-300 " /> */}
          <img src={pizzaIcon} alt="pizza" className="h-8 w-8" />
          {/* </span> */}
          <div>
            <p className="font-display text-lg font-bold tracking-tight text-mist">PizzaFlow</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition hover:text-white focus:outline-none focus-visible:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#cta"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-mist transition hover:border-lava/50 hover:bg-lava/15"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
