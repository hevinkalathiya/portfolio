"use client";
import { cn } from "@/lib/utils";
import React, { FC } from "react";

type HeadingProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  titleClassName?: string;
};

const Heading: FC<HeadingProps> = ({
  title,
  subtitle,
  center,
  className,
  titleClassName,
}: HeadingProps) => {
  return (
    <div className={`${center ? "text-center" : "text-start"} ${className} `}>
      <div
        className={cn(
          "text-2xl font-bold",
          titleClassName
        )}
      >
        {title}
      </div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading;
