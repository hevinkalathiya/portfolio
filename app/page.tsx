"use client";

import Hero from "@/components/Hero";
import Socials from "@/components/Socials";
import Workexperience from "@/components/Workexperience";
import Projects from "./projects/page";

export default function Home() {
  return (
    <div className="flex flex-col ">
      {/* <div className="absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 "> */}
      <Hero />
      <Socials />
      {/* <Workexperience /> */}
      <Projects />
      {/* </div> */}
    </div>
  );
}
