const fs = require("fs");
const files = [
  "app/[locale]/producten/[slug]/page.tsx",
  "app/[locale]/locaties/[stad]/page.tsx"
];
for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  content = content.replace("import { Link } from '@/i18n/routing';\nimport { Link } from '@/i18n/routing';", "import { Link } from '@/i18n/routing';");
  fs.writeFileSync(file, content);
}
