import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(Request: NextRequest) {
  const { user, postContent } = await Request.json();
  console.log(user, postContent);
  const post = await prisma.post.create({
    data: {
      author: {
        connect: { email: user },
      },
      content: postContent,
    },
  });
}
