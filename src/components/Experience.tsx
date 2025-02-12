"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import en from "@/locale/en";
import SectionHeading from "./SectionHeading";
import { useLangContext } from "@/context/LangContext";
import TimelineElement from "./TimelineElement";

type experienceProps = (typeof en.experience.data)[number];

export default function Experience() {
  const { language, t } = useLangContext();
  const { ref } = useSectionInView(
    language === "en" ? "Experience" : "Experiencia",
    0.5
  );

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{t("experience.title")}</SectionHeading>
      <VerticalTimeline lineColor="">
        {t("experience.data").map((item: experienceProps, index: number) => {
          return <TimelineElement key={index} item={item} />;
        })}
      </VerticalTimeline>
    </section>
  );
}
