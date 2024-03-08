/* eslint-disable @next/next/no-img-element */
"use client";

import Heading from "@/components/Heading";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { projects } from "@/components/Projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Link } from "lucide-react";
import React, { useState } from "react";

interface IParams {
  project: string;
}

const Page = ({ params }: { params: IParams }) => {
  const filtered = projects.filter(
    (project) => params.project === project.name
  );

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const wrappers = document.querySelectorAll(
    ".card-img-wrapper"
  ) as NodeListOf<HTMLDivElement>;
  const images = document.querySelectorAll(
    ".card-image"
  ) as NodeListOf<HTMLImageElement>;
  const handleMouseEnter = (index: any) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <MaxWidthWrapper className="mx-auto">
      {filtered.map((project, index) => {
        const divWrapper = wrappers[index];
        const img = images[index];
        const isHovered = index === hoveredIndex;
        return (
          <React.Fragment key={project.liveLink}>
            <div className="block md:flex space-y-5 md:space-y-0 justify-between mt-0 md:mt-10 animate-fade-down animate-duration-[1500ms]">
              <h1 className="text-4xl font-bold">{project.title}</h1>
              <div className="">
                <Button
                  variant="outline"
                  className="mr-5"
                  onClick={() => window.open(project.liveLink, "_blank")}
                >
                  Live Demo
                  <Link
                    to={project.liveLink}
                    className="ml-2 font-medium text-xl"
                  />
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => window.open(project.githubLink, "_blank")}
                >
                  Github
                  <Github
                    to={project.githubLink}
                    className="ml-2 font-medium text-xl "
                  />
                </Button>
              </div>
            </div>
            <div className="overflow-hidden card-img-wrapper h-[200px] md:h-[500px] rounded-xl my-10 m-2 border border-gray-800 dark:border-white animate-fade-up animate-duration-[1500ms]">
              <img
                src={project.imageSrc}
                className="card-image w-full duration-2000 rounded-lg cursor-pointer hover:shadow-xl"
                alt={project.title}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `translateY(${
                    isHovered
                      ? -(img.height - divWrapper?.clientHeight) + "px"
                      : "0px"
                  })`,
                }}
              />
            </div>
            <hr className="my-8" />
            <Heading title="Description   🔮" titleClassName="text-3xl" />
            <li className="text-xl">{project.description}</li>
            <hr className="my-8" />
            <Heading title="Tech-Stack   ⛳" titleClassName="text-3xl " />
            {project.techStack.map((tech) => (
              <Badge variant="outline" key={tech} className="mt-3 mr-5">
                {tech}
              </Badge>
            ))}
          </React.Fragment>
        );
      })}
    </MaxWidthWrapper>
  );
};

export default Page;
