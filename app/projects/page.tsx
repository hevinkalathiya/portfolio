import Heading from "@/components/Heading";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { projects } from "@/components/Projects";
import { Slide } from "@/components/Slide";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <MaxWidthWrapper className="mx-auto">
      <Slide delay={0.17}>
        <Heading
          title="Projects  ✨"
          titleClassName="text-4xl mt-20 animate-fade-down animate-duration-[1500ms]"
        />
        <div className="grid xl:grid-cols-2 md:grid-cols-2  gap-5 my-12">
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
    <Link
      key={link}
      href={link}
      className="flex items-center gap-x-4 dark:bg-transparent bg-zinc-50  border border-gray-500 dark:hover:border-gray-100 hover:border-zinc-200 p-4 rounded-lg hover:shadow-xl dark:hover:shadow-sm  hover:duration-300 hover:ease-in-out hover:transform  dark:shadow-white animate-fade-up animate-duration-[1500ms] hover:bg-background"
    >
      <Image
        alt={title}
        loading="lazy"
        src={imageLogo}
        width="100"
        height="100"
        decoding="async"
        data-nimg="1"
        className="dark:bg-transparent bg-zinc-100 rounded-md p-2"
      />
      <div>
        <h2 className="text-lg tracking-wide mb-1">{title}</h2>
        <div className="text-sm dark:text-zinc-400 text-zinc-600">
          {description}
        </div>
      </div>
    </Link>
  );
};

export default Projects;
