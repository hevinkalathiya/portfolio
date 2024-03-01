import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { RoughNotation } from "react-rough-notation";
import { Slide } from "./Slide";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <MaxWidthWrapper className="mx-auto">
      <div
        className={`block md:flex items-center py-8 px-2 mt-16 ${theme === "dark" ? "dark" : ""
          }`}
      >
        <div className="w-full md:w-7/12">
          <Slide>
            <h1
              className={cn(
                "text-3xl md:text-5xl1 font-bold dark:text-white text-gray-800"
              )}
            >
              <RoughNotation
                animationDelay={1000}
                color="#fff"
                type="underline"
                show={true}
              >
                <ReactTyped
                  strings={["नमस्ते", "Hello", "Hola", "Olá"]}
                  loop
                  shuffle
                  cursorChar=" | "
                  typeSpeed={300}
                />
                I&apos;m Hevin 🎄
              </RoughNotation>
            </h1>

            <p
              className={cn(
                "text-base md:text-lg mt-4 dark:text-gray-300 text-gray-600"
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
                  className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                  <div
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] "
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
