import { useTranslations } from "next-intl";
import React from "react";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { locales } from "@/config";
import { getLocaleFromCookie } from "@/lib/cookieUtls";

const LocaleSwitcher = () => {
  const t = useTranslations("LocaleSwitcher");
  const locale = getLocaleFromCookie() || "en";

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      {locales?.map((curr) => (
        <option key={curr} value={curr}>
          {t("locale", { locale: curr })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
};

export default LocaleSwitcher;
