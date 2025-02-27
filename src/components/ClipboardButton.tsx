"use client";

import { clipboardEmail } from "@/constants";
import { useLangContext } from "@/context/LangContext";
import { useTheme } from "@/context/ThemeProvider";
import { useToast } from "@/hooks/use-toast";
import React from "react";
import { LuClipboardCopy } from "react-icons/lu";

export default function ClipboardButton() {
  const { t } = useLangContext();
  const { theme } = useTheme();
  const { toast } = useToast();

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(clipboardEmail);

    toast({
      title: "Copied!",
      description: t("contact.toastCopied"),
      duration: 2000,
      style: {
        borderRadius: "10px",
        backdropFilter: "blur(4px)",
        background:
          theme === "light"
            ? "rgba(240, 240, 240, 0.8)"
            : "rgba(50, 50, 50, 0.7)",
        color: theme === "light" ? "#000" : "#fff",
      },
    });
  };
  return (
    <button
      className="group flex items-center justify-center gap-2 h-[3rem] px-5 bg-white text-gray-700 rounded-full outline-none borderBlack transition focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 cursor-pointer dark:bg-white dark:bg-opacity-10 dark:text-white/60 dark:hover:text-white/90 dark:border-white/10 backdrop-blur-[0.3rem]"
      type="button"
      onClick={handleCopyToClipboard}
    >
      {t("contact.buttonCopy")}
      <LuClipboardCopy className="text-md opacity-70 transition-all group-hover:scale-[1.2]" />
    </button>
  );
}
