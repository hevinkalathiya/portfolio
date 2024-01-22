import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <MaxWidthWrapper  className="mx-auto">
      <div
        className={`block md:flex items-center py-8 px-2 mt-16 ${
          theme === "dark" ? "dark" : ""
        }`}
      >
        <div className="w-full md:w-7/12">
          <h1
            className={cn(
              "text-3xl md:text-5xl1 font-bold dark:text-white text-gray-800"
            )}
          >
            Hellow, I&apos;m Hevin 🎄
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
        </div>
        <div className="w-full md:w-5/12 ">
          <Image
            className="m-auto md:ml-auto"
            src="/images/hero_image.png"
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Hero;
