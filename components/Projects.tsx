"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "Travel.co",
    category: "Web Development",
    description:
      "Responsive travel website with interactive components and a clean user experience.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "React"],
  },
  {
    number: "02",
    title: "PetCare",
    category: "Team Project",
    description:
      "Responsive pet care platform with login-based access and user-focused interactions.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap 5"],
  },
  {
    number: "03",
    title: "Hosp-Hunt",
    category: "Frontend Development",
    description:
      "Hospital interface for finding hospitals, viewing medicine details, and booking appointments.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /* Section label animation */
      gsap.from(".projects-eyebrow", {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 15,
        duration: 0.6,
        ease: "power3.out",
      });

      /* Heading animation */
      gsap.from(".projects-heading-line", {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
        opacity: 0,
        yPercent: 100,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#05070a] py-16 sm:py-20 lg:py-24"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-[5%] top-[25%] h-72 w-72 rounded-full bg-[#4cc9ff]/[0.025] blur-[120px]" />

      <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-center px-5 sm:px-8 md:px-10 lg:px-14">

        {/* Section label */}
        <div className="projects-eyebrow mb-6 flex items-center gap-3 sm:mb-8">
          <span className="h-px w-7 bg-[#4cc9ff]" />

          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/35 sm:text-xs">
            Projects / 03
          </span>
        </div>

        {/* Heading */}
        <div className="mb-7 overflow-hidden sm:mb-8">
          <h2 className="font-[var(--font-sora)] text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.9] tracking-[-0.055em] text-white">
            <span className="projects-heading-line block">
              Things I&apos;ve
            </span>

            <span className="projects-heading-line block text-white/25">
              built.
            </span>
          </h2>
        </div>

        {/* Project cards */}
        <div className="grid items-stretch gap-3 lg:grid-cols-3 lg:gap-4">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group relative flex min-h-[320px] h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-5 transition-[transform,border-color,background-color] duration-500 hover:-translate-y-1 hover:border-[#4cc9ff]/20 hover:bg-white/[0.035] sm:min-h-[330px] sm:p-6"
            >
              {/* Decorative grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.025] transition-opacity duration-500 group-hover:opacity-[0.05]"
                style={{
                  backgroundImage: `
                    linear-gradient(
                      rgba(255,255,255,0.8) 1px,
                      transparent 1px
                    ),
                    linear-gradient(
                      90deg,
                      rgba(255,255,255,0.8) 1px,
                      transparent 1px
                    )
                  `,
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Card content */}
              <div className="relative flex h-full flex-1 flex-col">

                {/* Top */}
                <div className="flex min-h-[18px] items-center justify-between gap-4">
                  <span className="text-[9px] tracking-[0.2em] text-white/20">
                    {project.number}
                  </span>

                  <span className="text-right text-[8px] uppercase tracking-[0.18em] text-[#4cc9ff]/50">
                    {project.category}
                  </span>
                </div>

                {/* Project information */}
                <div className="mt-9">
                  <h3 className="font-[var(--font-sora)] text-2xl font-medium tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-[#4cc9ff]">
                    {project.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] max-w-sm text-xs leading-5 text-white/40 sm:text-sm sm:leading-6">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mt-auto min-h-[72px] pt-6">
                  <div className="flex flex-wrap gap-1.5 pr-10">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[8px] uppercase tracking-[0.06em] text-white/35 transition-colors duration-300 group-hover:border-white/[0.14] group-hover:text-white/55"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-sm text-white/25 transition-all duration-300 group-hover:border-[#4cc9ff]/30 group-hover:text-[#4cc9ff]">
                  ↗
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-3">
          <span className="text-[8px] uppercase tracking-[0.22em] text-white/20 sm:text-[9px]">
            Selected work
          </span>

          <span className="text-[8px] uppercase tracking-[0.22em] text-[#4cc9ff]/50 sm:text-[9px]">
            03 Projects
          </span>
        </div>
      </div>
    </section>
  );
}