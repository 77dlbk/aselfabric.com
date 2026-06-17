import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-factory.jpg";
import { ArrowRight, ArrowDown } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Швейная фабрика Asel — производственный цех"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/70" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 container-x h-full flex flex-col justify-end pb-20 md:pb-28">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-eyebrow text-milk/80 mb-6"
        >
          ◦ Кыргызстан · Бишкек · с 2014
        </motion.span>

        <h1 className="text-display text-milk text-[clamp(2.75rem,9vw,8rem)] max-w-[14ch]">
          <SplitWord text="Швейная" delay={0.2} />
          <br />
          <SplitWord text="фабрика" delay={0.4} />{" "}
          <em className="italic font-light text-sand"><SplitWord text="Asel" delay={0.6} /></em>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="mt-8 max-w-xl text-base md:text-lg text-milk/85 leading-relaxed"
        >
          Крупносерийное производство одежды в Кыргызстане. От разработки образца
          до готовой партии.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-milk text-ink px-7 py-4 text-sm tracking-wide transition-all hover:bg-sand"
          >
            Получить расчет стоимости
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full border border-milk/40 text-milk px-7 py-4 text-sm tracking-wide transition-all hover:bg-milk/10"
          >
            Связаться с нами
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 right-6 md:right-12 z-10 flex items-center gap-3 text-milk/70 text-xs tracking-[0.2em] uppercase"
      >
        Scroll <ArrowDown className="h-3 w-3 animate-bounce" />
      </motion.div>
    </section>
  );
}

function SplitWord({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </span>
  );
}
