import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div>
        <Hero />
      </div>
    </div>
  );
}
