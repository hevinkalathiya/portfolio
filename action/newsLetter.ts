"use server";
import { db } from "@/lib/db";

export const newsLetter = async ({ email }: { email: string }) => {

  try {
    await db.newsletter.create({
      data: {
        email,
      },
    });
    return { message: "Subscribed to newsletter", status: 200 };
  } catch (error) {
    return { message: "Failed to subscribe to newsletter", status: 500 };
  }
};
