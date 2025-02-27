"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import en from "@/locale/en";
import { useLangContext } from "@/context/LangContext";
import SectionHeading from "./SectionHeading";
import Certification from "./Certification";

type CertificationProps = (typeof en.certifications.data)[number];

export default function Certifications() {
  const { language, t } = useLangContext();
  const { ref } = useSectionInView(
    language === "en" ? "Certifications" : "Certificaciones",
    0.3
  );

  return (
    <section id="certifications" ref={ref} className="scroll-mt-28 mb-28">
      <SectionHeading>{t("certifications.title")}</SectionHeading>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        {t("certifications.data").map(
          (certification: CertificationProps, index: number) => (
            <React.Fragment key={index}>
              <Certification {...certification} />
            </React.Fragment>
          )
        )}
      </div>
    </section>
  );
}
