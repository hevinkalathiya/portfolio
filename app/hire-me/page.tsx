"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { hireMe } from "@/action/hireMe";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Slide } from "@/components/Slide";

const hireMeSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  website: z.string().url().optional(),
  description: z.string(),
  budget: z.string(),
});

const HireMe = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof hireMeSchema>>({
    resolver: zodResolver(hireMeSchema),
  });

  function onSubmit(values: z.infer<typeof hireMeSchema>) {
    setLoading(true);
    hireMe({
      name: values.name,
      email: values.email,
      description: values.description,
      budget: values.budget,
      website: values.website ?? "",
    })
      .then((res) => {
        toast({
          description: res.message,
        });
        form.reset();
      })
      .catch((err) => {
        console.log(err);
        toast({
          description: err.error,
        });
      })
      .finally(() => {
        form.reset();
        setLoading(false);
      });
  }

  return (
    <MaxWidthWrapper className="mx-auto mt-16">
      <Slide>
        <h1 className="text-center text-7xl font-bold">Hire Me</h1>
        <p className="text-2xl italic mt-10 text-center ">
          “I think people hire me because I am good at what I love to do.”
        </p>
        <p className="text-center mt-10 text-lg">
          My work speaks for the goals of my clients; it’s crafted carefully,
          studied through the gamut of human psychology, and created to stand
          the test of time. My role is to listen and trust, research and
          explore, create and design, present and deliver, and to cater to your
          needs.
        </p>
        <p className="text-center mt-10 text-lg">
          Design is not just my passion, it’s a big part of my lifestyle. Yeah,
          I know it’s a cliché. Here, fill out the questionnaire below or read
          client feedbacks while I think of something less douchéy.
        </p>

        <p className="text-center mt-10 text-lg">
          I am currently
          <span className="px-3">
            <RoughNotation
              // animationDelay={1000}
              color="green"
              type="box"
              show={true}
            >
              accepting
            </RoughNotation>
          </span>
          new freelance design projects.
        </p>
        <hr className="my-5 mt-5" />
        <div className="flex items-center justify-center">
          <Image
            src="/images/tata-power.png"
            height={200}
            width={200}
            alt={"Tata power"}
            quality={100}
          />
        </div>
        <hr className="my-5" />
        <p className="text-sm dark:text-gray-400 text-gray-700">
          I have been honored to work with the big boys and girls, unfortunately
          due to the confidential nature of the projects I can’t showcase them
          all in public.
        </p>
        <p className="mb-10 mt-16 text-5xl ">Questionnaire</p>
        <p className="mb-5">
          Requesting an estimate for a project only takes a few minutes of your
          time and costs absolutely nothing. This questionnaire was built to
          help me identify your needs for the project.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid xl:grid-cols-2 md:grid-cols-2 gap-5 ">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your good name</FormLabel>
                    <FormControl>
                      <Input placeholder="Hevin K" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your email address </FormLabel>
                    <FormControl>
                      <Input placeholder="Email..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your website, if you have one</FormLabel>
                    <FormControl>
                      <Input placeholder="hevin.site" type="url" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project budget (USD)</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Project budget (USD)" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Less than 5k">
                          Less than 5k
                        </SelectItem>
                        <SelectItem value="5k - 10k">5k - 10k</SelectItem>
                        <SelectItem value="10k - 20k">10k - 20k</SelectItem>
                        <SelectItem value="20k - 50k">20k - 50k</SelectItem>
                        <SelectItem value="50k - 100k">50k - 100k</SelectItem>
                        <SelectItem value="More than 100k">
                          More than 100k
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Tell us about your project</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="I need a website for my business"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="secondary" className="mb-10">
              {loading ? "Sending Reqest..." : "Send Request 💸"}
            </Button>
          </form>
        </Form>
      </Slide>
    </MaxWidthWrapper>
  );
};

export default HireMe;

{
  /* <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your location</FormLabel>
                            <FormControl>
                              <Input placeholder="croatia" {...field} />
                            </FormControl>
                            <FormDescription>
                              I am based in Gujarat, India but I work with clients all
                              around the world. I only ask this to know your timezone.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      /> */
}
