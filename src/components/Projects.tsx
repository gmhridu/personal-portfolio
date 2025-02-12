"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import en from "@/locale/en";
import { useLangContext } from "@/context/LangContext";
import SectionHeading from "./SectionHeading";
import Project from "./Project";

type ProjectProps = (typeof en.projects.data)[number];

export default function Projects() {
  const { language, t } = useLangContext();
  const { ref } = useSectionInView(
    language === "en" ? "Projects" : "Proyectos",
    0.3
  );

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{t("projects.title")}</SectionHeading>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        {t("projects.data").map((project: ProjectProps, index: number) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
