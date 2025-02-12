"use client";

import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import React from "react";
import { useInView } from "react-intersection-observer";

function Home() {
  const { ref, inView } = useInView({ threshold: 0.9 });

  return (
    <main className="flex flex-col items-center px-4 2xl:px-[5%]">
      <div
        ref={ref}
        className="flex flex-col items-center justify-between relative"
      >
        <Intro />
        <SectionDivider inView={inView} />
      </div>
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Experience />
      <Contact />
    </main>
  );
}

export default React.memo(Home);
