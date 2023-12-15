"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deletePost = async (id: number) => {
  await prisma.post.delete({
    where: {
      id: id,
    },
  });
};
