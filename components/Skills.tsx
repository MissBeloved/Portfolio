"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    number: "01",
    title: "Security",
    skills: [
      "Cloud Security",
      "DevSecOps",
      "Kubernetes Security",
      "Linux",
    ],
  },
  {
    number: "02",
    title: "Programming",
    skills: [
      "Java",
      "C",
      "C++",
      "JavaScript",
      "SQL",
    ],
  },
  {
    number: "03",
    title: "Web",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "React.js",
    ],
  },
  {
    number: "04",
    title: "Tools",
    skills: [
      "GitHub",
      "VS Code",
      "MySQL",
      "Networking",
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-eyebrow", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        opacity: 0,
        y: 18,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".skills-heading-line", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        opacity: 0,
        yPercent: 100,
        duration: 0.9,
        stagger: 0.12,
        ease: "power4.out",
      });

      gsap.from(".skill-group", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          once: true,
        },
        opacity: 0,
        y: 25,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".skills-footer", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          once: true,
        },
        opacity: 0,
        y: 12,
        duration: 0.6,
        delay: 0.25,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#080b10] py-20 sm:py-24 lg:py-28"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-[#7c5cff]/[0.035] blur-[120px]" />

      <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-center px-5 sm:px-8 md:px-10 lg:px-14">
        {/* Section label */}
        <div className="skills-eyebrow mb-8 flex items-center gap-3 sm:mb-10">
          <span className="h-px w-7 bg-[#4cc9ff]" />

          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/35 sm:text-xs">
            Skills / 02
          </span>
        </div>

        {/* Heading */}
        <div className="mb-8 overflow-hidden sm:mb-10">
          <h2 className="font-[var(--font-sora)] text-[clamp(2.6rem,5.5vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.055em] text-white">
            <span className="skills-heading-line block">
              Tools for
            </span>

            <span className="skills-heading-line block text-white/25">
              secure systems.
            </span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="skill-group group relative border-b border-white/[0.08] bg-[#080b10] p-5 transition-colors duration-500 hover:bg-white/[0.035] last:border-b-0 sm:p-6 sm:[&:nth-child(2)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              {/* Top row */}
              <div className="mb-7 flex items-center justify-between">
                <span className="text-[9px] tracking-[0.2em] text-white/20">
                  {group.number}
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-[#4cc9ff]/30 transition-all duration-300 group-hover:bg-[#4cc9ff] group-hover:shadow-[0_0_12px_#4cc9ff]" />
              </div>

              {/* Category */}
              <h3 className="font-[var(--font-sora)] text-base font-medium text-white/85 sm:text-lg">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="mt-4 space-y-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 text-xs text-white/40 transition-colors duration-300 group-hover:text-white/65 sm:text-sm"
                  >
                    <span className="h-px w-3 shrink-0 bg-white/15 transition-all duration-300 group-hover:w-5 group-hover:bg-[#4cc9ff]/50" />

                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="skills-footer mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4">
          <span className="text-[8px] uppercase tracking-[0.22em] text-white/20 sm:text-[9px]">
            Continuously learning
          </span>

          <span className="text-[8px] uppercase tracking-[0.22em] text-[#4cc9ff]/50 sm:text-[9px]">
            04 Categories
          </span>
        </div>
      </div>
    </section>
  );
}