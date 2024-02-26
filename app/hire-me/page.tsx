"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { RoughNotation } from "react-rough-notation";

const HireMe = () => {
    return (
        <MaxWidthWrapper className="mx-auto mt-16" >
            <h1 className="text-center text-7xl font-bold">Hire Me</h1>
            <p className="text-2xl italic mt-10 text-center ">“I think people hire me because I am good at what I love to do.”</p>
            <p className="text-center mt-10 text-lg">My work speaks for the goals of my clients; it’s crafted carefully, studied through the gamut of human psychology, and created to stand the test of time. My role is to listen and trust, research and explore, create and design, present and deliver, and to cater to your needs.</p>
            <p className="text-center mt-10 text-lg">Design is not just my passion, it’s a big part of my lifestyle. Yeah, I know it’s a cliché. Here, fill out the questionnaire below or read client feedbacks while I think of something less douchéy.</p>

            <p  className="text-center mt-10 text-lg">I am currently <RoughNotation
                // animationDelay={1000}
                color="green"
                type="box"
                show={true}
              > accepting </RoughNotation>new freelance design projects.</p>
        </MaxWidthWrapper>
    )
}

export default HireMe;