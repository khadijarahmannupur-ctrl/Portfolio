"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Expertise", link: "#skills" },
    { name: "Work", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const [active, setActive] = useState("Home");

  useEffect(() => {

    const handleScroll = () => {
      const sections = navItems.map(item =>
        document.querySelector(item.link)
      );

      let current = "Home";

      sections.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          current = navItems[index].name;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}

      className="fixed top-5 md:top-8 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] lg:w-[85%] z-50"
    >

      <div className="glass-nav rounded-full px-4 sm:px-6 md:px-10 py-3 md:py-4">

        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <h1 className="text-[18px] md:text-[20px] font-display font-semibold tracking-tighter text-sage-dark whitespace-nowrap">
            Nupur
          </h1>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">

            {navItems.map((item) => (

              <motion.a
                key={item.name}
                href={item.link}
                whileHover={{ y: -2 }}

                className={`
                  text-[11px] uppercase font-label-caps transition-all duration-300 whitespace-nowrap
                  ${active === item.name
                    ? "text-sage-dark opacity-100 border-b border-sage-dark pb-1"
                    : "text-sage-dark/60 hover:text-sage-dark"
                  }
                `}
              >
                {item.name}
              </motion.a>

            ))}

          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}

            className="primary-btn px-5 sm:px-6 md:px-8 py-2.5 rounded-full text-[10px] md:text-[11px] uppercase tracking-wider font-label-caps transition-all duration-300 whitespace-nowrap"
          >
            Resume
          </motion.button>

        </div>

      </div>

    </motion.nav>
  );
}