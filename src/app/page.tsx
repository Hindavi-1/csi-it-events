import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventSection from "@/components/EventSection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div >
      <Navbar/>
      <HeroSection/>
      <EventSection/>
      <SponsorsSection/>
      <Footer/>
      {/* <main className={styles.main}>
        
      </main>
      <footer className={styles.footer}>
       
      </footer> */}
    </div>
  );
}
