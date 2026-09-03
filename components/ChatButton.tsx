"use client";

import { MessageCircle } from "lucide-react";
import { useModal } from "@/lib/useModal";

export default function ChatButton() {
  const { open } = useModal();

  return (
    <button
      type="button"
      onClick={open}
      id="chat-button"
      className="fixed z-40 inline-flex items-center gap-3 bg-white border border-gray-200 text-ink pl-4 pr-1.5 py-1.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-xl hover:-translate-y-1 transition-all group"
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        left: "auto",
        top: "auto",
      }}
    >
      <span className="font-semibold text-xs">Chat with us</span>
      <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center group-hover:scale-110 transition-transform">
        <MessageCircle className="w-4 h-4" />
      </div>
    </button>
  );
}
