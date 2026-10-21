import { Header } from "@/components/Header";
import { RevealObserver } from "@/components/Reveal";
import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Clients } from "@/components/sections/Clients";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Approach />
        <WhyUs />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
