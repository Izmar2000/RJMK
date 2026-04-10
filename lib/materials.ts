export interface MaterialTranslation {
  name: string;
  title: string;
  metaDescription: string;
  shortDesc: string;
  description: string;
  recyclingProcess: string;
  whyRJMK: string;
  properties: string[];
}

export interface Material {
  id: string;
  slug: string;
  image: string;
  nl: MaterialTranslation;
  en: MaterialTranslation;
  de: MaterialTranslation;
}

export const materials: Material[] = [
  {
    id: 'rood-koper',
    slug: 'rood-koper',
    image: '/materials/copper.png',
    nl: {
      name: 'Rood Koper',
      title: 'Rood Koper Inkoop Venlo | Eerlijke Dagprijzen & Snelle Afhandeling',
      metaDescription: 'Bent u op zoek naar een betrouwbaar adres voor rood koper inkoop in Venlo? RJMK biedt transparante markttrends en een vakkundige afhandeling.',
      shortDesc: 'Zuiver rood koper van leidingen, platen of draad. Een van de meest waardevolle metaalsoorten voor recycling.',
      description: 'Rood koper is essentieel voor elektronica en infrastructuur. Bij RJMK in Venlo zijn we gespecialiseerd in het vakkundig sorteren en verwerken van diverse koperstromen. Of het nu gaat om nieuwe afsnijdsels of oude leidingen; wij zorgen voor een transparant inkoopproces op basis van LME markttrends.',
      recyclingProcess: 'Het koper wordt gesorteerd op zuiverheid, ontdaan van verontreinigingen en omgesmolten tot nieuwe halffabricaten. Dit bespaart veel energie ten opzichte van primaire winning.',
      whyRJMK: 'Met jarenlange ervaring in Venlo staat RJMK voor eerlijkheid. Wij wegen op gekalibreerde weegschalen en hanteren een snelle financiële afwikkeling.',
      properties: ['Hoogwaardig metaal', 'Uitstekende geleiding', '100% recyclebaar', 'Hoge marktwaarde']
    },
    en: {
      name: 'Bright Wire / Copper',
      title: 'Copper Recycling Venlo | Fair Market Trends & Fast Handling',
      metaDescription: 'Looking for a reliable copper buyer in Venlo? RJMK offers transparent market trends and professional handling for all your copper scrap.',
      shortDesc: 'Pure red copper from pipes, sheets, or wire. One of the most valuable metal types for recycling.',
      description: 'Red copper is essential for electronics and infrastructure. At RJMK in Venlo, we specialize in the professional sorting and processing of various copper streams. Whether it\'s industrial residues or old piping; we ensure a transparent purchasing process based on LME market trends.',
      recyclingProcess: 'The copper is sorted by purity, stripped of contaminants, and melted into new semi-finished products. This saves significant energy compared to primary smelting.',
      whyRJMK: 'With years of experience in Venlo, RJMK stands for honesty. We weigh on calibrated scales and handle financial settlements quickly.',
      properties: ['High-value metal', 'Excellent conductivity', '100% recyclable', 'High market value']
    },
    de: {
      name: 'Kupfer (Millberry)',
      title: 'Kupfer Ankauf Venlo | Faire Marktpreise & Schnelle Abwicklung',
      metaDescription: 'Suchen Sie einen zuverlässigen Partner für den Kupferankauf in Venlo? RJMK bietet transparente Marktpreise und professionelles Recycling.',
      shortDesc: 'Reines Kupfer aus Kabeln, Blechen oder Rohren. Eines der wertvollsten Metalle im Recycling.',
      description: 'Kupfer ist für Elektronik und Infrastruktur unverzichtbar. Bei RJMK in Venlo sind wir auf die fachgerechte Sortierung und Verarbeitung verschiedener Kupferströme spezialisiert. Wir gewährleisten transparente Ankaufspreise basierend auf LME-Markttrends.',
      recyclingProcess: 'Das Kupfer wird nach Reinheit sortiert, von Verunreinigungen befreit und zu neuen Halbfabrikaten geschmolzen. Dies spart im Vergleich zur Primärgewinnung viel Energie.',
      whyRJMK: 'Mit jahrelanger Erfahrung in Venlo steht RJMK für Ehrlichkeit. Wir wiegen auf geeichten Waagen und sorgen für eine schnelle finanzielle Abwicklung.',
      properties: ['Hochwertiges Metall', 'Hervorragende Leitfähigkeit', '100% recycelbar', 'Hoher Marktwert']
    }
  },
  {
    id: 'messing',
    slug: 'messing',
    image: '/materials/copper.png',
    nl: {
      name: 'Messing',
      title: 'Messing Inleveren Venlo | Transparante Inkoop & Goede Reputatie',
      metaDescription: 'Messing inleveren bij RJMK Venlo? Wij kopen alle soorten messing in, van kranen tot industriële restanten.',
      shortDesc: 'Een legering van koper en zink, herkenbaar aan de goudachtige kleur. Veelgevonden in kranen en koppelingen.',
      description: 'Messing, vaak geel koper genoemd, is een legering die veelvuldig wordt toegepast in sanitair en machinebouw. RJMK koopt alle varianten messing in, waarbij we focussen op transparantie en eerlijke weging op basis van beurstrends.',
      recyclingProcess: 'Het messing wordt ontdaan van vreemde aanhechtingen en gesmolten in gespecialiseerde ovens om weer nieuwe hoogwaardige legeringen te vormen.',
      whyRJMK: 'Onze reputatie in Venlo is gebouwd op jarenlang betrouwbaar partnerschap. Wij bieden nuchtere service en snelle afhandeling.',
      properties: ['Duurzame legering', 'Corrosiebestendig', 'Veelzijdig', 'Goudachtige kleur']
    },
    en: {
      name: 'Brass',
      title: 'Brass Recycling Venlo | Transparent Buying & Solid Reputation',
      metaDescription: 'Recycling brass at RJMK Venlo? We buy all types of brass, from faucets to industrial residues.',
      shortDesc: 'An alloy of copper and zinc, recognizable by its gold-like color. Commonly found in faucets and decorative parts.',
      description: 'Brass, often called yellow copper, is an alloy widely used in plumbing and machine building. RJMK buys all variants of brass, focusing on transparency and fair weighing based on market trends.',
      recyclingProcess: 'The brass is stripped of foreign attachments and melted in specialized furnaces to form new high-quality alloys.',
      whyRJMK: 'Our reputation in Venlo is built on years of reliable partnership. We provide down-to-earth service and fast handling.',
      properties: ['Durable alloy', 'Corrosion resistant', 'Versatile', 'Gold-like color']
    },
    de: {
      name: 'Messing',
      title: 'Messing Ankauf Venlo | Transparenz & Guter Ruf',
      metaDescription: 'Messing recyceln bei RJMK Venlo? Wir kaufen alle Arten von Messing, von Wasserhähnen bis hin zu Industrieresten.',
      shortDesc: 'Eine Legierung aus Kupfer und Zink, erkennbar an der goldähnlichen Farbe.',
      description: 'Messing ist eine Legierung, die häufig in der Sanitär- und Maschinenbaubranche verwendet wird. RJMK kauft alle Varianten von Messing und fokussiert sich auf transparente, ehrliche Markttrends.',
      recyclingProcess: 'Das Messing wird von Fremdanhaftungen befreit und in speziellen Öfen geschmolzen, um neue hochwertige Legierungen zu bilden.',
      whyRJMK: 'Unser Ruf in Venlo basiert auf jahrelanger verlässlicher Partnerschaft. Wir bieten schnellen und pragmatischen Service.',
      properties: ['Langlebige Legierung', 'Korrosionsbeständig', 'Vielseitig', 'Goldähnliche Farbe']
    }
  },
  {
    id: 'aluminium',
    slug: 'aluminium',
    image: '/materials/aluminum.png',
    nl: {
      name: 'Aluminium',
      title: 'Aluminium Recycling Venlo | Professionele Inkoop & Markttrends',
      metaDescription: 'Aluminium inkoop in Venlo voor profielen, platen en velgen. RJMK biedt vakkundige recycling en transparante markttrends.',
      shortDesc: 'Lichtgewicht en sterk. Van profielen en platen tot velgen en gietaluminium uit diverse sectoren.',
      description: 'Aluminium is cruciaal voor een circulaire economie. Bij RJMK verwerken we een breed scala aan aluminiumstromen uit de gevelbouw en industrie. We focussen op markttrends om u de beste voorwaarden te bieden.',
      recyclingProcess: 'Aluminium wordt gescheiden op kwaliteit, gereinigd en gesmolten. Dit kost slechts 5% van de energie die nodig is voor primaire winning.',
      whyRJMK: 'In de regio Venlo hebben we een zeer goede naam opgebouwd door altijd onze afspraken na te komen en transparant te communiceren.',
      properties: ['Lichtgewicht', 'Roest niet', 'Oneindig recyclebaar', 'Energiebesparend']
    },
    en: {
      name: 'Aluminium',
      title: 'Aluminium Recycling Venlo | Professional Buying & Market Trends',
      metaDescription: 'Aluminium buying in Venlo for profiles, sheets, and rims. RJMK offers professional recycling and transparent market trends.',
      shortDesc: 'Lightweight and strong. From profiles and sheets to rims and cast aluminum from various sectors.',
      description: 'Aluminium is crucial for a circular economy. At RJMK, we process a wide range of aluminium streams from construction and industry. We focus on market trends to offer you the best conditions.',
      recyclingProcess: 'Aluminium is separated by quality, cleaned, and melted. This requires only 5% of the energy needed for primary extraction.',
      whyRJMK: 'In the Venlo region, we have built an excellent reputation by always following through on our agreements and communicating transparently.',
      properties: ['Lightweight', 'Non-rusting', 'Infinitely recyclable', 'Energy saving']
    },
    de: {
      name: 'Aluminium',
      title: 'Aluminium Recycling Venlo | Professioneller Ankauf',
      metaDescription: 'Aluminiumankauf in Venlo für Profile, Bleche und Felgen. RJMK bietet professionelles Recycling.',
      shortDesc: 'Leicht und stark. Von Profilen und Blechen bis hin zu Felgen und Gussaluminium.',
      description: 'Aluminium ist für eine zirkuläre Wirtschaft entscheidend. Bei RJMK verarbeiten wir ein breites Spektrum an Aluminiumströmen aus Industrie und Handwerk.',
      recyclingProcess: 'Aluminium wird nach Qualität getrennt, gereinigt und geschmolzen. Dies erfordert nur 5% der Energie der Primärgewinnung.',
      whyRJMK: 'In der Region Venlo haben wir uns einen hervorragenden Ruf aufgebaut, indem wir stets unsere Vereinbarungen einhalten.',
      properties: ['Leichtgewicht', 'Rostet nicht', 'Unendlich recycelbar', 'Energiesparend']
    }
  },
  {
    id: 'kabels',
    slug: 'kabels',
    image: '/materials/cables.png',
    nl: {
      name: 'Kabels & Snoeren',
      title: 'Kabelrecycling Venlo | Koper- & Aluminiumkabels | RJMK',
      metaDescription: 'Uw oude kabels inleveren? RJMK beschikt over een eigen kabelshredder voor efficiënte recycling in Venlo.',
      shortDesc: 'Koper- en aluminiumkabels met of zonder isolatie. Van grondkabels tot huishoudsnoeren.',
      description: 'RJMK beschikt in Venlo over een eigen kabelshredder-installatie. Wij verwerken PVC-kabels, grondkabels en loodkabels tot puur koper- of aluminiumgranulaat op een milieuvriendelijke wijze.',
      recyclingProcess: 'In onze kabelshredder worden kabels mechanisch gescheiden in zware koperkorrels en licht kunststof. Het granulaat dient direct weer als grondstof.',
      whyRJMK: 'Door verwerking in eigen beheer bieden we maximale transparantie over de koperopbrengst en een snelle service.',
      properties: ['Eigen shredder', 'Efficiënte scheiding', 'Hoogwaardige opbrengst', 'Milieuvriendelijk']
    },
    en: {
      name: 'Cables & Wires',
      title: 'Cable Recycling Venlo | Copper & Aluminium Cables | RJMK',
      metaDescription: 'Recycling old cables? RJMK has its own cable shredder for efficient recycling in Venlo.',
      shortDesc: 'Copper and aluminium cables with or without insulation. From underground cables to household cords.',
      description: 'RJMK operates its own cable shredding plant in Venlo. We process PVC cables, underground cables, and lead cables into pure copper or aluminium granulate in an environmentally friendly way.',
      recyclingProcess: 'In our cable shredder, cables are mechanically separated into heavy copper granules and light plastic. The granulate serves directly as a new raw material.',
      whyRJMK: 'By processing in-house, we offer maximum transparency regarding copper yield and fast service.',
      properties: ['In-house shredder', 'Efficient separation', 'High-quality yield', 'Eco-friendly']
    },
    de: {
      name: 'Kabel & Leitungen',
      title: 'Kabelrecycling Venlo | Kupfer- & Aluminiumkabel | RJMK',
      metaDescription: 'Alte Kabel recyceln? RJMK verfügt über einen eigenen Kabelshredder in Venlo.',
      shortDesc: 'Kupfer- und Aluminiumkabel mit oder ohne Isolierung. Von Erdkabeln bis hin zu Haushaltskabeln.',
      description: 'RJMK betreibt in Venlo eine eigene Kabelshredder-Anlage. Wir verarbeiten PVC-Kabel und Bleikabel umweltfreundlich zu reinem Granulat.',
      recyclingProcess: 'In unserem Shredder werden Kabel mechanisch in schweres Kupfergranulat und leichtes Kunststoff granuliert.',
      whyRJMK: 'Durch die eigene Verarbeitung bieten wir maximale Transparenz über den Kupferertrag und schnellen Service.',
      properties: ['Eigener Shredder', 'Effiziente Trennung', 'Hochwertiger Ertrag', 'Umweltfreundlich']
    }
  },
  {
    id: 'oud-ijzer',
    slug: 'oud-ijzer',
    image: '/materials/iron.png',
    nl: {
      name: 'Oud IJzer',
      title: 'Oud IJzer Ophalen & Inkoop Venlo | Betrouwbaar & Transparant',
      metaDescription: 'Oud ijzer inleveren in Venlo? RJMK is uw partner voor ophalen en inkoop van alle soorten ijzer en schroot.',
      shortDesc: 'Van constructiestaal en balkijzer tot gemengd schroot en witgoed. Dé basis voor metaalrecycling.',
      description: 'RJMK in Venlo verwerkt alle soorten ijzerstromen. Wij bieden complete ontzorging via onze ophaalservice en focussen op langdurige relaties met transparante markttrends als basis.',
      recyclingProcess: 'IJzer wordt gesorteerd en geshredderd of geknipt voor de staalfabriek, waar het weer wordt omgesmolten tot nieuw staal.',
      whyRJMK: 'We doen wat we beloven met een nuchtere Venlose aanpak. Onze transparantie in weging en trends maakt ons een gewaardeerde partner.',
      properties: ['Basisgrondstof', 'Ophaalservice', 'Zakelijk & Particulier', 'Directe afvoer']
    },
    en: {
      name: 'Iron & Scrap',
      title: 'Iron Scrap Collection Venlo | Reliable & Transparent',
      metaDescription: 'Recycling iron scrap in Venlo? RJMK is your partner for collection and purchase of all types of iron and scrap.',
      shortDesc: 'From construction steel and beams to mixed scrap and appliances. The foundation of metal recycling.',
      description: 'RJMK in Venlo processes all types of iron streams. We offer full peace of mind through our collection service and focus on long-term relationships backed by transparent market trends.',
      recyclingProcess: 'Iron is sorted and shredded or sheared for the steel mill, where it is melted down again into new steel.',
      whyRJMK: 'We deliver on our promises with a down-to-earth Venlo approach. Our transparency in weighing and trends makes us a valued partner.',
      properties: ['Basic raw material', 'Collection service', 'Business & Private', 'Fast removal']
    },
    de: {
      name: 'Altmetall & Schrott',
      title: 'Schrottabholung Venlo | Zuverlässig & Transparent',
      metaDescription: 'Altmetall in Venlo abgeben? RJMK ist Ihr Partner für Abholung und Ankauf von Schrott.',
      shortDesc: 'Von Baustahl über Träger bis hin zu Mischschrott. Die Grundlage des Metallrecyclings.',
      description: 'RJMK in Venlo verarbeitet alle Arten von Eisenströmen. Wir bieten kompetente Lösungen durch unseren Abholservice und setzen auf langfristige Partnerschaften.',
      recyclingProcess: 'Schrott wird sortiert und für das Stahlwerk geshreddert oder geschnitten, wo es zu neuem Stahl eingeschmolzen wird.',
      whyRJMK: 'Wir halten unsere Versprechen mit einer pragmatischen Herangehensweise. Unsere Transparenz macht uns zu einem geschätzten Partner.',
      properties: ['Grundrohstoff', 'Abholservice', 'Gewerblich & Privat', 'Schnelle Abfuhr']
    }
  },
  {
    id: 'accus',
    slug: 'accus',
    image: '/materials/batteries.png',
    nl: {
      name: "Accu's & Lood",
      title: "Accu's Inleveren Venlo | Verantwoorde Verwerking | RJMK",
      metaDescription: "Oude accu's inleveren? RJMK zorgt voor een veilige en verantwoorde inname van loodaccu's in Venlo.",
      shortDesc: "Loodzuuraccu's uit voertuigen en machines. Gevaarlijk afval dat vakkundig gerecycled moet worden.",
      description: "Recycling van accu's is cruciaal voor het milieu. RJMK is uw gecertificeerde partner in Venlo voor veilige inname en afvoer van loodaccu's.",
      recyclingProcess: "Accu's worden mechanisch gescheiden in lood, kunststof en zuur. Het lood wordt geraffineerd voor nieuwe accuproductie.",
      whyRJMK: "Door onze transparante werkwijze weten bedrijven ons al jarenlang te vinden voor verantwoorde accu-recycling.",
      properties: ['Milieubewust', 'Veilige afvoer', 'Loodrecycling expert', 'Korte lijnen']
    },
    en: {
      name: 'Batteries & Lead',
      title: 'Battery Recycling Venlo | Responsible Processing | RJMK',
      metaDescription: 'Recycling old batteries? RJMK ensures safe and responsible intake of lead-acid batteries in Venlo.',
      shortDesc: 'Lead-acid batteries from vehicles and machines. Hazardous waste that must be professionally recycled.',
      description: 'Battery recycling is crucial for the environment. RJMK is your certified partner in Venlo for safe intake and disposal of lead-acid batteries.',
      recyclingProcess: 'Batteries are mechanically separated into lead, plastic, and acid. The lead is refined for new battery production.',
      whyRJMK: 'Due to our transparent work method, companies have been coming to us for years for responsible battery recycling.',
      properties: ['Eco-conscious', 'Safe disposal', 'Lead recycling expert', 'Short communication lines']
    },
    de: {
      name: 'Batterien & Blei',
      title: 'Batterierecycling Venlo | Verantwortungsvolle Verarbeitung | RJMK',
      metaDescription: 'Alte Batterien abgeben? RJMK sorgt in Venlo für eine sichere Annahme von Bleiakkus.',
      shortDesc: 'Bleiakkus aus Fahrzeugen und Maschinen. Gefährlicher Abfall, der professionell recycelt werden muss.',
      description: 'Batterierecycling ist für die Umwelt von entscheidender Bedeutung. RJMK ist Ihr zertifizierter Partner in Venlo für die sichere Annahme und Entsorgung.',
      recyclingProcess: 'Batterien werden mechanisch in Blei, Kunststoff und Säure getrennt. Das Blei wird für die neue Batterieproduktion raffiniert.',
      whyRJMK: 'Dank unserer transparenten Arbeitsweise wenden sich Unternehmen seit Jahren für verantwortungsvolles Recycling an uns.',
      properties: ['Umweltbewusst', 'Sichere Entsorgung', 'Bleirecycling-Experte', 'Kurze Kommunikationswege']
    }
  }
];

export function getMaterialBySlug(slug: string): Material | undefined {
  return materials.find(m => m.slug === slug);
}
