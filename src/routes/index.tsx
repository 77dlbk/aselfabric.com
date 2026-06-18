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
      { title: "Швейная фабрика в Бишкеке — пошив одежды оптом | Asel" },
      {
        name: "description",
        content:
          "Швейная фабрика Asel в Бишкеке. Оптовый пошив детской, подростковой и повседневной одежды. Разработка образцов, лекал, качественный пошив под ключ.",
      },
      {
        name: "keywords",
        content:
          "швейная фабрика бишкек, пошив одежды оптом бишкек, производство одежды кыргызстан, пошив одежды для маркетплейсов, пошив для wildberries, швейный цех бишкек, оптовый пошив одежды, трикотаж оптом кыргызстан, производство одежды под ключ",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Швейная фабрика в Бишкеке — пошив одежды оптом | Asel" },
      {
        property: "og:description",
        content: "Швейная фабрика Asel в Бишкеке. Оптовый пошив детской, подростковой и повседневной одежды. Разработка образцов, лекал, качественный пошив под ключ.",
      },
      { property: "og:url", content: "https://aselfabric.com/" },
      { property: "og:site_name", content: "Швейная фабрика Asel" },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:image", content: "https://aselfabric.com/assets/hero-factory.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Швейная фабрика в Бишкеке — пошив одежды оптом | Asel" },
      {
        name: "twitter:description",
        content: "Швейная фабрика Asel в Бишкеке. Оптовый пошив детской, подростковой и повседневной одежды. Разработка образцов, лекал, качественный пошив под ключ.",
      },
      { name: "twitter:image", content: "https://aselfabric.com/assets/hero-factory.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://aselfabric.com/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-milk text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ManufacturingBusiness",
            "name": "Швейная фабрика Asel",
            "image": "https://aselfabric.com/assets/hero-factory.jpg",
            "@id": "https://aselfabric.com/#organization",
            "url": "https://aselfabric.com",
            "telephone": "+996700000000",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ул. Шабдан Баатыра, 1К",
              "addressLocality": "Бишкек",
              "postalCode": "720000",
              "addressCountry": "KG"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 42.8746,
              "longitude": 74.5698
            },
            "description": "Швейная фабрика Asel в Бишкеке. Оптовый пошив детской, подростковой и повседневной одежды. Разработка образцов, лекал, качественный пошив под ключ.",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+996700000000",
              "contactType": "sales",
              "areaServed": "CIS",
              "availableLanguage": ["Russian"]
            }
          })
        }}
      />
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
