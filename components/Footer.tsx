export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#05070a]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 md:px-10 lg:px-14">
        <span className="text-[9px] uppercase tracking-[0.22em] text-white/25">
          © {new Date().getFullYear()} Supriya Donga
        </span>

        <div className="flex items-center gap-5 text-[9px] uppercase tracking-[0.2em] text-white/25">
          <a
            href="#top"
            className="transition-colors duration-300 hover:text-[#4cc9ff]"
          >
            Back to top ↑
          </a>

          <span className="hidden text-white/10 sm:block">•</span>

          <span>Cybersecurity / Cloud / DevSecOps</span>
        </div>
      </div>
    </footer>
  );
}