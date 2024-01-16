"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import Workexperience from "@/components/Workexperience";

export default function Home() {
  return (
    <div className="max-w-4xl flex flex-col mx-auto">
      <Navbar />
      <Hero />
      <Socials />
      <Workexperience />
    </div>
  );
}
