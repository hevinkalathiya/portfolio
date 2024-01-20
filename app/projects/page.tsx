import Heading from "@/components/Heading";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Tour Managment",
    description: "This is Tour Managment App",
    imageSrc: "/images/hero_image.png",
    name: "tour-managment",
    link: "/projects/airbnb",
    githubLink: "",
    liveLink: "",
  },
  {
    id: 2,
    title: "Airbnb",
    description: "The Ai Web-App for you to talk with your PDFs",
    imageSrc: "/images/hero_image.png",
    name: "Airbnb",
    link: "/projects/tour-managment",
    githubLink: "",
    liveLink: "",
  },
  {
    id: 3,
    title: "Airbnb",
    description: "The Ai Web-App for you to talk with your PDFs",
    imageSrc: "/images/hero_image.png",
    name: "Airbnb",
    link: "/projects/tour-managment",
    githubLink: "",
    liveLink: "",
  },
];

const page = () => {
  return (
    <MaxWidthWrapper className="mx-auto">
      <Heading title="Ideas  ✨" center titleClassName="text-4xl mt-8 " />
      <div className="grid xl:grid-cols-2 md:grid-cols-1  gap-5 mb-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

const ProjectCard = ({
  title,
  description,
  imageSrc,
  link,
}: {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}) => {
  return (
    <Link
      key={link}
      href={link}
      className="flex items-center gap-x-4 dark:bg-transparent bg-zinc-50  border border-gray-200 dark:hover:border-gray-700 hover:border-zinc-200 p-4 rounded-lg hover:shadow-xl dark:hover:shadow-sm  hover:duration-300 hover:ease-in-out hover:transform hover:scale-105 dark:shadow-white "
    >
      <Image
        alt={title}
        loading="lazy"
        src={imageSrc}
        width="60"
        height="60"
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

export default page;
