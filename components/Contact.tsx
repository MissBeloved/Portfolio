"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-animate", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="
        relative
        flex
        min-h-[calc(100svh-80px)]
        items-center
        overflow-hidden
        bg-[#05070a]
        py-20
        sm:py-24
        lg:min-h-[calc(100svh-72px)]
        lg:py-16
      "
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-[10%] top-[20%] h-80 w-80 rounded-full bg-[#4cc9ff]/[0.035] blur-[130px]" />

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-14">

        {/* Section label */}
        <div className="contact-animate mb-6 flex items-center gap-3">
          <span className="h-px w-7 bg-[#4cc9ff]" />

          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/35 sm:text-xs">
            Contact / 05
          </span>
        </div>

        {/* Main content */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          {/* Left */}
          <div className="contact-animate">
            <div className="overflow-hidden">
              <h2 className="font-[var(--font-sora)] text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.06em] text-white">
                <span className="block">
                  Let&apos;s build
                </span>

                <span className="block text-white/25">
                  something secure.
                </span>
              </h2>
            </div>

            <p className="mt-7 max-w-xl text-sm leading-6 text-white/40 sm:mt-8 sm:text-base sm:leading-7">
              Interested in cybersecurity, cloud security, or building
              something together? Feel free to reach out.
            </p>
          </div>

          {/* Right */}
          <div className="contact-animate">
            <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm">

              {/* Email */}
              <a
                href="mailto:dongasupriya@gmail.com"
                className="group flex items-center justify-between border-b border-white/[0.08] px-5 py-5 transition-colors duration-300 hover:bg-white/[0.035] sm:px-6"
              >
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-white/25">
                    Email
                  </span>

                  <span className="mt-2 block text-sm text-white/70 transition-colors duration-300 group-hover:text-white sm:text-base">
                    dongasupriya@gmail.com
                  </span>
                </div>

                <span className="text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#4cc9ff]">
                  ↗
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/dongasupriya"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-white/[0.08] px-5 py-5 transition-colors duration-300 hover:bg-white/[0.035] sm:px-6"
              >
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-white/25">
                    LinkedIn
                  </span>

                  <span className="mt-2 block text-sm text-white/70 transition-colors duration-300 group-hover:text-white sm:text-base">
                    /in/dongasupriya
                  </span>
                </div>

                <span className="text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#4cc9ff]">
                  ↗
                </span>
              </a>

              {/* Location */}
              <div className="flex items-center justify-between px-5 py-5 sm:px-6">
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-white/25">
                    Location
                  </span>

                  <span className="mt-2 block text-sm text-white/70 sm:text-base">
                    Andhra Pradesh, India
                  </span>
                </div>

                <span className="flex items-center gap-2 text-[8px] uppercase tracking-[0.18em] text-[#4cc9ff]/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4cc9ff]" />
                  Available
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}