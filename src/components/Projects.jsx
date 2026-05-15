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

      title: "TileCraft",

      category: "Modern Tile Showcase Website",

      description:
        "TileCraft Gallery showcases premium tiles through a clean, modern and user-friendly browsing experience with secure authentication and personalized features.",

      tech: [
        "Next.js (App Router)",
        "Tailwind CSS",
        "HeroUI",
        "Better Auth",
        "MongoDB",
        "React Fast Marquee",
      ],

      image: "/project-1.png",

      live: "https://tilecraft-gallery.vercel.app",

      github:
        "https://github.com/khadijarahmannupur-ctrl/assienment-8",
    },

    {
      number: "02",

      title: "KeenKeeper Friends",

      category: "Friends Care & Community Platform",

      description:
        "KeenKeeper is a modern friendship management platform that helps users stay connected by tracking calls, messages and meaningful interactions.",

      tech: [
        "React.js",
        "React Router",
        "Tailwind CSS",
        "Recharts",
        "React Toastify",
      ],

      image: "/images/project-2.jpg",

      live: "https://keenkepper-friends-website.vercel.app",

      github:
        "https://github.com/khadijarahmannupur-ctrl/Assienment-7",
    },

    {
      number: "03",

      title: "DGI Tools",

      category: "Developer Utility Toolkit",

      description:
        "A practical collection of modern developer tools built with a minimal interface, fast interactions and productivity-focused user experience.",

      tech: [
        "React.js",
        "Tailwind CSS",
        "Vite",
        "React Toastify",
        "React Icons",
        "Netlify (Deployment)",
      ],

      image: "/images/project-3.jpg",

      live: "https://dgitools.netlify.app",

      github:
        "https://github.com/khadijarahmannupur-ctrl/Assienment-6",
    },

    {
      number: "04",

      title: "GitHub Issues Tracer",

      category: "Issue Tracking Dashboard",

      description:
        "A streamlined GitHub issue management platform crafted for tracking repository tasks, monitoring workflows and improving development collaboration.",

      tech: ["React", "GitHub API", "Tailwind CSS", "JavaScript"],

      image: "/images/project-4.jpg",

      live: "https://github-issues-tracer.netlify.app",

      github:
        "https://github.com/khadijarahmannupur-ctrl/Assienment-5",
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
                  className="w-full h-[260px] sm:h-[340px] md:h-[460px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
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

                {/* BUTTONS */}
                <div className="flex flex-wrap items-center gap-4 pt-2">

                  {/* LIVE DEMO BUTTON */}
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="
                              primary-btn
                              px-6
                              py-3
                              rounded-full
                              text-[11px]
                              uppercase
                              tracking-[0.2em]
                              font-label-caps
                              shadow-md
                              transition-all
                              duration-300
                            "
                  >
                    Live Demo ↗
                  </motion.a>

                  {/* GITHUB BUTTON */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="
                          secondary-btn
                          px-6
                          py-3
                          rounded-full
                          text-[11px]
                          uppercase
                          tracking-[0.2em]
                          font-label-caps
                          transition-all
                          duration-300
                          hover:bg-sage-dark
                          hover:text-white
                          "
                  >
                    GitHub ↗
                  </motion.a>

                </div>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}