"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: {
                    ease: "power4.out",
                },
            });

            tl.from(".hero-eyebrow", {
                opacity: 0,
                y: 18,
                duration: 0.7,
            })
                .from(
                    ".hero-title-line",
                    {
                        opacity: 0,
                        yPercent: 100,
                        duration: 1,
                        stagger: 0.12,
                    },
                    "-=0.3",
                )
                .from(
                    ".hero-copy",
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.7,
                    },
                    "-=0.5",
                )
                .from(
                    ".hero-actions",
                    {
                        opacity: 0,
                        y: 15,
                        duration: 0.6,
                    },
                    "-=0.4",
                )
                .from(
                    ".hero-meta",
                    {
                        opacity: 0,
                        y: 10,
                        duration: 0.6,
                    },
                    "-=0.3",
                )
                .from(
                    visualRef.current,
                    {
                        opacity: 0,
                        scale: 0.92,
                        duration: 1.3,
                        ease: "power3.out",
                    },
                    "-=1",
                );

            gsap.to(glowRef.current, {
                x: 35,
                y: -25,
                duration: 7,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const hero = heroRef.current;

        if (!hero) return;

        const handleMouseMove = (event: MouseEvent) => {
            if (window.innerWidth < 768) return;

            const x = event.clientX / window.innerWidth - 0.5;
            const y = event.clientY / window.innerHeight - 0.5;

            gsap.to(contentRef.current, {
                x: x * 4,
                y: y * 3,
                duration: 1.2,
                ease: "power3.out",
            });

            gsap.to(visualRef.current, {
                x: x * 12,
                y: y * 10,
                duration: 1.5,
                ease: "power3.out",
            });

            gsap.to(glowRef.current, {
                x: x * 35,
                y: y * 25,
                duration: 2,
                ease: "power3.out",
            });
        };

        hero.addEventListener("mousemove", handleMouseMove);

        return () => {
            hero.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-[100svh] overflow-hidden bg-[#05070a]"
        >
            {/* Ambient light */}
            <div
                ref={glowRef}
                className="pointer-events-none absolute left-[58%] top-[42%] h-[28rem] w-[28rem] rounded-full bg-[#4cc9ff]/[0.055] blur-[120px]"
            />

            {/* Technical grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.022]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
                    backgroundSize: "72px 72px",
                }}
            />

            {/* Main content */}
            <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col px-5 py-20 sm:px-8 md:px-10 lg:px-14">
                <div className="flex flex-1 items-center">
                    <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
                        {/* LEFT */}
                        <div ref={contentRef} className="max-w-2xl">
                            {/* Eyebrow */}
                            <div className="hero-eyebrow mb-6 flex items-center gap-3">
                                <span className="h-px w-7 bg-[#4cc9ff]" />

                                <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/40 sm:text-xs">
                                    Cybersecurity / Cloud / DevSecOps
                                </span>
                            </div>

                            {/* Title */}
                            <div className="overflow-hidden">
                                <h1 className="font-[var(--font-sora)] text-[clamp(3.6rem,7.8vw,7.6rem)] font-medium leading-[0.86] tracking-[-0.065em] text-white">
                                    <span className="hero-title-line block">
                                        Supriya
                                    </span>

                                    <span className="hero-title-line block text-white/20">
                                        Donga
                                    </span>
                                </h1>
                            </div>

                            {/* Copy */}
                            <p className="hero-copy mt-7 max-w-lg text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
                                Building secure cloud-native environments with a focus on
                                Cloud Security, DevSecOps, and Kubernetes Security.
                            </p>

                            {/* Actions */}
                            <div className="hero-actions mt-7 flex flex-wrap gap-3">
                                <a
                                    href="#projects"
                                    style={{
                                        color: "#05070a",
                                    }}
                                    className="group flex h-11 w-[142px] items-center justify-center gap-3 rounded-full text-xs font-semibold transition-all duration-300 hover:bg-[#4cc9ff] bg-[#f5f5f2]"
                                >
                                    <span>
                                        View work
                                    </span>

                                    <span
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    >
                                        →
                                    </span>
                                </a>


                                <a
                                    href="#contact"
                                    className="group flex h-11 w-[142px] items-center justify-center gap-2 rounded-full border border-white/10 text-xs font-medium text-white/65 transition-colors duration-300 hover:border-white/30 hover:text-white"
                                >
                                    <span>Contact</span>
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        ↗
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT VISUAL */}
                        <div
                            ref={visualRef}
                            className="relative hidden h-[360px] items-center justify-center lg:flex"
                        >
                            <div className="relative h-[300px] w-[300px]">
                                {/* Outer ring */}
                                <div className="absolute inset-0 rounded-full border border-white/[0.07]" />

                                {/* Inner ring */}
                                <div className="absolute inset-[42px] rounded-full border border-white/[0.06]" />

                                {/* Rotating arc */}
                                <div className="hero-orbit absolute inset-[-1px] rounded-full border border-transparent border-t-[#4cc9ff]/50 border-r-[#4cc9ff]/10" />

                                {/* Center */}
                                <div className="absolute inset-[86px] flex items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.015] backdrop-blur-sm">
                                    <div className="text-center">
                                        <span className="block text-[9px] uppercase tracking-[0.3em] text-white/30">
                                            Focus
                                        </span>

                                        <span className="mt-2 block font-[var(--font-sora)] text-2xl font-medium tracking-tight text-white">
                                            SECURE
                                        </span>
                                    </div>
                                </div>

                                {/* Orbit points */}
                                <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#4cc9ff]" />

                                <span className="absolute bottom-[18%] right-[4%] h-1 w-1 rounded-full bg-white/40" />

                                <span className="absolute bottom-[18%] left-[4%] h-1 w-1 rounded-full bg-white/20" />

                                {/* Labels */}
                                <div className="absolute -right-20 top-16 hidden text-[9px] uppercase tracking-[0.2em] text-white/25 xl:block">
                                    Cloud
                                </div>

                                <div className="absolute -left-20 bottom-16 hidden text-[9px] uppercase tracking-[0.2em] text-white/25 xl:block">
                                    Security
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom metadata */}
                <div className="hero-meta grid grid-cols-2 items-end border-t border-white/[0.08] pt-4 text-[9px] uppercase tracking-[0.22em] text-white/25 sm:grid-cols-3">
                    <div>
                        <span className="text-white/45">Based in</span>
                        <br />
                        Andhra Pradesh, India
                    </div>

                    <div className="hidden text-center sm:block">
                        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#4cc9ff]" />
                        Available for opportunities
                    </div>

                    <div className="text-right">
                        <span className="text-white/45">01</span>
                        <span className="mx-1">/</span>
                        05
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
                <span className="text-[8px] uppercase tracking-[0.3em] text-white/20">
                    Scroll
                </span>

                <span className="relative h-8 w-px overflow-hidden bg-white/10">
                    <span className="hero-scroll-line absolute left-0 top-0 h-3 w-px bg-white/60" />
                </span>
            </div>
        </section>
    );
}