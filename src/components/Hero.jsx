"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function Hero() {

  // =========================
  // GSAP Refs
  // =========================
  const containerRef = useRef(null);
  const firstNameRef = useRef(null);
  const secondNameRef = useRef(null);

  // =========================
  // GSAP Animation
  // =========================
  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(
        [firstNameRef.current, secondNameRef.current],
        {
          y: 100,
          opacity: 0,
          skewY: 8,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
        }
      );

      gsap.from(".hero-vertical-text", {
        opacity: 0,
        x: -20,
        duration: 1,
        delay: 0.4,
      });

      gsap.from(".hero-content", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.7,
      });

      gsap.from(".hero-image", {
        scale: 0.85,
        opacity: 0,
        duration: 1.4,
        ease: "expo.out",
      });

    }, containerRef);

    return () => ctx.revert();

  }, []);

  return (

    <section
      ref={containerRef}
      id="home"
      className="relative overflow-hidden max-w-[1280px] mx-auto px-5 md:px-16 
      pt-40 md:pt-48 pb-32 md:pb-40"
    >

      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-y-16">

        {/* ========================= */}
        {/* Vertical Text */}
        {/* ========================= */}
        <div className="hero-vertical-text hidden md:block absolute -left-20 top-0 writing-vertical py-8">

          {/* CHANGE ROLE TEXT HERE */}
          <span className="font-label-caps text-[9px] tracking-[0.5em] uppercase text-sage-dark opacity-30">
            Full Stack Developer — 2026
          </span>

        </div>

        {/* ========================= */}
        {/* LEFT CONTENT */}
        {/* ========================= */}
        <div className="md:col-span-7 z-20">

          {/* CHANGE ROLE HERE */}
          <span className="inline-block mb-10 text-[12px] tracking-[0.4em] uppercase font-label-caps text-sage-mid">
            Full Stack Developer
          </span>

          {/* ========================= */}
          {/* NAME BLOCK */}
          {/* ========================= */}

          {/* CHANGE FIRST NAME HERE */}
          <div className="overflow-hidden">

            <h1
              ref={firstNameRef}
              className="font-display text-[60px] mb-5 sm:text-[72px] md:text-[110px] lg:text-[130px] leading-[0.8] tracking-tighter text-sage-dark"
            >
              Khadija
            </h1>

          </div>

          {/* CHANGE MIDDLE NAME HERE */}
          <div className="overflow-hidden">

            <h1
              ref={secondNameRef}
              className="font-display text-[60px] mb-5 sm:text-[72px] md:text-[110px] lg:text-[130px] leading-[0.85] tracking-tighter text-sage-dark ml-4 md:ml-10"
            >
              Rahman
            </h1>

          </div>

          {/* CHANGE LAST NAME HERE */}
          <div className="overflow-hidden">

            <h1
              className="font-display text-[60px] sm:text-[72px] md:text-[110px] lg:text-[130px] leading-[0.85] tracking-tighter text-sage-dark"
            >
              Nupur
            </h1>

          </div>

          {/* ========================= */}
          {/* DESCRIPTION + BUTTONS */}
          {/* ========================= */}
          <div className="hero-content max-w-xl mt-5 pt-8 border-t border-sage-mid/20">

            {/* CHANGE ABOUT TEXT HERE */}
            <p className="mb-10 font-body-lg leading-relaxed text-sage-dark/70">

              I build modern, responsive and visually polished web applications
              with clean user experiences. Passionate about frontend
              development, smooth animations and creative digital design.

            </p>

            <div className="flex flex-wrap gap-4">

              {/* CONTACT BUTTON */}
              <motion.a
                href="#contact"
                whileHover={{ x: 8 }}
                className="primary-btn px-8 md:px-10 py-4 md:py-5 rounded-full shadow-lg font-display text-body-sm"
              >
                Contact Me
              </motion.a>

              {/* PROJECT BUTTON */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                className="secondary-btn px-8 md:px-10 py-4 md:py-5 rounded-full font-display text-body-sm hover:bg-sage-dark hover:text-white transition-all"
              >
                View Projects
              </motion.a>

            </div>

          </div>

        </div>

        {/* ========================= */}
        {/* RIGHT IMAGE */}
        {/* ========================= */}
        <div className="md:col-span-5 relative">

          <div className="hero-image relative w-full aspect-[3/4] md:translate-y-20">

            {/* BACKGROUND BLUR */}
            <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-sage-mid/10 blur-3xl"></div>

            {/* BORDER LAYER */}
            <div className="absolute inset-0 border border-sage-dark/20 -translate-x-4 md:-translate-x-6 translate-y-4 md:translate-y-6 rounded-[3rem]"></div>

            {/* MAIN IMAGE */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-2xl bg-sage-dark"
            >

              {/* CHANGE IMAGE HERE */}
              <img
                src="/profile.png"
                alt="Khadija Rahman Nupur"
                className="w-full h-full object-cover object-top grayscale brightness-110 contrast-125"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-sage-dark/40 to-transparent"></div>

            </motion.div>

            {/* FLOATING EXPERIENCE CARD */}
            <motion.div
              initial={{ rotate: 10, opacity: 0 }}
              animate={{ rotate: 3, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute -bottom-6 md:-bottom-8 -right-2 md:-right-8 dark-card p-6 md:p-10 rounded-3xl shadow-2xl border border-white/5"
            >

              {/* CHANGE EXPERIENCE HERE */}
              <span className="block mb-1 text-3xl md:text-4xl font-display">
                06+
              </span>

              <span className="text-[10px] tracking-widest uppercase opacity-60 font-label-caps">
                Months of Learning
              </span>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}