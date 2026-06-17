import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="about" ref={ref} className="relative py-28 md:py-40 bg-milk">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <span className="text-eyebrow">◦ 01 — О фабрике</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-display text-[clamp(2.5rem,6vw,5rem)] text-ink">
              Производство, <em className="italic text-stone">которому</em> доверяют
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-ink/75 leading-relaxed max-w-md">
              Asel — современная швейная фабрика, специализирующаяся на
              производстве качественной одежды крупными партиями. Мы сопровождаем
              клиента на всех этапах: от идеи и разработки образца до упаковки и
              отгрузки готовой продукции.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
              <div className="border-t border-border pt-4">
                <div className="font-serif text-3xl text-ink">10+</div>
                <div className="text-xs text-stone mt-1 tracking-wider uppercase">Лет на рынке</div>
              </div>
              <div className="border-t border-border pt-4">
                <div className="font-serif text-3xl text-ink">200+</div>
                <div className="text-xs text-stone mt-1 tracking-wider uppercase">Клиентов</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 grid grid-cols-12 gap-4 md:gap-6">
          <motion.div style={{ y: y1 }} className="col-span-8">
            <Reveal>
              <div className="overflow-hidden rounded-sm">
                <img
                  src={about1}
                  alt="Работа на швейной машине"
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-[1.5s]"
                />
              </div>
            </Reveal>
          </motion.div>
          <motion.div style={{ y: y2 }} className="col-span-4 self-end">
            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-sm">
                <img
                  src={about2}
                  alt="Готовая продукция"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-[1.5s]"
                />
              </div>
              <p className="mt-4 text-xs text-stone tracking-wider uppercase">— Цех №2, Бишкек</p>
            </Reveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
