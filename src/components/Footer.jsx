import { Instagram, Twitter, Youtube } from "lucide-react";

const socials = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Twitter", href: "https://x.com", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

function Footer({ links }) {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-display text-xl font-semibold text-mist">PizzaFlow</p>
          <p className="mt-2 text-sm text-white/45">Modern pizza ordering for first-time users.</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/55 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="rounded-full border border-white/10 p-2 text-white/60 transition hover:border-lava/40 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
