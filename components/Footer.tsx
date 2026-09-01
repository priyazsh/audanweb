import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 select-none">
          <Image
            src="/favicon/apple-touch-icon.png"
            alt="AudanWeb"
            width={20}
            height={20}
            className="rounded-md opacity-60"
          />
          <span className="text-white/40 text-xs font-semibold tracking-[0.1em] uppercase">
            AudanWeb
          </span>
        </Link>

        <p className="text-white/20 text-[11px] tracking-wider uppercase">
          © {new Date().getFullYear()} · Internet-Native Growth Studio
        </p>

        {/* Links */}
        <div className="flex items-center gap-5 text-[11px] font-medium tracking-wide uppercase text-white/30">
          <a href="#work" className="hover:text-white/70 transition-colors">Work</a>
          <a href="#stats" className="hover:text-white/70 transition-colors">Stats</a>
          <a href="mailto:hello@audanweb.xyz" className="hover:text-white/70 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
