import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Заявка", d: "Вы отправляете запрос с описанием модели, ткани и объёма." },
  { n: "02", t: "Консультация", d: "Технолог уточняет детали и подбирает оптимальные материалы." },
  { n: "03", t: "Расчет стоимости", d: "Прозрачная смета: ткань, фурнитура, пошив, упаковка." },
  { n: "04", t: "Разработка образца", d: "Готовый образец за 5–7 рабочих дней с правом доработки." },
  { n: "05", t: "Запуск производства", d: "Полный цикл на собственных мощностях фабрики." },
  { n: "06", t: "Контроль и отгрузка", d: "Многоступенчатый ОТК, упаковка и отгрузка партии." },
];

export function Process() {
  return (
    <section id="process" className="py-28 md:py-40 bg-milk">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 mb-16 md:mb-24">
          <Reveal className="lg:col-span-5">
            <span className="text-eyebrow">◦ 04 — Этапы работы</span>
            <h2 className="mt-6 text-display text-[clamp(2.5rem,6vw,5rem)] text-ink">
              От заявки до <em className="italic text-stone">отгрузки</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-ink/70">
              Каждый этап ведёт персональный менеджер. Вы видите движение заказа
              в режиме реального времени и согласовываете контрольные точки.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-border">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.04}>
              <div className="group grid grid-cols-12 gap-4 md:gap-8 items-baseline border-b border-border py-8 md:py-12 transition-colors hover:bg-beige/40 cursor-default px-2 -mx-2">
                <div className="col-span-2 md:col-span-1 text-stone font-serif text-xl md:text-2xl">
                  {s.n}
                </div>
                <div className="col-span-10 md:col-span-4 text-2xl md:text-4xl font-serif text-ink transition-transform duration-500 group-hover:translate-x-2">
                  {s.t}
                </div>
                <div className="col-span-12 md:col-span-7 text-ink/70 md:text-right">
                  {s.d}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
