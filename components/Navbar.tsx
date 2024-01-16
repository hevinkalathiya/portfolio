"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <header className="hidden md:block">
        <h1 className="text-3xl font-bold text pt-8 pb-8">
          <span className="pr-3">🧿</span>
          Hevin Kalathiya
        </h1>
      </header>
      <nav
        style={{ backdropFilter: "blur(18px)" }}
        className={cn(
          "fixed md:relative w-full flex justify-between items-center border-b md:border-transparent p-4 border-gray-600"
        )}
      >
        <ul className="flex gap-4 md:gap-10 text-base md:text-xl font-medium pl-1">
          <li className="border-b-2 border-transparent hover:border-b-2 hover:border-purple-900 cursor-pointer">
            About
          </li>
          <li className="border-b-2 border-transparent hover:border-b-2 hover:border-cyan-500 cursor-pointer">
            Blog
          </li>
          <li className="border-b-2 border-transparent hover:border-b-2 hover:border-red-600 cursor-pointer">
            Projects
          </li>
          <li className="border-b-2 border-transparent hover:border-b-2 hover:border-green-500 cursor-pointer">
            Github
          </li>
        </ul>
        <div className="">
          <Button className="relative" variant="ghost" onClick={toggleTheme}>
            <Sun
              className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ${
                theme === "dark" ? "dark:-rotate-90 dark:scale-0" : ""
              }`}
            />
            <Moon
              className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${
                theme === "dark" ? "dark:rotate-0 dark:scale-100" : ""
              }`}
            />
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
