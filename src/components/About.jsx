"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function About() {

  // =========================
  // SECTION REF
  // =========================
  const sectionRef = useRef(null);

  // =========================
  // GSAP ANIMATION
  // =========================
  useEffect(() => {

    const ctx = gsap.context(() => {

      // LEFT TITLE ANIMATION
      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // RIGHT CONTENT ANIMATION
      gsap.from(".about-content > *", {
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (

    <section
      ref={sectionRef}
      id="about"
      className="mb-30 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden"
    >

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 items-start">

        {/* ========================= */}
        {/* LEFT SIDE TITLE */}
        {/* ========================= */}
        <div className="md:col-span-4 about-title relative md:sticky md:top-40">

          {/* SMALL LINE */}
          <div className="w-12 h-[1px] bg-sage-mid mb-6 md:mb-8"></div>

          {/* CHANGE TITLE HERE */}
          <h2 className="font-display text-[40px] sm:text-[48px] md:text-[64px] lg:text-[72px] text-sage-dark leading-[0.9] tracking-tighter mb-6 md:mb-8">
            About Me.
          </h2>

          {/* CHANGE SMALL TEXT HERE */}
          <p className="font-label-caps text-[10px] md:text-[11px] text-sage-mid tracking-[0.3em] uppercase">
            Narrative No. 01
          </p>

        </div>

        {/* ========================= */}
        {/* RIGHT SIDE CONTENT */}
        {/* ========================= */}
        <div className="md:col-span-8 space-y-20 md:space-y-32 about-content">

          {/* ========================= */}
          {/* INTRO TEXT */}
          {/* ========================= */}
          <div className="max-w-2xl md:ml-auto">

            {/* CHANGE INTRO TITLE HERE */}
            <p className="font-display text-[22px] sm:text-[26px] md:text-[32px] text-sage-dark leading-tight mb-8 md:mb-10">

              I’m Khadija Rahman Nupur — a passionate web developer who loves
              creating modern, clean and interactive digital experiences.

            </p>

            {/* CHANGE DESCRIPTION HERE */}
            <p className="font-body-lg text-sage-dark/70 leading-relaxed">

              I focus on building responsive and user-friendly web interfaces
              with strong attention to detail. My goal is to create websites
              that are visually elegant, smooth, fast and meaningful for users.

            </p>

          </div>

          {/* ========================= */}
          {/* CARDS */}
          {/* ========================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">

            {/* ========================= */}
            {/* CARD 1 */}
            {/* ========================= */}
            <motion.div
              whileHover={{ y: -8 }}
              className="border-t border-sage-dark/10 pt-8 md:pt-10 group"
            >

              {/* CHANGE ICON HERE */}
              <span className="material-symbols-outlined text-sage-mid mb-5 md:mb-6 text-3xl md:text-4xl group-hover:rotate-12 transition-transform">
                brush
              </span>

              {/* CHANGE CARD TITLE HERE */}
              <h4 className="font-display text-xl md:text-2xl text-sage-dark mb-3 md:mb-4">
                Design Thinking
              </h4>

              {/* CHANGE CARD DESCRIPTION HERE */}
              <p className="font-body-md text-sage-dark/60 leading-relaxed">

                I enjoy creating minimal and meaningful user interfaces with
                clean layouts, balanced spacing and smooth user experiences.

              </p>

            </motion.div>

            {/* ========================= */}
            {/* CARD 2 */}
            {/* ========================= */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-sage-dark text-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem]"
            >

              {/* CHANGE ICON HERE */}
              <span className="material-symbols-outlined text-sage-mid mb-5 md:mb-6 text-3xl md:text-4xl">
                code
              </span>

              {/* CHANGE CARD TITLE HERE */}
              <h4 className="font-display text-xl md:text-2xl mb-3 md:mb-4">
                Development Focus
              </h4>

              {/* CHANGE CARD DESCRIPTION HERE */}
              <p className="font-body-md opacity-70 leading-relaxed">

                I build modern frontend projects using React and Next.js with
                focus on performance, clean code structure and smooth
                animations.

              </p>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}