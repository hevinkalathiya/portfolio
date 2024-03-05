"use client";

import Heading from "@/components/Heading";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { projects } from "@/components/Projects";
import { Slide } from "@/components/Slide";
import { PinContainer } from "@/components/ui/3d-pin";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const Projects = () => {
  return (
    <MaxWidthWrapper className="mx-auto">
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

        <div className="grid xl:grid-cols-2 md:grid-cols-2 gap-16 my-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
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
}: {
  title: string;
  description: string;
  imageLogo: string;
  link: string;
}) => {
  return (
    // <Link href={link}>
    <div className="h-[30rem] w-full flex items-center justify-center ">
      <PinContainer title={title} href={link}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[30rem] h-[30rem] ">
          <h3 className="max-w-xs !py-2 !m-0 font-bold  text-base text-slate-800 dark:text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">{description}</span>
          </div>
          <Image
            className="flex flex-1 w-auto rounded-lg mt-4 overflow-auto"
            src={imageLogo}
            alt={title}
            width={1366}
            height={1366}
          />
        </div>
      </PinContainer>
    </div>
    // </Link>
  );
};

export default Projects;
