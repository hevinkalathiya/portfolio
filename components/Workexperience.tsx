import Image from "next/image";
import React from "react";
import Heading from "./Heading";
const data = [
  {
    id: 1,
    companyLogo: "/images/beit-logo.jpg",
    companyName: "BigElement IT Solutions",
    position: "JR Frontend Developer",
    startDate: "Jun, 2023",
    endDate: "January, 2024",
    description:
      "Created company's in-house website using Next.js from scratch which has increased traffic by 200%. Developed Admin panel of a game using Node.js. Currently working on a React.js project.",
  },
  {
    id: 2,
    companyLogo: "/images/softices-logo.jpg",
    companyName: "Softices",
    position: "Frontend Intern",
    startDate: "Sep, 2022",
    endDate: "Jun, 2023",
    description:
      "Created company's in-house website using Next.js from scratch which has increased traffic by 200%. Developed Admin panel of a game using Node.js. Currently working on a React.js project.",
  },
];

const Workexperience = () => {
  return (
    <div className="py-10 px-2">
      <Heading title={"Work Experience"} />
      <div className="">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex mt-5 items-start lg:gap-x-6 gap-x-4 max-w-2xl md:relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200"
          >
            <a
              href=""
              rel="noreferrer noopener"
              target="_blank"
              className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip md:relative"
            >
              <Image
                alt="G4GAME logo"
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                className="object-cover duration-300"
                style={{ color: "transparent" }}
                src={item.companyLogo}
              />
            </a>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-bold">{item.companyName}</h3>
              <p>{item.position}</p>
              <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                {`${item.startDate} - `}
                <span className="dark:text-primary-color text-tertiary-color">
                  {item.endDate}
                </span>
              </time>
              <p className="tracking-tight dark:text-zinc-400 text-zinc-600 my-4">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workexperience;
