"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { ChangeEvent } from "react";
import { Globe } from "lucide-react";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div className="flex items-center text-rjmk-dark">
      <Globe className="w-4 h-4 mr-1 text-rjmk-accent" />
      <select
        defaultValue={locale}
        onChange={onSelectChange}
        className="bg-transparent text-sm font-bold uppercase tracking-widest cursor-pointer outline-none hover:text-rjmk-accent transition-colors"
      >
        <option value="nl">NL</option>
        <option value="en">EN</option>
        <option value="de">DE</option>
      </select>
    </div>
  );
}
