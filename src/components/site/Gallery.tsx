import { Reveal } from "./Reveal";
import g1 from "@/assets/gallery-1.jpg";
import gFloorNew from "@/assets/gallery-floor-new.jpg";
import g3 from "@/assets/gallery-3.jpg";
import gProductionNew from "@/assets/gallery-production-new.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gFloorNew, caption: "Производственный цех", span: "row-span-2" },
  { src: g1, caption: "Текстильный склад", span: "" },
  { src: g3, caption: "Раскрой и лекала", span: "" },
  { src: g6, caption: "Швейные нити", span: "row-span-2" },
  { src: gProductionNew, caption: "Контроль качества", span: "" },
  { src: g5, caption: "Упаковка партии", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-28 md:py-40 bg-milk">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 mb-16 md:mb-24">
          <Reveal className="lg:col-span-6">
            <span className="text-eyebrow">◦ 06 — Галерея</span>
            <h2 className="mt-6 text-display text-[clamp(2.5rem,6vw,5rem)] text-ink">
              Внутри <em className="italic text-stone">фабрики</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-ink/70">
              Производство, ткани, готовая продукция и команда. Реальные кадры
              того, как создаётся ваша партия.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[260px] gap-3 md:gap-5">
          {images.map((im, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08} className={im.span}>
              <figure className="group relative h-full overflow-hidden rounded-sm bg-sand/30">
                <img
                  src={im.src}
                  alt={im.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />
                <figcaption className="absolute bottom-0 inset-x-0 p-4 text-xs tracking-wider uppercase text-milk bg-gradient-to-t from-ink/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  {im.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
