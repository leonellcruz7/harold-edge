import Details from "@/components/details/Details";
import Form from "@/components/form/Form";
import Fourth from "@/components/fourth/Fourth";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import People from "@/components/people/People";
import Second from "@/components/second/Second";
import Third from "@/components/third/Third";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="content">
        <Hero />
        <Second />
        <Third />
        <Fourth />
        <Form />
        <People />
        <Details />
      </div>
    </div>
  );
}
