"use client";

import Hero from "@/components/Hero";
import Socials from "@/components/Socials";
import Workexperience from "@/components/Workexperience";
import Projects from "./projects/page";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { newsLetter } from "@/action/newsLetter";
import { toast } from "@/components/ui/use-toast";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleSubmit = async () => {
    if (!validateEmail()) {
      return; // Don't proceed with submission if email is not valid
    }

    try {
      setLoading(true);
      await newsLetter({ email }).then((res) => {
        if (res.status === 200) {
          setEmail("");
          toast({
            description: "Subscribed to newsletter 🎊",
            className: "bg-green-300 text-black",
          });
        } else {
          alert("Failed to subscribe to newsletter");
          setEmail("");
        }
      });
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TracingBeam className="">
      <div className="flex flex-col">
        <Hero />
        <Socials />
        <Workexperience />
        <div className="h-[40rem] w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-2xl mx-auto p-4">
            <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-800 dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-600 text-center font-sans font-bold">
              Subscribe to my newsletter
            </h1>
            <p></p>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              Unlock the benefits of subscribing to our newsletter! Stay informed
              with exclusive updates, special offers, and exciting news. Be the
              first to know about our latest features and promotions. Join now and
              experience the advantages of being part of our community.
            </p>

            <div className=" flex items-center justify-center gap-2">
              <Input
                type="email"
                placeholder="hevinatwork@gmail.com"
                className="rounded-lg border pr-2 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-50 h-10 "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                className="cursor-pointer z-50"
                onClick={handleSubmit}
                variant="secondary"
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe 🎇"}
              </Button>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2 text-start z-50">
                {errorMessage}
              </p>
            )}
          </div>
          <BackgroundBeams className="bg-transparent" />
        </div>
      </div>
    </TracingBeam>
  );
}
