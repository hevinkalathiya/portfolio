import { cn } from "@/lib/utils";
import React from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("max-w-4xl p-2 md:p-0", className)}>{children}</div>;
};

export default MaxWidthWrapper;
