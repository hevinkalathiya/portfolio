"use client";

import React from "react";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

const ViewResume = () => {
  return (
    <Button
      className="w-full"
      variant="outline"
      onClick={() =>
        window.open(
          "https://drive.google.com/file/d/1yjIzkiUESaFKlkPLjuMo8rFuShDrd2Vo/view"
        )
      }
    >
      View Resume
      <ExternalLink className="mx-2 h-5 w-5" />
    </Button>
  );
};

export default ViewResume;
