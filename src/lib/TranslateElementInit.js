"use client";
import { useEffect } from "react";

const TranslateElementInit = () => {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };
  }, []);
  return null;
};

export default TranslateElementInit;
