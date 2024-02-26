"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { RoughNotation } from "react-rough-notation";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const pathname = usePathname();

  const isActive = pathname?.includes("/projects");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const pathName = usePathname();

  const navigateTo = (path: string) => {
    router.push(path);
  };
  return (
    <>
      {/* <header className="hidden md:block">
        <h1 className="text-3xl font-bold text pt-8 pb-8">
          <span className="pr-3">🧿</span>
          Hevin Kalathiya
        </h1>
      </header> */}
      <div
        className={cn(
          "backdrop-blur-lg fixed md:sticky  w-full animate-fade-down animate-duration-[1500ms]"
        )}
      >
        <MaxWidthWrapper className="mx-auto ">
          <nav
            className={cn(
              "z-50 w-full flex justify-between backdrop-blur-lg items-center  py-4 border-gray-600 "
            )}
          >
            <ul className="flex gap-4 md:gap-10 text-base md:text-xl font-medium pl-1">
              <RoughNotation
                // animationDelay={1000}
                color="#FFFF00"
                type="box"
                show={pathName === "/"}
              >
                <li
                  className={cn(" cursor-pointer")}
                  onClick={() => navigateTo("/")}
                >
                  Home
                </li>
              </RoughNotation>
              <RoughNotation
                // animationDelay={1000}
                color="#8300FF"
                type="box"
                show={pathName === "/about"}
              >
                <li
                  className={cn("cursor-pointer")}
                  onClick={() => navigateTo("/about")}
                >
                  About
                </li>
              </RoughNotation>
              <RoughNotation
                // animationDelay={1000}
                color="#00FF00"
                type="box"
                show={pathName === "/blog"}
              >
                <li
                  className={cn("cursor-pointer")}
                  onClick={() => navigateTo("/blog")}
                >
                  Blog
                </li>
              </RoughNotation>
              <RoughNotation
                // animationDelay={1000}
                color="red"
                type="box"
                show={pathName.includes("/projects")}
              >
                <li
                  className={cn("cursor-pointer")}
                  onClick={() => navigateTo("/projects")}
                >
                  Projects
                </li>
              </RoughNotation>
              <RoughNotation
                // animationDelay={1000}
                color="green"
                type="box"
                show={pathName.includes("/hire-me")}
              >
                <li
                  className={cn("cursor-pointer")}
                  onClick={() => navigateTo("/hire-me")}
                >
                  Hire Me 💸
                </li>
              </RoughNotation>

              {/* <li className="border-b-2 border-transparent hover:border-b-2 hover:border-green-500 cursor-pointer">
                Github
              </li> */}
            </ul>
            <div className="">
              <Button
                className="relative"
                variant="ghost"
                onClick={toggleTheme}
              >
                <Sun
                  className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ${theme === "dark" ? "dark:-rotate-90 dark:scale-0" : ""
                    }`}
                />
                <Moon
                  className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${theme === "dark" ? "dark:rotate-0 dark:scale-100" : ""
                    }`}
                />
              </Button>
            </div>
          </nav>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Navbar;
