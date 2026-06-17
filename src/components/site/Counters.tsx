import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString("ru-RU") + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, mv, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { v: 10000, s: "", label: "Изделий в месяц", note: "максимальная мощность" },
  { v: 500, s: "", label: "От одной модели", note: "минимальная партия" },
  { v: 7, s: "", label: "Дней на образец", note: "5–7 рабочих дней" },
  { v: 100, s: "%", label: "Полный цикл", note: "от ткани до отгрузки" },
];

export function Counters() {
  return (
    <section className="relative py-28 md:py-40 bg-ink text-milk overflow-hidden">
      <div className="container-x">
        <Reveal>
          <span className="text-eyebrow text-milk/60">◦ 03 — Мощности</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 text-display text-[clamp(2.5rem,6vw,5rem)] max-w-3xl">
            Масштаб, который <em className="italic text-sand">говорит сам за себя</em>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-milk/10">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.08} className="bg-ink p-8 md:p-10">
              <div className="text-xs text-milk/50 tracking-wider uppercase mb-6">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-display text-[clamp(3rem,7vw,6rem)] text-milk leading-none">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="mt-6 text-milk font-medium">{s.label}</div>
              <div className="text-sm text-milk/50 mt-1">{s.note}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
