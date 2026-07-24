"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {

  // =========================
  // SECTION REF
  // =========================
  const sectionRef = useRef(null);

  // =========================
  // SKILLS DATA
  // এখানে নতুন skill add করতে পারবা
  // =========================
  const skills = [
    {
      title: "React.js",
      icon: "widgets",
      desc: "Developing scalable component-based frontend applications.",
    },

    {
      title: "Next.js",
      icon: "rocket_launch",
      desc: "Building high-performance web apps with SSR and modern routing.",
    },

    {
      title: "TypeScript",
      icon: "code_blocks",
      desc: "Writing type-safe, maintainable and scalable application code.",
    },

    {
      title: "Express.js",
      icon: "dns",
      desc: "Building fast and minimal REST APIs and backend services.",
    },

    {
      title: "MongoDB Atlas",
      icon: "database",
      desc: "Managing secure and scalable cloud database architecture.",
    },

    {
      title: "Tailwind CSS",
      icon: "palette",
      desc: "Designing fast and clean interfaces using utility-first CSS.",
    },

    {
      title: "UI Libraries",
      icon: "extension",
      desc: "Crafting premium interfaces with HeroUI and DaisyUI components.",
    },

    {
      title: "JavaScript",
      icon: "bolt",
      desc: "Adding interactive functionality and dynamic user experiences.",
    },

    {
      title: "CSS3",
      icon: "brush",
      desc: "Creating responsive layouts with modern styling and animations.",
    },

    {
      title: "HTML5",
      icon: "code",
      desc: "Building semantic, accessible and SEO-friendly website structures.",
    },
  ];

  // =========================
  // GSAP ANIMATION
  // =========================
  useEffect(() => {

    const ctx = gsap.context(() => {

      // =========================
      // SECTION TITLE ANIMATION
      // =========================
      gsap.fromTo(
        ".skills-title",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".skills-title",
            start: "top 85%",
            once: true,
          },
        }
      );

      // =========================
      // SKILL CARD ANIMATION
      // =========================
      gsap.fromTo(
        ".skill-card",
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 85%",
            once: true,
          },
        }
      );

    }, sectionRef);

    // =========================
    // CLEANUP
    // =========================
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

  }, []);

  return (

    <section
      ref={sectionRef}
      id="skills"
      className="py-section-gap bg-sage-dark text-white overflow-hidden"
    >

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

        {/* ========================= */}
        {/* SECTION HEADER */}
        {/* ========================= */}
        <div className="skills-title mb-16 md:mb-24">

          <span className="font-label-caps text-[11px] tracking-[0.45em] opacity-40 uppercase block mb-4">

            Technical Expertise

          </span>

          <h2 className="font-display text-[42px] sm:text-[56px] md:text-[84px] leading-none tracking-tighter">

            Skills & Technologies

          </h2>

          <p className="mt-6 max-w-2xl text-sm md:text-base text-white/60 leading-relaxed">

            A modern development stack focused on performance,
            responsiveness, clean architecture and smooth user experience.

          </p>

        </div>

        {/* ========================= */}
        {/* SKILLS GRID */}
        {/* ========================= */}
        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

          {skills.map((skill, index) => (

            <motion.div
              key={index}

              whileHover={{
                y: -6,
              }}

              transition={{
                duration: 0.3,
              }}

              className="skill-card group bg-white/5 border border-white/10 p-7 md:p-8 rounded-[2rem] hover:bg-white/[0.08] transition-all duration-300"
            >

              {/* ========================= */}
              {/* ICON */}
              {/* ========================= */}
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/15 transition-all duration-300">

                <span className="material-symbols-outlined text-[28px] text-white/80">

                  {skill.icon}

                </span>

              </div>

              {/* ========================= */}
              {/* TITLE */}
              {/* ========================= */}
              <h3 className="font-display text-[24px] md:text-[28px] mb-4">

                {skill.title}

              </h3>

              {/* ========================= */}
              {/* DESCRIPTION */}
              {/* ========================= */}
              <p className="text-white/60 leading-relaxed text-sm md:text-[15px]">

                {skill.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}