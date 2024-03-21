import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Slide } from "./Slide";
import Link from "next/link";

function Badge(props: any) {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/50 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    />
  );
}

const Hero = () => {
  const { theme } = useTheme();

  return (
    <MaxWidthWrapper className="mx-auto ">
      <div
        className={`block md:flex items-center py-8 px-2 mt-0 md:mt-10 ${
          theme === "dark" ? "dark" : ""
        }`}
      >
        <div className="w-full md:w-7/12">
          <Slide>
            <h1
              className={cn(
                "text-3xl md:text-4xl font-bold dark:text-white text-gray-800"
              )}
            >
              नमस्ते 👋 I&apos;m Hevin 🎄
            </h1>

            <p className="prose prose-neutral dark:prose-invert text-base md:text-lg mt-8">
              I am a passionate software developer with expertise in web development. I love building scalable and performant applications using modern technologies. My skills include <Badge href="https://www.typescriptlang.org/">
                <Image
                  alt="Typescript"
                  src="/images/typescript-icon.svg"
                  className="!mr-1"
                  width="14"
                  height="14"
                />
                <span className="">Typescript</span>
              </Badge>, <Badge href="https://react.dev">
                <Image
                  alt="Nodelogomark"
                  src="/images/react.svg"
                  className="!mr-1"
                  width="14"
                  height="14"
                />
                <span className="">React</span>
              </Badge>, <Badge href="https://nodejs.org/en">
                <Image
                  alt="Nodelogomark"
                  src="/images/node-js.svg"
                  className="!mr-1"
                  width="14"
                  height="14"
                />
                <span className="">Node</span>
              </Badge>, <Badge href="https://nextjs.org">
                <Image
                  alt="Next JS"
                  src="/images/nextjs.svg"
                  className="!mr-1"
                  width="14"
                  height="14"
                />
                <span className="">Next JS</span>
              </Badge>, and more. Let&aphos;s create something amazing together!
              
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
