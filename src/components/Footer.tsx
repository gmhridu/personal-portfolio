"use client";

import { useLangContext } from "@/context/LangContext";

export default function Footer() {
  const { t } = useLangContext();

  return (
    <footer className="mb-6 px-4 text-center text-gray-500">
      <small className="mb-1 block text-xs">
        &copy; {new Date().getFullYear()} Golam Mahabub Redoy.{" "}
        {t("footer.text")}
      </small>
      <p className="text-xs ">
        <span className="font-semibold">{t("footer.subtitle")}</span>{" "}
        {t("footer.about")}
      </p>
    </footer>
  );
}
