"use client";

import Heading from "@/components/Heading";
import Heroes from "@/components/Heroes";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Slide } from "@/components/Slide";
import TechList from "@/components/TechStack";
import { techItems } from "@/components/TechStackList";
import { Button } from "@/components/ui/button";
import { DownloadIcon, ExternalLink, Mail } from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <MaxWidthWrapper className="mx-auto">
      <div className="mt-0 md:mt-20 gap-y-10">
        <div className="md:flex flex-row-reverse block gap-5">
          <div className="w-full md:w-1/3 space-y-4">
            <Image
              src="/images/profile.png"
              alt="developer"
              width={300}
              height={300}
              className="border-gray-200 dark:border-gray-800 rounded-xl w-full"
            />
            <div className="flex gap-3 items-center justify-center">
              <Button
                className="w-full"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1WDmMtTII4mTD3H2OoKoH42Xh5KLNavoV/view?usp=sharing"
                  )
                }
                variant="outline"
              >
                View Resume
                <ExternalLink className="mx-2 h-5 w-5" />
              </Button>
              <a target="_blank" href="/images/Hevin_resume.pdf">
                <Button className="" variant="outline">
                  <DownloadIcon />{" "}
                </Button>
              </a>
            </div>
            <p className="flex items-center gap-3">
              <Mail className="h-5 w-5" />
              <a href="mailto:hevinatwork@gmail.com">hevinatwork@gmail.com</a>
            </p>
          </div>

          <div className="w-full md:w-2/3">
            <Slide>
              <Heading
                title={
                  "I'm Hevin Kalathiya. I live in India, where I build the future."
                }
                titleClassName="mb-5 text-xl mt-5 md:mt-0 md:text-5xl"
              />
            </Slide>
            <Slide>
              <div className="space-y-8">
                <p className="text-gray-600 dark:text-gray-400">
                  I am a self-driven, career-oriented software developer
                  specializing in Fullstack development and open-source with a
                  bachelors degree in computer science. My expertise lies in
                  building interactive web applications on the client side.
                  Primarily working with technologies like JavaScript, Next.js,
                  Node.js and PHP.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  I strongly believe in continuous learning and improving
                  myself, so I try my best to learn in any situation possible,
                  unfavorable or not.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Beyond learning, I enjoy writing technical articles and
                  creating projects that both inspire and benefit fellow
                  developers.
                </p>
                <blockquote className="relative overflow-hidden tracking-tight text-lg my-8 lg:py-6 lg:pl-6 pr-12 p-4 border dark:border-zinc-800 border-zinc-200 rounded-md">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-7xl absolute -top-7 -right-5 -rotate-12 dark:text-zinc-800 text-zinc-200"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                  </svg>
                  My passion lies in the art of turning innovative ideas into
                  tangible digital experiences, fueling my commitment to pushing
                  the boundaries of what is possible in the dynamic world of
                  development ✨✨✨.
                </blockquote>
                <h2
                  id="#Personal Expertise"
                  className="before:hidden hover:before:sm:inline-block hover:before:hidden before:absolute lg:before:-left-5 before:-left-4 lg:before:text-2xl before:text-xl block before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative font-bold tracking-tight dark:text-zinc-100 lg:text-4xl text-3xl text-zinc-700 my-8"
                >
                  <a href="#Personal Expertise">
                    <strong className="font-bold dark:text-zinc-300 text-zinc-700">
                      Personal Expertise
                    </strong>
                  </a>
                </h2>
                <p className="mt-2 mb-6">
                  Things I have developed from work and personal life :
                </p>
                <ul className="list-[square] mt-5 ml-5">
                  <li className="mb-4">
                    <strong className="font-bold dark:text-zinc-300 text-zinc-700">
                      Consistency :{" "}
                    </strong>
                    Its the only thing required in today&apos;s world to become
                    anything you want.
                  </li>
                  <li className="mb-4">
                    <strong className="font-bold dark:text-zinc-300 text-zinc-700">
                      Never Say No :
                    </strong>{" "}
                    In Life or Work, never say no to anything thrown to you.
                    This will make you become stronger everyday.
                  </li>
                  <li className="mb-4">
                    <strong className="font-bold dark:text-zinc-300 text-zinc-700">
                      Behaviour :
                    </strong>{" "}
                    The way you meet and greet people goes a long way. Always be
                    nice to people and respect them. This will build a
                    relationship which they will remember forever.{" "}
                  </li>
                </ul>
              </div>
            </Slide>
            <Slide>
              <section className="mt-3">
                <h3 className="text-4xl mb-4 font-bold tracking-tight">
                  <strong>Trying out</strong>
                </h3>
                <p className="mt-2 mb-6">
                  ( Data Structures &amp; Algorithms )
                </p>
              </section>
            </Slide>
            <Slide>
              <div className="mb-8">
                <h2 className="text-4xl mb-4 font-bold tracking-tight">
                  Technologies
                </h2>
              </div>
            </Slide>
            <TechList />
          </div>
        </div>
        <Heroes />
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
