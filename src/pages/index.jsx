import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="mt-12 md:mt-16">
        <Hero />
      </div>
    </div>
  );
}
