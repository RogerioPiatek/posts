"use server";

import prisma from "@/lib/prisma";

interface createPostProps {
  email: string;
  postContent: string;
  name: string;
}

export const createPost = async ({
  postContent,
  email,
  name,
}: createPostProps) => {
  await prisma.post.create({
    data: {
      name: name,
      authorId: email,
      content: postContent,
    },
  });
};
