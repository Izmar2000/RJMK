const fs = require("fs");
const file = "app/[locale]/producten/[slug]/page.tsx";
let content = fs.readFileSync(file, "utf8");
content = content.replace(/material\.nl/g, "material[locale as \"nl\"|\"en\"|\"de\"]");
content = content.replace("export default function ProductDetailPage() {", "export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {\n  const { slug, locale } = await params;");
content = content.replace("const params = useParams();", "");
content = content.replace("const slug = params.slug as string;", "");
fs.writeFileSync(file, content);
