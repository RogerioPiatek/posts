"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface createPostProps {
  email: string;
  postContent: string;
  name: string;
  image: string;
}

export const createPost = async ({
  postContent,
  email,
  name,
  image,
}: createPostProps) => {
  await prisma.post.create({
    data: {
      name: name,
      authorId: email,
      content: postContent,
      image: image,
    },
  });
};
