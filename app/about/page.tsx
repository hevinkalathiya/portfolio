import Heading from "@/components/Heading";
import Heroes from "@/components/Heroes";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Slide } from "@/components/Slide";
import TechList from "@/components/TechStack";
import ViewResume from "@/components/ViewResume";
import { Button } from "@/components/ui/button";
import { DownloadIcon, Mail } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    default: "Hevin Kalathiya",
    template: "%s - About",
  },
  description: "Software Engineer, Full Stack Developer, and Tech Enthusiast",
  keywords: "Software, Engineer, Full Stack, Developer, Tech, Enthusiast, Hevin Kalathiya, Hevin, Kalathiya, Hevin Kalathiya Portfolio, Hevin Kalathiya Blog, Hevin Kalathiya Website, Hevin Kalathiya Developer, Hevin Kalathiya Software Engineer, Hevin Kalathiya Full Stack Developer, Hevin Kalathiya Tech Enthusiast, Hevin Kalathiya Projects, Hevin Kalathiya Resume, Hevin Kalathiya Contact, Hevin Kalathiya About, Hevin Kalathiya Skills, Hevin Kalathiya Experience, Hevin Kalathiya Work, Hevin Kalathiya Blog Posts, Hevin Kalathiya Articles, Hevin Kalathiya Open Source, Hevin Kalathiya GitHub, Hevin Kalathiya LinkedIn, Hevin Kalathiya Twitter, Hevin Kalathiya Instagram, Hevin Kalathiya Facebook, Hevin Kalathiya YouTube, Hevin Kalathiya Stack Overflow, Hevin Kalathiya CodePen, Hevin Kalathiya Dribbble, Hevin Kalathiya Behance, Hevin Kalathiya Pinterest, Hevin Kalathiya Resume, Hevin Kalathiya CV, Hevin Kalathiya Portfolio Website, Hevin Kalathiya Personal Website, Hevin Kalathiya Personal Portfolio, Hevin Kalathiya Professional Portfolio, Hevin Kalathiya Personal Blog, Hevin Kalathiya Professional Blog, Hevin Kalathiya Personal Blog Posts, Hevin Kalathiya Professional Blog Posts, Hevin Kalathiya Personal Articles, Hevin Kalathiya Professional Articles, Hevin Kalathiya Personal Projects, Hevin Kalathiya Professional Projects, Hevin Kalathiya Personal Open Source, Hevin Kalathiya Professional Open Source, Hevin Kalathiya Personal GitHub, Hevin Kalathiya Professional GitHub, Hevin Kalathiya Personal LinkedIn, Hevin Kalathiya Professional LinkedIn, Hevin Kalathiya Personal Twitter, Hevin Kalathiya Professional Twitter, Hevin Kalathiya Personal Instagram, Hevin Kalathiya Professional Instagram, Hevin Kalathiya Personal Facebook, Hevin Kalathiya Professional Facebook, Hevin Kalathiya Personal YouTube, Hevin Kalathiya Professional YouTube, Hevin Kalathiya Personal Stack Overflow, Hevin Kalathiya Professional Stack Overflow, Hevin Kalathiya Personal CodePen, Hevin Kalathiya Professional CodePen, Hevin Kalathiya Personal Dribbble, Hevin Kalathiya, Professional Dribbble, Hevin Kalathiya Personal Behance, Hevin Kalathiya Professional Behance, Hevin Kalathiya Personal Pinterest, Hevin Kalathiya Professional Pinterest, Hevin Kalathiya Personal Resume, Hevin Kalathiya Professional Resume, Hevin Kalathiya Personal CV, Hevin Kalathiya Professional CV, Hevin Kalathiya Personal Portfolio Website, Hevin Kalathiya Professional Portfolio Website, Hevin Kalathiya Personal Personal Website, Hevin Kalathiya Professional Personal Website, Hevin Kalathiya Personal Personal Portfolio, Hevin Kalathiya Professional Personal Portfolio, Hevin Kalathiya Personal Professional Portfolio, Hevin Kalathiya Professional Professional Portfolio, Hevin Kalathiya Personal Personal Blog, Hevin Kalathiya Professional Personal Blog, Hevin Kalathiya Personal Professional Blog, Hevin Kalathiya Professional Professional Blog, Hevin Kalathiya Personal Personal Blog Posts, Hevin Kalathiya Professional Personal Blog Posts, Hevin Kalathiya Personal Professional Blog Posts, Hevin Kalathiya Professional Professional Blog Posts, Hevin Kalathiya Personal Personal Articles, Hevin Kalathiya Professional Personal Articles, Hevin Kalathiya Personal Professional Articles, Hevin Kalathiya Professional Professional Articles, Hevin Kalathiya Personal Personal Projects, Hevin Kalathiya Professional Personal Projects, Hevin Kalathiya Personal Professional Projects, Hevin Kalathiya Professional Professional Projects, Hevin Kalathiya Personal Personal Open Source, Hevin Kalathiya Professional Personal Open Source, Hevin Kalathiya Personal Professional Open Source, Hevin Kalathiya Professional Professional Open Source, Hevin Kalathiya Personal Personal GitHub, Hevin Kalathiya Professional Personal GitHub, Hevin Kalathiya Personal Professional GitHub, Hevin Kalathiya Professional Professional GitHub, Hevin Kalathiya Personal Personal LinkedIn, Hevin Kalathiya Professional Personal LinkedIn, Hevin Kalathiya Personal Professional LinkedIn, Hevin Kalathiya Professional Professional LinkedIn, Hevin Kalathiya Personal Personal Twitter, Hevin Kalathiya Professional Personal Twitter, Hevin Kalathiya Personal Professional Twitter, Hevin Kalathiya Professional Professional Twitter, Hevin Kalathiya Personal Personal Instagram, Hevin Kalathiya Professional Personal Instagram, Hevin Kalathiya Personal Professional Instagram, Hevin Kalathiya Professional Professional Instagram, Hevin Kalathiya Personal Personal Facebook, Hevin Kalathiya Professional Personal Facebook, Hevin Kalathiya Personal ",
  twitter: {
    site: "@hevin_kalathiya",
    card: "summary_large_image",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hevin.site/about",
    images: [
      {
        url: "https://www.hevin.site/_next/image?url=%2Fimages%2Fhero_image.png&w=256&q=100",
        width: 1200,
        height: 630,
        alt: "Hevin Kalathiya",
      },
    ],
  },
};
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
              <ViewResume />

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
                titleClassName="mb-5 text-xl mt-5 md:mt-0 md:text-4xl"
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
                  Node.js and React.js.
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
              <h3 className="text-4xl mb-4 font-bold tracking-tight">
                <strong>Technologies</strong>
              </h3>
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
