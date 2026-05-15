"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {

  // Navbar menu items
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Expertise", link: "#skills" },
    { name: "Work", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  // Active section state
  const [active, setActive] = useState("Home");

  // Detect active section while scrolling
  useEffect(() => {

    const handleScroll = () => {

      let current = "Home";

      navItems.forEach((item) => {

        const section = document.querySelector(item.link);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          current = item.name;
        }

      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (

    <motion.nav

      initial={{ y: -80, opacity: 0 }}

      animate={{ y: 0, opacity: 1 }}

      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}

      className="
        fixed
        top-5
        md:top-8
        left-1/2
        -translate-x-1/2
        w-[95%]
        md:w-[90%]
        lg:w-[85%]
        z-50
      "
    >

      {/* Glass Background */}
      <div
        className="
          glass-nav
          rounded-full
          px-4
          sm:px-6
          md:px-10
          py-3
          md:py-4
        "
      >

        <div className="flex items-center justify-between gap-4">

          {/* Logo / Name */}
          <a
            href="#home"
            className="
              text-[18px]
              md:text-[20px]
              font-display
              font-semibold
              tracking-tighter
              text-sage-dark
              whitespace-nowrap
            "
          >
            Nupur
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">

            {navItems.map((item) => (

              <motion.a

                key={item.name}

                href={item.link}

                whileHover={{ y: -2 }}

                className={`
                  relative
                  text-[11px]
                  uppercase
                  font-label-caps
                  transition-all
                  duration-300
                  whitespace-nowrap
                  pb-1

                  ${active === item.name
                    ? "text-sage-dark"
                    : "text-sage-dark/60 hover:text-sage-dark"
                  }
                `}
              >

                {item.name}

                {/* Active underline */}
                {active === item.name && (
                  <motion.div

                    layoutId="activeNav"

                    className="
                      absolute
                      left-0
                      bottom-0
                      h-[1px]
                      w-full
                      bg-sage-dark
                    "
                  />
                )}

              </motion.a>

            ))}

          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3 md:gap-4">

            {/* GitHub */}
            <motion.a

              whileHover={{ y: -2 }}

              whileTap={{ scale: 0.95 }}

              href="https://github.com/khadijarahmannupur-ctrl"

              target="_blank"

              rel="noopener noreferrer"

              className="
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                border
                border-sage-mid/20
                text-sage-dark/70
                hover:text-sage-dark
                hover:bg-sage-mid/10
                transition-all
                duration-300
              "
            >
              <FaGithub size={16} />
            </motion.a>

            {/* LinkedIn */}
            <motion.a

              whileHover={{ y: -2 }}

              whileTap={{ scale: 0.95 }}

              href="https://www.linkedin.com/in/khadijarahmannupur1"

              target="_blank"

              rel="noopener noreferrer"

              className="
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                border
                border-sage-mid/20
                text-sage-dark/70
                hover:text-sage-dark
                hover:bg-sage-mid/10
                transition-all
                duration-300
              "
            >
              <FaLinkedinIn size={15} />
            </motion.a>

          </div>

        </div>

      </div>

    </motion.nav>
  );
}