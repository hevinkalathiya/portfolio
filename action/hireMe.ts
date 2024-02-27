"use server";

import { db } from "@/lib/db";

export const hireMe = async ({
  email,
  name,
  budget,
  website,
  description,
}: {
  email: string;
  name: string;
  budget: string;
  website: string;
  description: string;
}) => {
  try {
    const data = await db.hireMe.create({
      data: {
        email,
        name,
        budget,
        website: website as string,
        description,
      },
    });

    return { data, message: "I Will get back to you soon!", status: 200 };
  } catch (error) {
    return { error: "Something went wrong!", status: 500 };
  }
};
