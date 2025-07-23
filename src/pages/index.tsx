import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});
export default function Home() {
  return (
    <main className={`${inter.className} ${playfair.variable}`}>
     <Navbar/>
    </main>
  );
}
