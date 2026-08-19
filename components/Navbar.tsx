import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[#012169]"
        >
          Tasnuba Islam
        </Link>

        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="text-sm font-medium text-slate-700 hover:text-[#012169]"
          >
            Home
          </Link>

          <Link
            href="/#research"
            className="text-sm font-medium text-slate-700 hover:text-[#012169]"
          >
            Research
          </Link>

          <Link
            href="/#publications"
            className="text-sm font-medium text-slate-700 hover:text-[#012169]"
          >
            Publications
          </Link>

          <Link
            href="/#projects"
            className="text-sm font-medium text-slate-700 hover:text-[#012169]"
          >
            Projects
          </Link>

          <Link
            href="/#experience"
            className="text-sm font-medium text-slate-700 hover:text-[#012169]"
          >
            Experience
          </Link>

          <Link
            href="/#contact"
            className="text-sm font-medium text-slate-700 hover:text-[#012169]"
          >
            Contact
          </Link>

          <a
            href="https://drive.google.com/file/d/15x0ffXi4vHaAWisBsUPTpSzlvJAuUGXh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#012169] px-4 py-2 text-sm font-semibold text-white hover:bg-[#001a52]"
          >
            CV
          </a>

        </div>
      </nav>
    </header>
  );
}