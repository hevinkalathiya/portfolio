import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Slide } from "./Slide";
const data = [
  {
    id: 3,
    companyLogo: "/images/upwork.png",
    companyName: "Upwork",
    position: "Fullstack Devloper",
    startDate: "dec, 2023",
    endDate: "Present",
    description:
      "Created company's in-house website using Next.js from scratch which has increased traffic by 200%. Developed Admin panel of a game using Node.js. Currently working on a React.js project.",
  },
  {
    id: 1,
    companyLogo: "/images/beit-logo.jpg",
    companyName: "BigElement IT Solutions",
    position: "JR Frontend Developer",
    startDate: "Jun, 2023",
    endDate: "Present",
    description:
      "I specialize in crafting healthcare websites with React.js, adept at building efficient admin panels and optimizing for speed and responsiveness. With a focus on managing large datasets, I ensure a seamless user experience and robust performance.",
  },
  {
    id: 2,
    companyLogo: "/images/softices-logo.jpg",
    companyName: "Softices",
    position: "Frontend Intern",
    startDate: "Sep, 2022",
    endDate: "Jun, 2023",
    description:
      "Mastering advanced concepts such as React Hooks, Redux for state management, and implementing sophisticated frontend architectures.",
  },
];

const Workexperience = () => {
  return (
    <MaxWidthWrapper className="mx-auto">
      <Slide delay={0.17}>
        <div className="py-10 px-2">
          <Heading
            title={"Work Experience 🎢"}
            titleClassName="text-4xl mt-0 md:mt-20 mb-10 animate-fade-down animate-duration-[1500ms]"
          />
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
            {data.map((data) => (
              <div
                key={data.id}
                className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200"
              >
                <a
                  href={"data.url"}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative"
                >
                  <Image
                    src={data.companyLogo}
                    className="object-cover duration-300"
                    alt={`${data.companyName} logo`}
                    width={50}
                    height={50}
                  />
                </a>
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-bold">{data.companyName}</h3>
                  <p>{data.position}</p>
                  <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                    {`${data.startDate} - `}
                    <span className="dark:text-primary-color text-tertiary-color">
                      {data.endDate}
                    </span>
                  </time>
                  <p className="tracking-tight dark:text-zinc-400 text-zinc-600 my-4">
                    {data.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Slide>
    </MaxWidthWrapper>
  );
};

export default Workexperience;
