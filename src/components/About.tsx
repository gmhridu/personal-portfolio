"use client";

import { useLangContext } from "@/context/LangContext";
import { useTheme } from "@/context/ThemeProvider";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import en from "@/locale/en";

type skillsProps = (typeof en.about.data)[number];

export default function About() {
  const { language, t } = useLangContext();
  const { theme } = useTheme();
  const { ref } = useSectionInView(language === "en" ? "About" : "Perfil", 0.5);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175, duration: 1 }}
      className="my-24 sm:mt-0 sm:mb-40 max-w-[36rem] sm:max-w-[50rem] xl:max-w-[56rem] text-center scroll-mt-28 xl:text-xl"
      id="about"
    >
      <SectionHeading>{t("about.title")}</SectionHeading>
      <p className="mb-10 leading-9 dark:text-white sm:leading-[46px]">{t("about.first")}</p>

      <div className="flex flex-wrap items-center justify-center gap-7 mb-10">
        {t("about.data").map((item: skillsProps, index: number) => (
          <li className="flex gap-2 items-center" key={index}>
            <span
              style={{
                color:
                  theme === "light"
                    ? item.color
                    : item.color === "#000000"
                      ? "#ffffff"
                      : item.color,
              }}
              className="text-[40px]"
            >
              {item.icon}
            </span>
          </li>
        ))}
      </div>

      <p className="block leading-9 dark:text-white sm:leading-[46px]">{t("about.second")}</p>
    </motion.section>
  );
}
