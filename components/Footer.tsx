"use client";

import Image from "next/image";
import { useModal } from "@/lib/useModal";

type FooterLink = {
  label: string;
  href: string;
};

const quickLinks: FooterLink[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

function FooterColumn({
  title,
  links,
  onCta,
}: {
  title: string;
  links: FooterLink[];
  onCta?: () => void;
}) {
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href === "#contact") {
      e.preventDefault();
      onCta?.();
      return;
    }
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <div>
      <div className="text-sm font-semibold text-ink mb-5">{title}</div>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm text-gray-600 hover:text-ink transition-colors"
              onClick={(e) => handleAnchorClick(e, link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const { open } = useModal();

  return (
    <footer className="relative border-t border-gray-200 pt-20 pb-20 overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-ink">
                Now taking campaigns
              </span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
                <Image
                  src="/favicon/apple-touch-icon.png"
                  alt="AudanWeb"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <div className="font-heading font-semibold text-ink text-lg leading-tight">
                  AudanWeb
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 max-w-sm">
              Internet-native growth studio. Authentic creator promotions for
              products that deserve attention.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
              <FooterColumn title="Quick Links" links={quickLinks} />
              <FooterColumn
                title="Contact"
                onCta={open}
                links={[
                  { label: "Start a campaign", href: "#contact" },
                  { label: "Email", href: "mailto:hello@audanweb.xyz" },
                  { label: "@audanweb", href: "https://x.com/audanweb" },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500">
              © {year} AudanWeb. All rights reserved.
            </div>
            <button
              onClick={open}
              className="text-sm text-gray-600 hover:text-ink transition-colors font-medium"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
