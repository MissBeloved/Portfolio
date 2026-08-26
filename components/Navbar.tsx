"use client";

import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 md:px-10">
      <nav
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          rounded-full
          border
          border-white/10
          bg-black/40
          px-5
          py-3
          backdrop-blur-xl
        "
      >
        {/* Logo */}
        <a
          href="#top"
          onClick={() => setMenuOpen(false)}
          className="
            font-[var(--font-sora)]
            text-lg
            font-semibold
            tracking-tight
            text-white
          "
        >
          SD<span className="text-[#4cc9ff]">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                group
                relative
                py-2
                text-sm
                text-white/60
                transition-colors
                duration-300
                hover:text-white
              "
            >
              <span>{item.label}</span>

              {/* Full-word underline */}
              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-full
                  origin-left
                  scale-x-0
                  bg-[#4cc9ff]
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:scale-x-100
                "
              />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="
            hidden
            rounded-full
            border
            border-[#4cc9ff]/40
            bg-[#4cc9ff]/10
            px-5
            py-2
            text-sm
            text-[#4cc9ff]
            transition-colors
            duration-300
            hover:bg-[#4cc9ff]
            hover:text-black
            md:block
          "
        >
          Let&apos;s Connect
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            text-white
            transition-colors
            duration-300
            hover:border-white/20
            md:hidden
          "
        >
          <span
            className="
              text-xl
              leading-none
              transition-transform
              duration-300
            "
          >
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        className={`
          mx-auto
          max-w-7xl
          overflow-hidden
          transition-all
          duration-300
          md:hidden
          ${menuOpen
            ? "mt-3 max-h-[500px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-[#080b10]/95
            p-3
            shadow-2xl
            backdrop-blur-xl
          "
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="
                group
                flex
                items-center
                justify-between
                rounded-2xl
                px-4
                py-4
                text-sm
                text-white/70
                transition-colors
                duration-200
                hover:bg-white/5
                hover:text-white
              "
            >
              <span>{item.label}</span>

              <span
                className="
                  text-white/20
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-[#4cc9ff]
                "
              >
                ↗
              </span>
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="
    mt-1
    flex
    h-11
    items-center
    justify-center
    rounded-2xl
    bg-[#f5f5f2]
    text-xs
    font-semibold
    !text-[#05070a]
    transition-all
    duration-300
    hover:bg-[#4cc9ff]
    hover:!text-[#05070a]
  "
          >
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </header>
  );
}