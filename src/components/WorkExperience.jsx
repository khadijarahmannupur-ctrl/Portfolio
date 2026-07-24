"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function WorkExperience() {

    // =========================
    // SECTION REF
    // =========================
    const sectionRef = useRef(null);

    // =========================
    // GSAP ANIMATION
    // =========================
    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.fromTo(
                ".work-title",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".work-title",
                        start: "top 85%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".work-card",
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".work-card",
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

    return (

        <section
            ref={sectionRef}
            id="work-experience"
            className="py-section-gap px-margin-mobile md:px-margin-desktop bg-canvas relative overflow-hidden"
        >

            {/* Background Text */}
            <div className="absolute -bottom-10 left-0 p-10 opacity-5 pointer-events-none">
                <span className="font-display text-[180px] leading-none">
                    WORK
                </span>
            </div>

            <div className="max-w-container-max mx-auto relative">

                {/* ========================= */}
                {/* HEADER */}
                {/* ========================= */}
                <div className="work-title mb-16 md:mb-20">

                    <span className="font-label-caps text-[11px] tracking-[0.45em] text-sage-mid uppercase inline-block mb-4">
                        Currently Building
                    </span>

                    <h2 className="font-display text-[42px] sm:text-[56px] md:text-[84px] leading-none tracking-tighter text-sage-dark">
                        Work
                        <br />
                        Experience
                    </h2>

                </div>

                {/* ========================= */}
                {/* WORK CARD */}
                {/* ========================= */}
                <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="work-card relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-sage-dark text-white p-10 md:p-16 grid md:grid-cols-12 gap-10 md:gap-16"
                >

                    {/* DECOR */}
                    <div className="absolute top-10 right-10 w-24 h-24 border border-white/10 rounded-full opacity-30" />
                    <div className="absolute bottom-10 right-1/3 w-12 h-12 bg-sage-mid/10 blur-xl rounded-full" />

                    {/* LEFT: ROLE INFO */}
                    <div className="md:col-span-5 relative z-10 space-y-6">

                        <span className="bg-white/10 border border-white/10 text-[10px] font-label-caps uppercase tracking-[0.2em] px-4 py-1.5 rounded-full inline-block">
                            Ongoing
                        </span>

                        <h3 className="font-display text-3xl md:text-4xl leading-tight">
                            React Developer Intern
                        </h3>

                        <p className="font-label-caps text-[11px] text-sage-mid uppercase tracking-[0.3em]">
                            Cemzo • Since July 2026
                        </p>

                        <p className="text-white/60 max-w-sm leading-relaxed">
                            Working with an India-based product team, contributing to
                            Cemzo&rsquo;s own platform ahead of its upcoming public launch.
                        </p>

                        <motion.a
                            href="https://www.cemzo.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 6 }}
                            className="inline-flex items-center gap-2 text-[11px] font-label-caps uppercase tracking-[0.2em] text-white border-b border-white/30 pb-1 w-fit"
                        >
                            Visit Cemzo ↗
                        </motion.a>

                    </div>

                    {/* RIGHT: FOCUS AREAS */}
                    <div className="md:col-span-7 relative z-10">

                        <p className="font-body-lg text-white/70 leading-relaxed mb-10 max-w-xl">
                            Working as part of the core product team on a real, soon-to-launch
                            application &mdash; writing type-safe code, collaborating closely with
                            designers and other developers, and helping keep the codebase
                            reliable through testing.
                        </p>

                        <div className="flex flex-wrap gap-3">

                            {[
                                { icon: "code", label: "TypeScript" },
                                { icon: "groups", label: "Team Collaboration" },
                                { icon: "fact_check", label: "Testing" },
                            ].map((item) => (

                                <div
                                    key={item.label}
                                    className="flex-1 min-w-[160px] border border-white/10 bg-white/5 rounded-2xl px-5 py-4 flex items-center gap-3"
                                >
                                    <span className="material-symbols-outlined text-sage-mid text-xl shrink-0">
                                        {item.icon}
                                    </span>
                                    <span className="text-sm text-white/80 whitespace-nowrap">
                                        {item.label}
                                    </span>
                                </div>

                            ))}

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}