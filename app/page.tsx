"use client";

import Hero from "@/components/Hero";
import Socials from "@/components/Socials";
import Workexperience from "@/components/Workexperience";
import Projects from "./projects/page";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col ">
      {/* <div className="absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 "> */}
      <Hero />
      <Socials />
      <Workexperience />
      <Projects />
      <div className="h-[40rem] w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            Subscribe to my newsletter
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Unlock the benefits of subscribing to our newsletter! Stay informed
            with exclusive updates, special offers, and exciting news. Be the
            first to know about our latest features and promotions. Join now and
            experience the advantages of being part of our community.
          </p>

          <Input
            type="text"
            placeholder="hevinatwork@gmail.com"
            className="rounded-lg border pr-2 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 h-10 bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
        <BackgroundBeams className="bg-transparent" />
      </div>
    </div>
  );
}
