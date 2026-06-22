import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 700));
    toast.success("Заявка отправлена. Мы свяжемся с вами в течение рабочего дня.");
    (e.target as HTMLFormElement).reset();
    setSending(false);
  };

  return (
    <section id="contact" className="py-28 md:py-40 bg-ink text-milk">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="text-eyebrow text-milk/60">◦ 07 — Контакты</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-display text-[clamp(2.25rem,5vw,4.5rem)] text-milk">
              Рассчитаем стоимость <em className="italic text-sand">вашего заказа</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-milk/70 max-w-md">
              Оставьте заявку — менеджер свяжется с вами в течение рабочего дня и
              подготовит индивидуальный расчёт.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 space-y-6">
              <div className="flex gap-4 items-start">
                <MapPin className="h-5 w-5 text-sand stroke-[1] mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-milk/50 tracking-wider uppercase mb-1">Адрес</div>
                  <div>Кыргызстан, г. Бишкек, ул. Шабдан Баатыра, 1К</div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Phone className="h-5 w-5 text-sand stroke-[1] mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-milk/50 tracking-wider uppercase mb-1">Телефон / WhatsApp</div>
                  <a href="tel:+996707604874" className="link-underline">+996 707 604 874</a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Mail className="h-5 w-5 text-sand stroke-[1] mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-milk/50 tracking-wider uppercase mb-1">Email</div>
                  <a href="mailto:asel@aselfabric.com" className="link-underline">asel@aselfabric.com</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="lg:col-span-7">
          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            <Field label="Имя" name="name" required />
            <Field label="Телефон / WhatsApp" name="phone" type="tel" required />
            <Field label="Количество изделий" name="qty" type="number" />
            <Field label="Тип изделия" name="type" placeholder="Платья, блузы, верхняя одежда…" />
            <div className="md:col-span-2">
              <Field label="Описание заказа" name="desc" textarea />
            </div>
            <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4">
              <p className="text-xs text-milk/50 max-w-sm">
                Отправляя форму, вы соглашаетесь с обработкой персональных данных.
              </p>
              <button
                type="submit"
                disabled={sending}
                className="group inline-flex items-center gap-3 rounded-full bg-milk text-ink px-7 py-4 text-sm tracking-wide transition-all hover:bg-sand disabled:opacity-50"
              >
                {sending ? "Отправляем…" : "Получить расчет"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  textarea?: boolean;
}) {
  const cls =
    "peer w-full bg-transparent border-b border-milk/25 pt-6 pb-2 text-milk placeholder-transparent focus:outline-none focus:border-sand transition-colors";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea
          name={name}
          rows={3}
          placeholder={placeholder || label}
          required={required}
          className={cls + " resize-none"}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder || label}
          required={required}
          className={cls}
        />
      )}
      <span className="absolute left-0 top-1 text-xs text-milk/50 tracking-wider uppercase pointer-events-none">
        {label}
      </span>
    </label>
  );
}
