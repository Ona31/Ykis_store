// la home page de l'application
// ----------------------------


import Footer from "../../Components/layout/Footer.tsx";
import AboutSection from "./sections/AboutSection.tsx";
import HeroSection from "./sections/HeroSection.tsx";
import LocatConactSection from "./sections/LocatContact.tsx";
import ServiceSection from "./sections/ServiceSection.tsx";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full min-h-screen  scroll-smooth antialiased">
      <HeroSection/>
     
 {/* About */}
    <AboutSection/>

      {/* SERVICES */}
    <ServiceSection/>

      {/* CONTACT */}
      <LocatConactSection/>
      <Footer/>
    </main>
  );
}