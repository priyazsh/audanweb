import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-fg text-white border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-16 border-b border-white/10">
          {/* Brand info */}
          <div className="md:col-span-6 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-white font-black text-sm tracking-[0.2em] uppercase select-none hover:text-accent transition-colors"
            >
              <Image
                src="/favicon/apple-touch-icon.png"
                alt="AudanWeb Logo"
                width={26}
                height={26}
                className="rounded-md"
              />
              <span>AUDANWEB</span>
            </Link>
            <p className="text-white/40 text-sm font-light max-w-xs">
              Helping great products get noticed through authentic promotion and internet-native distribution.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-6 flex flex-wrap gap-12 md:justify-end text-xs font-semibold tracking-widest uppercase">
            <div className="space-y-3">
              <p className="text-white/20 text-[10px]">Navigation</p>
              <ul className="space-y-2.5">
                <li>
                  <a href="#work" className="text-white/70 hover:text-accent transition-colors">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#stats" className="text-white/70 hover:text-accent transition-colors">
                    Stats
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/70 hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-white/20 text-[10px]">Connect</p>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://x.com/audenweb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    X / Twitter ↗
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@audanweb.xyz" className="text-white/70 hover:text-accent transition-colors">
                    Email ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/30 font-medium gap-4">
          <p>© {new Date().getFullYear()} AudanWeb. All rights reserved.</p>
          <p className="text-[10px] tracking-wider uppercase text-white/20">
            Internet-Native Growth Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
