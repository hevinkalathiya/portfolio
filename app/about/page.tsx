/* eslint-disable react/no-unescaped-entities */
import Heading from "@/components/Heading";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const page = () => {
  return (
    <MaxWidthWrapper className="mx-auto">
      <div className="mt-20 gap-y-10 animate-fade-up">
        <Heading title={"About Me 🐱‍👓"} titleClassName="mb-5 text-3xl" />
        <li className="dark:text-gray-400 text-gray-900 text-lg mb-5 list-outside">
          Hello, I&apos;m Hevin 👽. I&apos;m 19 years old and currently in my
          third year of pursuing a Bachelor of Computer Application. I work as a
          software developer in India, and my goal is to secure a position with
          a remote company based in the USA.
        </li>
        <li className="dark:text-gray-400 text-gray-900 text-lg mb-5 list-outside">
          I've recently made the decision to resign from my job, and I'm now
          dedicated to enhancing my skills in common data structures and
          algorithms. Within the next 2-3 months, I'll be completing my
          graduation. Looking forward, I aspire to transition into roles such as
          a frontend developer or full-stack developer within a product-based
          company.
        </li>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
