import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
export default function Home() {
  return (
    <div
      className={`${inter.className} ${playfair.variable} min-h-screen flex flex-col`}
    >
      <Navbar />
      <main className="flex-1 text-justify">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
