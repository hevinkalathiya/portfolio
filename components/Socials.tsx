import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { FaStackOverflow } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Socials = () => {
  return (
    <MaxWidthWrapper className="mx-auto">
      <div className="flex flex-wrap p-2 items-center justify-center gap-7 mt-5 animate-fade-up animate-duration-[1500ms]">
        <div
          onClick={() => window.open("https://github.com/hevinkalathiya")}
          className={cn(
            "flex gap-2 cursor-pointer hover:scale-105 duration-300 hover:text-gray-600"
          )}
        >
          <Github />
          Github
        </div>
        <div
          onClick={() => window.open("https://www.linkedin.com/in/hevink")}
          className="flex gap-2 cursor-pointer hover:scale-105 duration-300 hover:text-blue-600"
        >
          <Linkedin />
          LinkedIn
        </div>
        <div
          onClick={() =>
            window.open(
              "https://stackoverflow.com/users/21934647/hevin-kalathiya-49"
            )
          }
          className="flex gap-2 cursor-pointer hover:scale-105 duration-300 hover:text-orange-400"
        >
          <FaStackOverflow size={26} />
          StackOverflow
        </div>
        <div
          onClick={() => window.open("https://twitter.com/Hevin_69")}
          className="flex gap-2 cursor-pointer hover:scale-105 duration-300 hover:text-[#1d9bf0]"
        >
          <Twitter />
          Twitter
        </div>
        <div
          onClick={() => window.open("https://medium.com/@hevinkalathiya123")}
          className="flex gap-2 cursor-pointer hover:scale-105 duration-300 hover:text-gray-700"
        >
          <FaMedium size={26} />
          Medium
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Socials;
