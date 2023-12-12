"use server";

import prisma from "@/lib/prisma";

interface createPostProps {
  email: string;
  postContent: string;
}

export const createPost = async ({ postContent, email }: createPostProps) => {
  await prisma.post.create({
    data: {
      authorId: email,
      content: postContent,
    },
  });
};
