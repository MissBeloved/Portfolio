"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    number: "01",
    year: "2025 — Present",
    degree: "B.Tech — Computer Engineering",
    institution: "Aditya College of Engineering and Technology",
    location: "Surampalem",
    result: "CGPA 8.80",
  },
  {
    number: "02",
    year: "2022 — 2025",
    degree: "Diploma — Computer Engineering",
    institution: "Aditya Engineering College",
    location: "Surampalem",
    result: "93.86%",
  },
  {
    number: "03",
    year: "2022",
    degree: "Secondary School Certificate",
    institution: "A.M.G Residential E.M High School",
    location: "Rajavolu",
    result: "87.83%",
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".education-eyebrow", {
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          once: true,
        },
        opacity: 0,
        y: 12,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(".education-heading-line", {
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
        opacity: 0,
        yPercent: 100,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out",
      });

      gsap.from(".education-item", {
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
        opacity: 0,
        y: 18,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".education-footer", {
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          once: true,
        },
        opacity: 0,
        y: 10,
        duration: 0.5,
        delay: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="
        relative
        flex
        min-h-[100svh]
        items-center
        overflow-hidden
        bg-[#05070a]
        pt-28
        pb-12
        sm:pt-32
        sm:pb-16
        lg:h-[100svh]
        lg:min-h-0
        lg:pt-24
        lg:pb-16
      "
    >
      {/* Ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[20%]
          h-72
          w-72
          rounded-full
          bg-[#7c5cff]/[0.025]
          blur-[120px]
        "
      />

      {/* Main container */}
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          justify-center
          px-5
          sm:px-8
          md:px-10
          lg:px-14
        "
      >
        {/* Section label */}
        <div className="education-eyebrow mb-5 flex items-center gap-3 sm:mb-6">
          <span className="h-px w-7 bg-[#4cc9ff]" />

          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-white/35
              sm:text-xs
            "
          >
            Education / 04
          </span>
        </div>

        {/* Heading */}
        <div className="mb-7 overflow-hidden sm:mb-8">
          <h2
            className="
              font-[var(--font-sora)]
              text-[clamp(2.5rem,5vw,5rem)]
              font-medium
              leading-[0.9]
              tracking-[-0.055em]
              text-white
            "
          >
            <span className="education-heading-line block">
              Learning with
            </span>

            <span className="education-heading-line block text-white/25">
              purpose.
            </span>
          </h2>
        </div>

        {/* Education list */}
        <div className="border-t border-white/[0.08]">
          {education.map((item) => (
            <article
              key={item.number}
              className="
                education-item
                grid
                min-h-[100px]
                items-center
                gap-4
                border-b
                border-white/[0.08]
                py-5
                sm:min-h-[105px]
                sm:grid-cols-[145px_1fr_auto]
                sm:gap-6
                sm:py-5
                lg:grid-cols-[175px_1fr_auto]
              "
            >
              {/* Number + year */}
              <div className="flex items-center gap-3">
                <span className="text-[9px] tracking-[0.2em] text-white/20">
                  {item.number}
                </span>

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.12em]
                    text-white/35
                    sm:text-[10px]
                  "
                >
                  {item.year}
                </span>
              </div>

              {/* Education details */}
              <div className="min-w-0">
                <h3
                  className="
                    truncate
                    font-[var(--font-sora)]
                    text-base
                    font-medium
                    tracking-[-0.025em]
                    text-white
                    transition-colors
                    duration-300
                    hover:text-[#4cc9ff]
                    sm:text-lg
                  "
                >
                  {item.degree}
                </h3>

                <p className="mt-1.5 truncate text-xs text-white/40 sm:text-sm">
                  {item.institution}
                </p>

                <p
                  className="
                    mt-1
                    text-[9px]
                    uppercase
                    tracking-[0.15em]
                    text-white/20
                  "
                >
                  {item.location}
                </p>
              </div>

              {/* Result */}
              <div className="flex items-center gap-3 sm:justify-end">
                <span
                  className="
                    hidden
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-white/20
                    sm:block
                  "
                >
                  Result
                </span>

                <span
                  className="
                    font-[var(--font-sora)]
                    text-sm
                    text-[#4cc9ff]/70
                  "
                >
                  {item.result}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <div
          className="
            education-footer
            mt-4
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.22em]
              text-white/20
              sm:text-[9px]
            "
          >
            Academic journey
          </span>

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.22em]
              text-[#4cc9ff]/50
              sm:text-[9px]
            "
          >
            03 Milestones
          </span>
        </div>
      </div>
    </section>
  );
}