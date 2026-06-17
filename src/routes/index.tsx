import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Counters } from "@/components/site/Counters";
import { Process } from "@/components/site/Process";
import { Advantages } from "@/components/site/Advantages";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Preloader } from "@/components/site/Preloader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asel — Швейная фабрика в Бишкеке | Производство одежды крупными партиями" },
      {
        name: "description",
        content:
          "Asel — швейная фабрика полного цикла в Кыргызстане. Производство одежды до 10 000 изделий в месяц. От разработки образца до отгрузки готовой партии.",
      },
      { property: "og:title", content: "Asel — Швейная фабрика в Бишкеке" },
      {
        property: "og:description",
        content: "Крупносерийное производство одежды в Кыргызстане. Полный цикл от образца до партии.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-milk text-ink">
      <Preloader />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Products />
        <Counters />
        <Process />
        <Advantages />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
