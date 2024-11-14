import { useTranslations } from "next-intl";
import React from "react";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { locales } from "@/config";

const LocaleSwitcher = () => {
  const t = useTranslations("LocaleSwitcher");

  return (
    <LocaleSwitcherSelect label={t("label")}>
      {locales?.map((curr) => (
        <option key={curr} value={curr}>
          {t("locale", { locale: curr })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
};

export default LocaleSwitcher;
