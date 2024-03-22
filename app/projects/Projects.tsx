"use client";

import Heading from "@/components/Heading";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { projects } from "@/components/Projects";
import { Slide } from "@/components/Slide";
import { PinContainer } from "@/components/ui/3d-pin";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <MaxWidthWrapper className="mx-auto p-2">
      <Slide delay={0.17}>
        <Heading
          title="Projects  ✨"
          titleClassName="text-4xl mt-0 md:mt-20 animate-fade-down animate-duration-[1500ms]"
        />
        <p className="text-xl mt-0 md:mt-8 text-slate-500 dark:text-slate-300">
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas on how it can be
          improved.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-14 my-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Slide>
    </MaxWidthWrapper>
  );
};

const ProjectCard = ({
  title,
  description,
  imageLogo,
  link,
  techStack,
}: {
  title: string;
  description: string;
  imageLogo: string;
  link: string;
  techStack: string[];
}) => {
  return (
    <Link href={link}>
      <div className="rounded-xl bg-gray-900/5 hover:bg-gray-900/10 duration-500 dark:bg-slate-500/10 hover:dark:bg-slate-500/40 p-5 ring-1 ring-inset ring-gray-900/10 dark:ring-slate-500/10 lg:-m-4 lg:rounded-2xl h-[23rem] md:h-[30rem] lg:p-6">
        <img
          src={imageLogo}
          alt="product preview"
          width={200}
          height={200}
          className="w-full rounded-md h-56 md:h-80 bg-white dark:bg-black shadow-2xl ring-1 ring-gray-900/10"
        />
        <div className="mt-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-lg mt-2 text-slate-500 dark:text-slate-300">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Projects;
