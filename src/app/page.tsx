import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Position from "@/components/Position";
import BeachNearby from "@/components/BeachNearby";
import Rooms from "@/components/Rooms";
import Services from "@/components/Services";
import Beach from "@/components/Beach";
import Gallery from "@/components/Gallery";
import Attractions from "@/components/Attractions";
import Booking from "@/components/Booking";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TulipDivider from "@/components/TulipDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatsAppButton />

      <Position />
      <div className="bg-white"><TulipDivider on="white" /></div>

      <BeachNearby />
      <div className="bg-cream"><TulipDivider on="cream" /></div>

      <Rooms />
      <div className="bg-cream"><TulipDivider on="cream" /></div>

      <Services />
      <div className="bg-white"><TulipDivider on="white" /></div>

      <Beach />
      <div className="bg-cream"><TulipDivider on="cream" /></div>

      <Gallery />
      <div className="bg-white"><TulipDivider on="white" /></div>

      <Attractions />

      <Booking />
      <div className="bg-warmDark"><TulipDivider on="dark" /></div>

      <Contacts />

      <Footer />
    </>
  );
}
