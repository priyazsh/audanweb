"use client";

import { ModalProvider } from "@/lib/useModal";
import ContactModal from "@/components/ContactModal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Work from "@/components/Work";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ModalProvider>
      <main className="bg-white text-fg overflow-x-hidden">
        <Navbar />
        <Hero />
        <Ticker />
        <Stats />
        <Services />
        <Work />
        <FinalCTA />
        <Footer />
      </main>
      <ContactModal />
    </ModalProvider>
  );
}
