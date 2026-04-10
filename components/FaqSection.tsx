import { useTranslations } from 'next-intl';
import { HelpCircle } from 'lucide-react';

export default function FaqSection({ locale }: { locale: string }) {
  const isNl = locale === 'nl';
  const isEn = locale === 'en';

  const faqs = isNl ? [
    {
      q: "Hoeveel is mijn oud ijzer waard?",
      a: "De prijs van oud ijzer en andere metalen wisselt dagelijks. Wij baseren onze prijzen direct op de eerlijke, actuele LME beurskoersen zodat u altijd de beste prijs in Venlo krijgt."
    },
    {
      q: "Komen jullie oud ijzer gratis ophalen?",
      a: "Ja, vanaf bepaalde volumes (bijvoorbeeld grote partijen of zware machines) plaatsen wij gratis een container of komen we het metaalafval kosteloos en snel bij u afvoeren."
    },
    {
      q: "Welke metalen kopen jullie allemaal in?",
      a: "Rood koper, messing, lood, aluminium, zink, oude accu's en uiteraard massaal bouw- en sloopstaal."
    },
    {
      q: "Kan ik als particulier ook inleveren?",
      a: "Zeker, we kopen in bij particulieren en bedrijven. Voor kleine beetjes is het vaak makkelijker om het langs te brengen, maar bel voor de opties!"
    }
  ] : isEn ? [
    {
      q: "How much is my scrap iron worth?",
      a: "Prices change daily. We base our pricing strictly on current LME rates to guarantee the best fair prices in the region."
    },
    {
      q: "Do you offer free collection?",
      a: "Yes, for larger volumes we place containers entirely free of charge or bring our trucks to collect your heavy metal waste."
    },
    {
      q: "What metals do you buy?",
      a: "We purchase red copper, brass, lead, aluminum, zinc, old batteries, and heavy construction steel."
    },
    {
      q: "Can individuals drop off scrap?",
      a: "Absolutely, we buy from both private individuals and businesses. Drop by or call us to discuss the options."
    }
  ] : [
    {
      q: "Wie viel ist mein Alteisen wert?",
      a: "Die Preise schwanken täglich. Wir basieren unsere Ankaufspreise streng auf den aktuellen LME-Raten, um Ihnen den besten und fairsten Preis der Region zu garantieren."
    },
    {
      q: "Bieten Sie eine kostenlose Abholung an?",
      a: "Ja, ab bestimmten Mengen stellen wir kostenlos Container direkt bei Ihnen auf oder holen schwere Metallabfälle mit unseren Lkws direkt ab."
    },
    {
      q: "Welche Metalle kaufen Sie?",
      a: "Wir kaufen rotes Kupfer, Messing, Blei, Aluminium, Zink, Autobatterien sowie massiven Baustahl."
    },
    {
      q: "Können auch Privatpersonen anliefern?",
      a: "Natürlich, wir kaufen sowohl von Privatpersonen als auch von Unternehmen an. Kommen Sie einfach vorbei oder rufen Sie uns an."
    }
  ];

  const title = isNl ? "Veelgestelde Vragen" : (isEn ? "Frequently Asked Questions" : "Häufig Gestellte Fragen");

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section className="py-24 bg-white relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <HelpCircle className="w-16 h-16 text-rjmk-blue mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-rjmk-dark mb-6 uppercase tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-slate-600">
            {isNl ? "Duidelijke antwoorden voor uw metaalafval." : (isEn ? "Clear answers for your metal recycling needs." : "Klare Antworten für Ihre Metallentsorgung.")}
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-rjmk-blue/30 transition-colors">
              <h3 className="text-xl font-bold font-display text-rjmk-dark mb-3 leading-tight">{faq.q}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
