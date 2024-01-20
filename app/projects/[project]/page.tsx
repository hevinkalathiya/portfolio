"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Github, Link } from "lucide-react";
import Image from "next/image";
import React from "react";

interface IParams {
  project: string;
}

const projects = [
  {
    id: 1,
    title: "Tour Managment",
    description: "This is Tour Managment App",
    imageSrc: "/images/hero_image.png",
    name: "tour-managment",
    githubLink: "",
    liveLink: "",
  },
  {
    id: 2,
    title: "Airbnb",
    description: "The Ai Web-App for you to talk with your PDFs",
    imageSrc: "/images/hero_image.png",
    name: "airbnb",
    githubLink: "",
    liveLink: "",
  },
];

const Page = ({ params }: { params: IParams }) => {
  const filtered = projects.filter(
    (project) => params.project === project.name
  );

  console.log(filtered);

  return (
    <MaxWidthWrapper className="mx-auto">
      {filtered.map((project) => (
        <React.Fragment key={project.liveLink}>
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <div className="">
              <Button variant="outline" className="mr-5">
                Live Demo
                <Link
                  to={project.liveLink}
                  className="ml-2 font-medium text-xl"
                />
              </Button>
              <Button variant="secondary">
                Github
                <Github
                  to={project.githubLink}
                  className="ml-2 font-medium text-xl"
                />
              </Button>
            </div>
          </div>
          <div className="p-4 bg-purple-500 rounded-xl ">
            <Image
              alt={project.title}
              loading="lazy"
              src={project.imageSrc}
              decoding="async"
              data-nimg="1"
              height={100}
              width={100}
              className="w-100 rounded-md p-2  bg-green-500 mx-auto"
            />
          </div>
          <div className=""></div>
        </React.Fragment>
      ))}
    </MaxWidthWrapper>
  );
};

export default Page;
