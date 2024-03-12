import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Slide } from "./Slide";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <MaxWidthWrapper className="mx-auto ">
      <div
        className={`block md:flex items-center py-8 px-2 mt-0 md:mt-10 ${theme === "dark" ? "dark" : ""
          }`}
      >
        <div className="w-full md:w-7/12">
          <Slide>
            <h1
              className={cn(
                "text-3xl md:text-5xl font-bold dark:text-white text-gray-800"
              )}
            >
              नमस्ते 👋 I&apos;m Hevin 🎄
            </h1>

            <p
              className={cn(
                "text-base md:text-xl mt-8 dark:text-gray-300 text-gray-600"
              )}
            >
              Explore my digital sanctuary where creativity and innovation
              intertwine. I&apos;m Hevin, your guide on this coding odyssey,
              sharing thoughts and passion projects. Join me – let&apos;s delve
              into the depths of my world 🌎
            </p>
          </Slide>
        </div>
        <div className="w-full md:w-5/12 mt-10 md:mt-0">
          <Slide>
            <div>
              <div className="relative isolate">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 -top-16 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-28 "
                >
                  <div
                    style={{
                      clipPath:
                        "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)",
                    }}
                    className="relative blur-xl left-[calc(50%-1rem)] aspect-[1000/1100]  -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500/90 to-purple-500 opacity-30 sm:left-[calc(50%-1rem)] animate-shimmer"
                  />
                </div>

                <div>
                  <div className="mx-auto h-80 w-80 px-6 lg:px-8">
                    <div className="flow-root">
                      <div className="-m-2 rounded-xl bg-gray-900/5 dark:bg-slate-300/10 p-2 ring-1 ring-inset ring-gray-900/10 dark:ring-slate-500/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                        <Image
                          src="/images/hero_image.png"
                          alt="product preview"
                          width={200}
                          height={200}
                          quality={100}
                          className="w-full rounded-md bg-white dark:bg-black shadow-2xl ring-1 ring-gray-900/10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Hero;
