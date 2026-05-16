"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {

  const sectionRef = useRef(null);

  useEffect(() => {

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {

      gsap.set(".contact-item", {
        opacity: 0,
        y: 20,
      });

      gsap.to(".contact-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
      });

    }, sectionRef);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };

  }, []);

  return (

    <section
      ref={sectionRef}
      id="contact"
      className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
    >

      <div className="contact-item relative overflow-hidden rounded-[3rem] md:rounded-[4rem] bg-sage-dark p-10 md:p-20 grid md:grid-cols-12 gap-12">

        {/* DECOR */}
        <div className="absolute top-10 right-10 w-24 h-24 border border-white/10 rounded-full opacity-30" />

        <div className="absolute bottom-10 left-10 w-12 h-12 bg-sage-mid/10 blur-xl rounded-full" />

        {/* LEFT */}
        <div className="md:col-span-5 relative z-10 space-y-6">

          <span className="contact-item font-label-caps text-[11px] tracking-[0.4em] text-white/40 uppercase">
            Contact
          </span>

          <h2 className="contact-item font-display text-[48px] md:text-[72px] text-white leading-tight">
            Let’s build
            <br />
            something meaningful
          </h2>

          <p className="contact-item text-white/60 max-w-sm">
            Open to collaborations, freelance work and creative frontend projects.
          </p>

          <div className="space-y-4">

            {/* EMAIL */}
            <div className="contact-item flex items-center gap-4">

              <span className="w-10 h-10 text-white border border-white rounded-full flex items-center justify-center">

                <span className="material-symbols-outlined text-sm">
                  alternate_email
                </span>

              </span>

              <span className="text-white">
                khadijarahmannupur@gmail.com
              </span>

            </div>

            {/* LOCATION */}
            <div className="contact-item flex items-center gap-4">

              <span className="w-10 h-10 border border-white text-white rounded-full flex items-center justify-center">

                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>

              </span>

              <span className="text-white">
                Dhaka, Bangladesh
              </span>

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="md:col-span-7 relative z-10">

          <form
            action="https://formsubmit.co/khadijarahmannupur@gmail.com"
            method="POST"
            className="space-y-6"
          >

            {/* Disable captcha */}
            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            {/* Success page */}
            <input
              type="hidden"
              name="_next"
              value="https://khadija-rahman-nupur-portfolio.vercel.app"
            />

            {/* NAME */}
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="contact-item w-full bg-transparent border-b border-white/20 py-3 text-white outline-none"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="contact-item w-full bg-transparent border-b border-white/20 py-3 text-white outline-none"
            />

            {/* MESSAGE */}
            <textarea
              rows="5"
              name="message"
              required
              placeholder="Write your message..."
              className="contact-item w-full bg-transparent border-b border-white/20 py-3 text-white outline-none resize-none"
            />

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="contact-item bg-sage-mid text-white px-10 py-4 rounded-full"
            >
              Send Message
            </motion.button>

          </form>

        </div>

      </div>

    </section>
  );
}