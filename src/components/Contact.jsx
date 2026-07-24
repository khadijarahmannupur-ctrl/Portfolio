"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {

  const sectionRef = useRef(null);
  const form = useRef();
  const [result, setResult] = useState("");

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

    return () => ctx.revert();

  }, []);

  const sendEmail = (e) => {

    e.preventDefault();

    setResult("Sending...");

    emailjs
      .sendForm(
        "service_mltmmyb",
        "template_g3xwtvu",
        form.current,
        "qVt4fR1cpt_UcoeTl"
      )
      .then(
        () => {

          setResult("Message sent successfully!");

          form.current.reset();

        },
        () => {

          setResult("Something went wrong!");

        }
      );
  };

  return (

    <section
      ref={sectionRef}
      id="contact"
      className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-x-hidden"
    >

      <div className="contact-item relative overflow-hidden rounded-[3rem] md:rounded-[4rem] bg-sage-dark p-10 md:p-20 grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* DECOR */}
        <div className="absolute top-10 right-10 w-24 h-24 border border-white/10 rounded-full opacity-30 pointer-events-none" />

        <div className="absolute bottom-10 left-10 w-12 h-12 bg-sage-mid/10 blur-xl rounded-full pointer-events-none" />

        {/* LEFT SIDE */}
        <div className="md:col-span-5 relative z-10 space-y-6">

          <span className="contact-item font-label-caps text-[11px] tracking-[0.4em] text-white/40 uppercase">
            Contact
          </span>

          <h2 className="contact-item font-display text-[48px] md:text-[72px] text-white leading-tight">
            Let's build
            <br />
            something meaningful
          </h2>

          <p className="contact-item text-white/60 max-w-sm">
            Open to collaborations, freelance work and creative frontend projects.
          </p>

          <div className="space-y-4">

            {/* EMAIL */}
            <div className="contact-item flex items-center gap-4">

              <span className="w-10 h-10 shrink-0 text-white border border-white rounded-full flex items-center justify-center">

                <span className="material-symbols-outlined text-sm">
                  alternate_email
                </span>

              </span>

              <span className="text-white break-all">
                khadijarahmannupur@gmail.com
              </span>

            </div>

            {/* LOCATION */}
            <div className="contact-item flex items-center gap-4">

              <span className="w-10 h-10 shrink-0 border border-white text-white rounded-full flex items-center justify-center">

                <span className="material-symbols-outlined text-sm">
                  phone
                </span>

              </span>

              <span className="text-white">
                01872313535
              </span>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-7 relative z-10">

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >

            {/* NAME */}
            <input
              type="text"
              name="from_name"
              required
              placeholder="Your Name"
              className="contact-item w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 outline-none"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="from_email"
              required
              placeholder="Your Email"
              className="contact-item w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 outline-none"
            />

            {/* MESSAGE */}
            <textarea
              rows="5"
              name="message"
              required
              placeholder="Write your message..."
              className="contact-item w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 outline-none resize-none"
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

            {/* RESULT */}
            <p className="text-white/70 text-sm">
              {result}
            </p>

          </form>

        </div>

      </div>

    </section>
  );
}