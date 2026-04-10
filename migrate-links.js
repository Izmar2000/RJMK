const fs = require('fs');
const path = require('path');

const walk = (dir, done) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach((file) => {
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          walk(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

walk('/Users/hadad/Documents/AntiGravity/Websites/klanten_websites/RJMK/rjmk-next/app', (err, files) => {
  if (err) throw err;
  files.forEach(f => processFile(f));
});

walk('/Users/hadad/Documents/AntiGravity/Websites/klanten_websites/RJMK/rjmk-next/components', (err, files) => {
  if (err) throw err;
  files.forEach(f => processFile(f));
});

function processFile(file) {
  if (!file.endsWith('.tsx') && !file.endsWith('.ts')) return;
  
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Replace next/link with our custom i18n link
  if (content.includes("import Link from 'next/link';")) {
    content = content.replace("import Link from 'next/link';", "import { Link } from '@/i18n/routing';");
    changed = true;
  } else if (content.includes('import Link from "next/link";')) {
    content = content.replace('import Link from "next/link";', "import { Link } from '@/i18n/routing';");
    changed = true;
  }

  // We should also replace next/navigation hooks
  if (content.includes("from 'next/navigation'")) {
    content = content.replace(/import\s+\{(.*?)\}\s+from\s+'next\/navigation'/g, (match, p1) => {
      return `import {${p1}} from '@/i18n/routing'`;
    });
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
}
