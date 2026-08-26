"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const focusAreas = [
  "Cloud Security",
  "DevSecOps",
  "Kubernetes Security",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-eyebrow", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".about-heading-line", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        yPercent: 100,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
      });

      gsap.from(".about-copy", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 25,
        duration: 0.8,
        delay: 0.2,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".about-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        opacity: 0,
        x: 35,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",
      });

      gsap.from(".about-meta", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
        opacity: 0,
        y: 15,
        duration: 0.7,
        delay: 0.3,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#05070a] py-24 sm:py-28 lg:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-[15%] top-[25%] h-72 w-72 rounded-full bg-[#4cc9ff]/[0.035] blur-[120px]" />

      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-14">
        {/* Section label */}
        <div className="about-eyebrow mb-10 flex items-center gap-3 sm:mb-12">
          <span className="h-px w-7 bg-[#4cc9ff]" />

          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/35 sm:text-xs">
            About / 01
          </span>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Main statement */}
          <div>
            <div className="overflow-hidden">
              <h2 className="font-[var(--font-sora)] text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.055em] text-white">
                <span className="about-heading-line block">
                  Security for
                </span>

                <span className="about-heading-line block text-white/25">
                  what&apos;s next.
                </span>
              </h2>
            </div>

            <p className="about-copy mt-7 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
              Aspiring cybersecurity professional focused on Cloud Security,
              DevSecOps, and Kubernetes Security. Building hands-on skills in
              Linux, networking, cloud, and security fundamentals.
            </p>

            <p className="about-copy mt-4 max-w-2xl text-sm leading-7 text-white/35 sm:text-base sm:leading-8">
              I learn by building projects, exploring new technologies, and
              continuously strengthening my technical skills.
            </p>

            {/* Meta */}
            <div className="about-meta mt-8 grid max-w-xl grid-cols-2 gap-6 border-t border-white/[0.08] pt-5 sm:grid-cols-3 sm:gap-8">
              <div>
                <span className="block text-[9px] uppercase tracking-[0.2em] text-white/25">
                  Based in
                </span>

                <span className="mt-2 block text-xs text-white/65">
                  Andhra Pradesh
                </span>
              </div>

              <div>
                <span className="block text-[9px] uppercase tracking-[0.2em] text-white/25">
                  Degree
                </span>

                <span className="mt-2 block text-xs text-white/65">
                  B.Tech Computer Engineering
                </span>
              </div>

              <div>
                <span className="block text-[9px] uppercase tracking-[0.2em] text-white/25">
                  CGPA
                </span>

                <span className="mt-2 block text-xs text-white/65">
                  8.80
                </span>
              </div>
            </div>
          </div>

          {/* Focus card */}
          <div className="about-card flex items-center lg:justify-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm sm:p-8">
              {/* Decorative grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
                  `,
                  backgroundSize: "36px 36px",
                }}
              />

              <div className="relative">
                {/* Card header */}
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                    Current focus
                  </span>

                  <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#4cc9ff]/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4cc9ff]" />
                    Learning
                  </span>
                </div>

                {/* Focus areas */}
                <div className="space-y-1">
                  {focusAreas.map((area, index) => (
                    <div
                      key={area}
                      className="group flex items-center justify-between border-b border-white/[0.07] py-4"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[9px] text-white/20">
                          0{index + 1}
                        </span>

                        <span className="font-[var(--font-sora)] text-sm text-white/65 transition-colors duration-300 group-hover:text-white sm:text-base">
                          {area}
                        </span>
                      </div>

                      <span className="translate-x-0 text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#4cc9ff]">
                        →
                      </span>
                    </div>
                  ))}
                </div>

                {/* Card footer */}
                <div className="mt-6 text-[9px] uppercase leading-5 tracking-[0.18em] text-white/20">
                  Security for what&apos;s next.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}