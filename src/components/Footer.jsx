"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const links = [
    { name: "LinkedIn", icon: "work", href: "https://www.linkedin.com/in/khadijarahmannupur1" },
    { name: "GitHub", icon: "code", href: "https://github.com/khadijarahmannupur-ctrl" },
    // { name: "Dribbble", icon: "brush", href: "#" },
  ];

  return (
    <footer className="w-full py-32 border-t border-sage-dark/5 bg-canvas overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-end">

          {/* LEFT SIDE */}
          <div className="md:col-span-6">

            <motion.h2
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-display text-[110px] md:text-[190px] leading-none tracking-tighter text-sage-dark/10 select-none"
            >
              NUPUR
            </motion.h2>

            <div className="mt-[-25px] md:mt-[-45px] pl-3">

              <p className="font-body-md text-sage-dark/60 max-w-sm mb-10 leading-relaxed">
                Building digital experiences with clean architecture, smooth interactions,
                and a strong focus on minimal, elegant UI systems.
              </p>

              {/* SOCIAL LINKS */}
              <div className="flex flex-wrap gap-6">

                {links.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="flex items-center gap-2 font-label-caps text-[12px] tracking-widest text-sage-dark hover:text-sage-mid transition-all group"
                  >

                    <span className="material-symbols-outlined text-[16px] opacity-60 group-hover:opacity-100 transition">
                      {item.icon}
                    </span>

                    {item.name}

                  </motion.a>
                ))}

              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-6 md:text-right">

            <div className="mb-16">

              <span className="font-label-caps text-[11px] tracking-[0.4em] text-sage-mid uppercase block mb-4">
                Availability
              </span>

              <p className="font-display text-3xl md:text-4xl text-sage-dark leading-tight">
                Accepting Projects<br />Now — 2026
              </p>

            </div>

            <div className="space-y-3">

              <p className="font-label-caps text-[10px] text-sage-dark/30 uppercase tracking-[0.2em]">
                © 2026 Nupur — Independent Developer
              </p>

              <p className="font-label-caps text-[10px] text-sage-dark/30 uppercase tracking-[0.2em]">
                Built with React • Next.js • GSAP
              </p>

            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}