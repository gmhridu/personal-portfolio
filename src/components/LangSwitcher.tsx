"use client";

import { useLangContext } from "@/context/LangContext";
import React from "react";
import { MdOutlineLanguage } from "react-icons/md";

export default function LanguageSwitch() {
  const { changeLanguage, t } = useLangContext();

  return (
    <button
      className="fixed right-20 bottom-5 sm:left-5 text-xl bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition dark:bg-gray-950 2xl:w-[4rem] 2xl:h-[4rem] 2xl:text-2xl"
      title={t("buttons.language")}
      onClick={() => {
        changeLanguage("en");
      }}
    >
      <MdOutlineLanguage className="dark:text-white" />
    </button>
  );
}
