import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Calendar, ArrowLeft } from 'lucide-react';
import { nieuwsArtikelen } from '@/lib/nieuwsData';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const t = await getTranslations({ locale: p.locale, namespace: 'NieuwsArticles' });
  
  // Find article
  const article = nieuwsArtikelen.find((a) => a.slug === p.slug);
  if (!article) return { title: 'Not Found' };

  return {
    title: `${t(`${p.slug}.title`)} | RJMK Nieuws`,
    description: t(`${p.slug}.summary`),
  };
}

export function generateStaticParams() {
  const locales = ['nl', 'en', 'de'];
  const params: { locale: string; slug: string }[] = [];
  
  for (const locale of locales) {
    for (const article of nieuwsArtikelen) {
      params.push({ locale, slug: article.slug });
    }
  }
  return params;
}

export default async function NieuwsArticlePage({ params }: Props) {
  const p = await params;
  const article = nieuwsArtikelen.find((a) => a.slug === p.slug);
  
  if (!article) {
    notFound();
  }

  const t = await getTranslations({ locale: p.locale, namespace: 'NieuwsArticles' });
  const ui = await getTranslations({ locale: p.locale, namespace: 'NieuwsUI' });

  const title = t(`${article.slug}.title`);
  const category = t(`${article.slug}.category`);
  const content = t(`${article.slug}.content`);
  const paragraphs = typeof content === 'string' ? content.split('\n\n') : [];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Article Hero */}
      <section className="relative pt-44 pb-32 bg-rjmk-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={article.image}
            alt={title}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-rjmk-dark/80 via-rjmk-dark/60 to-slate-50"></div>
          <div className="grain-overlay opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/nieuws" className="inline-flex items-center text-blue-300 hover:text-white transition-colors mb-8 font-bold uppercase tracking-widest text-sm group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              {ui('backToNews')}
            </Link>

            <div className="flex items-center space-x-4 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-rjmk-blue text-white text-xs font-bold uppercase tracking-widest">
                {category}
              </span>
              <span className="flex items-center text-sm text-blue-200 font-medium">
                <Calendar className="w-4 h-4 mr-2" />
                {article.date}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-tight">
              {title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative z-20 -mt-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-slate-200">
            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-rjmk-dark prose-p:leading-relaxed prose-a:text-rjmk-blue hover:prose-a:text-rjmk-accent">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-slate-100">
              <h3 className="text-2xl font-display font-bold text-rjmk-dark mb-6 uppercase">
                Uw metaalafval lokaal recyclen?
              </h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Neem Contact Op
                </Link>
                <Link href="/dagprijzen" className="btn-outline">
                  Bekijk Dagprijzen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
