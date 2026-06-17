import { Reveal } from "./Reveal";
import catalogSarafan from "@/assets/catalog/catalog-sarafan.png";
import catalogPurple from "@/assets/catalog/catalog-purple.jpg";
import catalogBlue from "@/assets/catalog/catalog-blue.jpg";
import catalogUniform from "@/assets/catalog/catalog-uniform.jpg";
import catalogNavy from "@/assets/catalog/catalog-navy.jpg";
import catalogSweatpants from "@/assets/catalog/catalog-sweatpants.jpg";
import catalogTshirts from "@/assets/catalog/catalog-tshirts.jpg";
import catalogJoggers from "@/assets/catalog/catalog-joggers.jpg";
import catalogSummerShorts from "@/assets/catalog/catalog-summer-shorts.jpg";
import catalogShorts from "@/assets/catalog/catalog-shorts.jpg";

const items = [
  { n: "01", title: "Школьный сарафан с блузой", img: catalogSarafan, tag: "Школьная форма · девочки" },
  { n: "02", title: "Лонгсливы и широкие джинсы", img: catalogPurple, tag: "Casual · дети" },
  { n: "03", title: "Базовые лонгсливы и деним", img: catalogBlue, tag: "Повседневная линия · дети" },
  { n: "04", title: "Жилет и широкие брюки", img: catalogUniform, tag: "Школьная форма · девочки" },
  { n: "05", title: "Трикотажный костюм oversize", img: catalogNavy, tag: "Comfort line · девочки" },
  { n: "06", title: "Базовые брюки из футера", img: catalogSweatpants, tag: "Essential · дети" },
  { n: "07", title: "Футболки в природных оттенках", img: catalogTshirts, tag: "Basic collection · дети" },
  { n: "08", title: "Мягкие джоггеры и свитшоты", img: catalogJoggers, tag: "Lounge line · дети" },
  { n: "09", title: "Летний комплект с шортами", img: catalogSummerShorts, tag: "Summer line · девочки" },
  { n: "10", title: "Яркий комплект с шортами", img: catalogShorts, tag: "Fashion line · подростки" },
];

export function Products() {
  return (
    <section id="products" className="relative py-28 md:py-40 bg-beige/40">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <Reveal>
            <div>
              <span className="text-eyebrow">◦ 02 — Продукция</span>
              <h2 className="mt-6 text-display text-[clamp(2.5rem,6vw,5rem)] text-ink max-w-2xl">
                Что мы <em className="italic text-stone">производим</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-ink/70 max-w-sm">
              Детская и подростковая одежда: школьная форма, casual и premium-линии.
              От минимальной партии 500 изделий на модель — до индустриальных тиражей.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={(i % 3) * 0.1}>
              <a href="#contact" className="group block">
                <div className="relative overflow-hidden rounded-sm bg-sand/30 aspect-[3/4]">
                  <img
                    src={it.img}
                    alt={it.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-5 left-5 text-eyebrow text-milk mix-blend-difference">
                    {it.n}
                  </span>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl md:text-[1.7rem] font-serif text-ink">
                    {it.title}
                  </h3>
                  <span className="text-xs text-stone tracking-wider uppercase shrink-0">
                    {it.tag}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
