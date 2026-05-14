"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".exp-item", {
        scrollTrigger: {
          trigger: ".exp-list",
          start: "top 80%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      });

      gsap.from(".edu-card", {
        scrollTrigger: {
          trigger: ".edu-list",
          start: "top 80%",
        },
        y: 40,
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
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-canvas relative overflow-hidden"
      id="experience"
    >

      {/* Background Text */}
      <div className="absolute top-0 right-0 p-20 opacity-5">
        <span className="font-display text-[200px] leading-none">
          CV
        </span>
      </div>

      <div className="max-w-container-max mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">

          {/* ========================================= */}
          {/* LEFT SIDE */}
          {/* ========================================= */}
          <div className="md:col-span-5">

            {/* Small Label */}
            <span className="font-label-caps text-[12px] tracking-[0.4em] text-sage-mid uppercase inline-block mb-4">
              The Timeline
            </span>

            {/* Heading */}
            <h2 className="font-display text-[64px] text-sage-dark leading-none tracking-tighter mb-16">
              Experience &amp;
              <br />
              Formation
            </h2>

            {/* LEFT SIDE CARDS */}
            <div className="edu-list space-y-12">

              {/* SSC */}
              <motion.div
                whileHover={{ x: 10 }}
                className="edu-card premium-card p-10 rounded-[2.5rem] relative overflow-hidden group"
              >

                <div className="absolute top-0 right-0 w-24 h-24 bg-sage-mid/5 -translate-y-1/2 translate-x-1/2 rounded-full transition-transform group-hover:scale-150 duration-700"></div>

                <span className="font-label-caps text-[11px] text-sage-mid mb-2 block">
                  2019 — 2020
                </span>

                <h4 className="font-display text-2xl text-sage-dark mb-1">
                  Kamalapur Sher-e-Bangla Railway High School
                </h4>

                <p className="font-body-md text-sage-dark/60">
                  Secondary School Certificate (SSC)
                </p>

              </motion.div>

              {/* HSC */}
              <motion.div
                whileHover={{ x: 10 }}
                className="edu-card border-thin border-sage-dark/10 p-10 rounded-[2.5rem]"
              >

                <span className="font-label-caps text-[11px] text-sage-mid mb-2 block">
                  2022 — 2023
                </span>

                <h4 className="font-display text-2xl text-sage-dark mb-1">
                  Kamalapur Sher-e-Bangla Railway High College
                </h4>

                <p className="font-body-md text-sage-dark/60">
                  Higher Secondary Certificate (HSC)
                </p>

              </motion.div>

            </div>

          </div>

          {/* ========================================= */}
          {/* RIGHT SIDE */}
          {/* ========================================= */}
          <div className="md:col-span-7 md:pt-32">

            <div className="exp-list space-y-20 relative">

              {/* Vertical Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-sage-dark/10"></div>

              {/* Web Design */}
              <div className="exp-item pl-12 relative">

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-sage-mid"
                ></motion.div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">

                  <div>
                    <h3 className="font-display text-3xl text-sage-dark">
                      Web Design Course
                    </h3>

                    <p className="font-label-caps text-[11px] text-sage-mid uppercase mt-1">
                      Olpo Shikhi • 2021
                    </p>
                  </div>

                  <span className="bg-sage-dark text-white px-5 py-1.5 rounded-full text-[10px] font-label-caps uppercase">
                    Completed
                  </span>

                </div>

                <p className="font-body-lg text-sage-dark/70 max-w-xl">
                  Learned responsive layouts, UI structure, typography,
                  color systems, and modern frontend design fundamentals.
                </p>

              </div>

              {/* Programming Hero */}
              <div className="exp-item pl-12 relative">

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-sage-dark/20"
                ></motion.div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">

                  <div>
                    <h3 className="font-display text-3xl text-sage-dark">
                      Web Development
                    </h3>

                    <p className="font-label-caps text-[11px] text-sage-mid uppercase mt-1">
                      Programming Hero • 2026
                    </p>
                  </div>

                  <span className="bg-sage-dark text-white px-5 py-1.5 rounded-full text-[10px] font-label-caps uppercase">
                    Ongoing
                  </span>

                </div>

                <p className="font-body-lg text-sage-dark/70 max-w-xl">
                  Exploring full-stack web development with React,
                  Next.js, MongoDB, backend architecture, and modern deployment workflows.
                </p>

              </div>

              {/* Self Learning */}
              <div className="exp-item pl-12 relative">

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-sage-dark/20"
                ></motion.div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">

                  <div>
                    <h3 className="font-display text-3xl text-sage-dark">
                      Self Learning Journey
                    </h3>

                    <p className="font-label-caps text-[11px] text-sage-mid uppercase mt-1">
                      2021 — Present
                    </p>
                  </div>

                  <span className="bg-sage-dark text-white px-5 py-1.5 rounded-full text-[10px] font-label-caps uppercase">
                    Active
                  </span>

                </div>

                <p className="font-body-lg text-sage-dark/70 max-w-xl">
                  Continuously improving problem-solving skills, UI development,
                  animations, and modern frontend engineering through hands-on projects.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}