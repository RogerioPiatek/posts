"use server";

import { Button } from "./button";
import prisma from "@/lib/prisma";

interface SubmitButtonProps {
  children: React.ReactNode;
  postContent: string;
  user: string;
}

const SubmitButton = async ({
  children,
  postContent,
  user,
}: SubmitButtonProps) => {
  if (user === null) {
    console.log("User needs to have an e-mail");
  } else {
    const post = await prisma.post.create({
      data: {
        author: {
          connect: { email: user },
        },
        content: postContent,
      },
    });
  }
  return (
    <Button className="bg-tuna-700 text-tuna-100 w-fit self-end">
      {children}
    </Button>
  );
};

export default SubmitButton;
