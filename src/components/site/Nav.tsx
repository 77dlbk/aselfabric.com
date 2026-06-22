import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const links = [
  { href: "#about", label: "О фабрике" },
  { href: "#products", label: "Продукция" },
  { href: "#process", label: "Процесс" },
  { href: "#gallery", label: "Галерея" },
  { href: "#contact", label: "Контакты" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-milk/80 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-3xl tracking-tight text-ink">Asel</span>
          <span className="text-eyebrow hidden sm:inline">est. KG</span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-sm text-ink/80 hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="https://www.instagram.com/asel_fabric/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-ink/70 hover:text-ink transition-colors"
          >
            <InstagramIcon className="h-5 w-5 stroke-[1.5]" />
          </a>
          <a
            href="https://wa.me/996707604874"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="text-ink/70 hover:text-ink transition-colors"
          >
            <MessageCircle className="h-5 w-5 stroke-[1.5]" />
          </a>
          <span className="w-px h-4 bg-border" />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-ink px-5 py-2.5 text-sm text-ink transition-all hover:bg-ink hover:text-milk"
          >
            Получить расчет
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block h-px w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden bg-milk border-t border-border"
        >
          <div className="container-x flex flex-col py-8 gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-serif text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-ink text-milk px-6 py-3"
            >
              Получить расчет
            </a>

            <div className="flex gap-6 items-center mt-6 pt-6 border-t border-border/60">
              <a
                href="https://www.instagram.com/asel_fabric/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-ink/75 hover:text-ink text-sm font-serif"
              >
                <InstagramIcon className="h-5 w-5" /> Instagram
              </a>
              <span className="w-px h-4 bg-border/60" />
              <a
                href="https://wa.me/996707604874"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-ink/75 hover:text-ink text-sm font-serif"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
