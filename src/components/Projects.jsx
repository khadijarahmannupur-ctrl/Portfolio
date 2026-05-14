"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {

  // =========================
  // REF
  // =========================
  const sectionRef = useRef(null);

  // =========================
  // PROJECT DATA
  // =========================
  const projects = [
    {
      number: "01",
      title: "Lunexa",
      category: "Modern Learning Platform",
      description:
        "An elegant online learning experience focused on immersive UI, responsive layouts and smooth frontend interactions.",
      tech: ["React", "Tailwind", "MongoDB"],
      image: "/images/project-1.jpg",
      live: "#",
    },
    {
      number: "02",
      title: "Veloura",
      category: "Luxury Fashion Store",
      description:
        "Premium ecommerce experience with cinematic layouts, modern typography and high-end visual storytelling.",
      tech: ["Next.js", "GSAP", "Framer"],
      image: "/images/project-2.jpg",
      live: "#",
    },
    {
      number: "03",
      title: "Orbit Flow",
      category: "Productivity Dashboard",
      description:
        "A modern workflow dashboard crafted with clean user experience, intuitive layouts and scalable architecture.",
      tech: ["React", "Firebase", "Tailwind"],
      image: "/images/project-3.jpg",
      live: "#",
    },
    {
      number: "04",
      title: "Noir Atelier",
      category: "Creative Portfolio",
      description:
        "Minimal portfolio experience inspired by editorial aesthetics, refined interactions and luxury visuals.",
      tech: ["Next.js", "GSAP", "Tailwind"],
      image: "/images/project-4.jpg",
      live: "#",
    },
  ];

  // =========================
  // GSAP ANIMATION (FIXED)
  // =========================
  useEffect(() => {

    const ctx = gsap.context(() => {

      // HEADER
      gsap.fromTo(
        ".projects-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-header",
            start: "top 85%",
            once: true,
          },
        }
      );

      // CARDS
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 85%",
            once: true,
          },
        }
      );

    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };

  }, []);

  // =========================
  // UI
  // =========================
  return (
    <section
      ref={sectionRef}
      id="projects"
      className="mb-30 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden"
    >

      {/* HEADER */}
      <div className="projects-header flex flex-col lg:flex-row justify-between lg:items-end gap-10 mb-16 md:mb-24">

        <div>
          <span className="inline-block mb-5 text-[11px] tracking-[0.45em] uppercase text-sage-mid">
            Selected Projects
          </span>

          <h2 className="font-display text-[54px] sm:text-[72px] md:text-[96px] leading-[0.9] tracking-tighter text-sage-dark">
            Featured <br /> Works
          </h2>
        </div>

        <div className="max-w-md text-sage-dark/60">
          <p>
            A curated collection of modern web experiences crafted with clean UI,
            smooth interactions and scalable frontend architecture.
          </p>
        </div>

      </div>

      {/* GRID */}
      <div className="projects-grid space-y-10 md:space-y-14">

        {projects.map((project) => (

          <motion.div
            key={project.title}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="project-card group relative overflow-hidden rounded-[2.5rem] border border-sage-dark/10 bg-white/40 backdrop-blur-xl shadow-lg"
          >

            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">

              {/* IMAGE */}
              <div className="relative lg:col-span-7 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                <div className="absolute top-5 left-5 w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white text-xs">
                  {project.number}
                </div>

              </div>

              {/* CONTENT */}
              <div className="lg:col-span-5 p-8 md:p-12">

                <span className="text-xs uppercase tracking-widest text-sage-mid">
                  {project.category}
                </span>

                <h3 className="font-display text-3xl md:text-4xl mt-4 mb-4 text-sage-dark">
                  {project.title}
                </h3>

                <p className="text-sage-dark/60 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full border border-sage-dark/10 bg-sage-dark/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.live}
                  whileHover={{ rotate: 45 }}
                  className="material-symbols-outlined text-3xl text-sage-dark inline-block"
                >
                  arrow_outward
                </motion.a>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}