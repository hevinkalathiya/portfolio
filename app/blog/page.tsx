"use client";

import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

const page = () => {
  return (
    <MaxWidthWrapper className="mx-auto mt-20">
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-white mt-12">
            Coming Soon...... 🚄
          </p>
          <p className="md:text-lg lg:text-xl text-gray-600 dark:text-white mt-8">
            Sorry, the page you are looking for could not be found.
          </p>
          <Link
            href="/"
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-12 rounded transition duration-150"
            title="Return Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
