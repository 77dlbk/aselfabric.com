const items = [
  "Полный цикл производства",
  "До 10 000 изделий в месяц",
  "Образец за 5–7 дней",
  "Производство под ключ",
  "Контроль качества",
  "Опытная команда",
];

export function Marquee() {
  const all = [...items, ...items];
  return (
    <div className="border-y border-border bg-milk overflow-hidden py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {all.map((t, i) => (
          <span key={i} className="flex items-center gap-12 px-6 text-2xl md:text-3xl font-serif italic text-ink/70">
            {t}
            <span className="text-stone">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
