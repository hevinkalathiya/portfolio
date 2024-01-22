"use client";

import Hero from "@/components/Hero";
import Socials from "@/components/Socials";
import Workexperience from "@/components/Workexperience";
import Projects from "./projects/page";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Socials />
      {/* <Workexperience /> */}
      <Projects />
    </div>
  );
}
