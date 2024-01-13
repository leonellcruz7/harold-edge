import Modal from "@/components/Modal";
import Rsvp from "@/components/Rsvp";
import Navbar from "@/components/navbar/Navbar";
import Eight from "@/components/new/Eight";
import Fifth from "@/components/new/Fifth";
import Fourth from "@/components/new/Fourth";
import Hero from "@/components/new/Hero";
import Nineth from "@/components/new/Nineth";
import Second from "@/components/new/Second";
import Seventh from "@/components/new/Seventh";
import Sixth from "@/components/new/Sixth";
import Third from "@/components/new/Third";

import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showRsvp, setShowRsvp] = useState(false);
  return (
    <div className="relative">
      <Navbar handleShowRsvp={() => setShowRsvp(true)} />
      <div className="content relative">
        <Hero />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
        <Sixth />
        <Seventh />
        <Eight />
        <Nineth handleShowRsvp={() => setShowRsvp(true)} />
        {/* <Hero />
        <Second />
        <Third />
        <Fourth />
        <Form />
        <People />
        <Details /> */}
      </div>
      {showRsvp && <Rsvp handleClose={() => setShowRsvp(false)} />}
    </div>
  );
}
