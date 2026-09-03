"use client";

import { ModalProvider } from "@/lib/useModal";
import ContactModal from "@/components/ContactModal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";

export default function Home() {
  return (
    <ModalProvider>
      <main className="relative overflow-x-hidden">
        <Navbar />
        <Hero />
        <Ticker />
        <Stats />
        <About />
        <Services />
        <Work />
        <FAQ />
        <FinalCTA />
        <Footer />
        <ChatButton />
      </main>
      <ContactModal />
    </ModalProvider>
  );
}
