"use server";

import prisma from "@/lib/prisma";

interface likePostProps {
  id: number; // PostId
  userId: string;
}

export const likePost = async ({ id, userId }: likePostProps) => {
  const liked = await prisma.like.findFirst({
    where: {
      userId: userId,
      postId: id,
    },
  });

  // TODO: Fix crashing when liking two posts
  if (!liked) {
    await prisma.like.create({
      data: {
        postId: id,
        userId: userId,
      },
    });
  } else {
    const postId = await prisma.like.findFirst({
      where: {
        postId: id,
        userId: userId,
      },
    });
    await prisma.like.delete({
      where: {
        id: postId!.id,
      },
    });
  }
};
