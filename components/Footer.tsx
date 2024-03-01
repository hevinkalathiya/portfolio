import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";

const Footer = () => {
  return (
    <MaxWidthWrapper className="mx-auto mt-5">
      <div className="flex flex-col sticky bottom-0 border-t">
        <div className="flex-grow">
          <footer className="py-6">
            <div className="block md:flex justify-between space-y-5 md:space-y-0">
              <div className="flex md:flex-row flex-col items-center gap-x-2">
                <h3 className="font-inter">Built with:</h3>
                <ul className="flex items-center gap-x-2 text-sm dark:text-zinc-600 text-zinc-400 md:mt-0 mt-3">
                  <li>
                    <a
                      href="https://sanity.io"
                      rel="noreferrer noopener"
                      target="_blank"
                      className="flex items-center gap-x-2 dark:text-white text-zinc-600 hover:underline"
                    >
                      <Image
                        alt="sanity logo"
                        loading="lazy"
                        width="20"
                        height="20"
                        decoding="async"
                        src="/images/nextjs.svg"
                      />
                      Next JS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.framer.com/motion/component/"
                      rel="noreferrer noopener"
                      target="_blank"
                      className="flex items-center gap-x-2 dark:text-white text-zinc-600 hover:underline"
                    >
                      <Image
                        alt="nextjs logo"
                        loading="lazy"
                        width="20"
                        height="20"
                        decoding="async"
                        src="/images/framer.svg"
                      />
                      Framer Motion
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://vercel.com"
                      rel="noreferrer noopener"
                      target="_blank"
                      className="flex items-center gap-x-2 dark:text-white text-zinc-600 hover:underline"
                    >
                      <Image
                        alt="vercel logo"
                        loading="lazy"
                        width="20"
                        height="20"
                        decoding="async"
                        src="/images/tailwindcss-icon.svg"
                      />
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                Copyright ©Hevin 2024 All rights Reserved
              </div>
            </div>
          </footer>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Footer;
