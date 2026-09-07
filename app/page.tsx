import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import LiveWalkthrough from "@/components/LiveWalkthrough";
import Challenge from "@/components/Challenge";
import ProcessSteps from "@/components/ProcessSteps";
import WhatWeDo from "@/components/WhatWeDo";
import CommandCenter from "@/components/CommandCenter";
import WhyChooseUs from "@/components/WhyChooseUs";
import Proof from "@/components/Proof";
import Offer from "@/components/Offer";
import About from "@/components/About";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <LiveWalkthrough />
        <Challenge />
        <ProcessSteps />
        <WhatWeDo />
        <CommandCenter />
        <WhyChooseUs />
        <Proof />
        <Offer />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
