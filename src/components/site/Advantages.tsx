import { Reveal } from "./Reveal";
import { Factory, Cog, Users, ShieldCheck, FileText, Package } from "lucide-react";

const items = [
  { Icon: Factory, t: "Высокие производственные мощности", d: "До 10 000 изделий в месяц на собственных линиях." },
  { Icon: Cog, t: "Современное оборудование", d: "Промышленные машины и автоматизированный раскрой." },
  { Icon: Users, t: "Опытная команда", d: "Технологи, конструкторы и швеи с опытом более 10 лет." },
  { Icon: ShieldCheck, t: "Контроль качества", d: "Многоступенчатый ОТК на каждом этапе производства." },
  { Icon: FileText, t: "Прозрачные условия", d: "Понятная смета, договор и контроль сроков." },
  { Icon: Package, t: "Производство под ключ", d: "От разработки лекал до упаковки и отгрузки." },
];

export function Advantages() {
  return (
    <section className="py-28 md:py-40 bg-beige/40">
      <div className="container-x">
        <Reveal>
          <span className="text-eyebrow">◦ 05 — Преимущества</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 text-display text-[clamp(2.5rem,6vw,5rem)] text-ink max-w-3xl">
            Почему выбирают <em className="italic text-stone">Asel</em>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((it, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <div className="group relative h-full bg-milk rounded-sm p-8 md:p-10 transition-all duration-500 hover:shadow-soft hover:-translate-y-1 border border-border/60">
                <it.Icon className="h-7 w-7 text-stone stroke-[1] transition-colors group-hover:text-ink" />
                <h3 className="mt-8 text-2xl font-serif text-ink leading-tight">
                  {it.t}
                </h3>
                <p className="mt-3 text-ink/70 text-sm leading-relaxed">{it.d}</p>
                <span className="absolute top-8 right-8 text-xs text-stone/60 tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
