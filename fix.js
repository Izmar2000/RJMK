const fs = require("fs");
const files = [
  "app/[locale]/producten/[slug]/page.tsx",
  "app/[locale]/locaties/[stad]/page.tsx"
];
for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  content = content.replace("import { notFound } from '@/i18n/routing';", "import { notFound } from 'next/navigation';\nimport { Link } from '@/i18n/routing';");
  fs.writeFileSync(file, content);
}
