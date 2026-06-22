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

export function Footer() {
  return (
    <footer className="bg-milk text-ink border-t border-border">
      <div className="container-x py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="font-serif text-6xl md:text-7xl text-ink">Asel</div>
          <p className="mt-6 text-ink/70 max-w-sm">
            Швейная фабрика полного цикла в Бишкеке. Производство одежды для
            брендов, маркетплейсов и оптовых байеров.
          </p>
        </div>

        <div className="lg:col-span-3">
          <div className="text-eyebrow mb-5">Навигация</div>
          <ul className="space-y-3 text-ink/80">
            <li><a href="#about" className="link-underline">О фабрике</a></li>
            <li><a href="#products" className="link-underline">Продукция</a></li>
            <li><a href="#process" className="link-underline">Этапы работы</a></li>
            <li><a href="#gallery" className="link-underline">Галерея</a></li>
            <li><a href="#contact" className="link-underline">Контакты</a></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <div className="text-eyebrow mb-5">Контакты</div>
          <p className="text-ink/80">Кыргызстан, г. Бишкек,<br />ул. Шабдан Баатыра, 1К</p>
          <a href="tel:+996707604874" className="block mt-4 link-underline">+996 707 604 874</a>
          <a href="mailto:asel@aselfabric.com" className="block mt-2 link-underline">asel@aselfabric.com</a>

          <div className="mt-6 flex gap-3">
            <a
              href="https://www.instagram.com/asel_fabric/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-full border border-border hover:bg-ink hover:text-milk transition-colors"
            >
              <InstagramIcon className="h-4 w-4 stroke-[1.5]" />
            </a>
            <a
              href="https://wa.me/996707604874"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="grid h-11 w-11 place-items-center rounded-full border border-border hover:bg-ink hover:text-milk transition-colors"
            >
              <MessageCircle className="h-4 w-4 stroke-[1.5]" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-stone tracking-wider uppercase">
          <div>© {new Date().getFullYear()} Asel. Все права защищены.</div>
          <a href="#" className="link-underline">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}
