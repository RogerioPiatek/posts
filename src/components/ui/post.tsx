"use client";

import { Post } from "@prisma/client";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { TrashIcon } from "lucide-react";
import { deletePost } from "@/actions/deletePost";
import { Button } from "./button";
import { useRouter } from "next/navigation";

interface PostProps {
  postData: Post;
}

const Post = ({
  postData: { content, id, name, image, authorId },
}: PostProps) => {
  //TODO: Fix image if it's null or undefined, and fetch properly
  const { data } = useSession();

  const router = useRouter();

  const handleDelete = async () => {
    await deletePost(id);
    router.refresh();
  };

  return (
    <div className="text-tuna-50 text-sm leading-base font-semibold bg-tuna-900 p-3 h-fit rounded-2xl flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={image} className="w-10 h-10" alt="User image" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>@{name}</p>
        </div>
        {data?.user?.email === authorId && (
          <Button onClick={handleDelete}>
            <TrashIcon className="text-tuna-600" />
          </Button>
        )}
      </div>
      <div>
        <p className="text-base m-">{content}</p>
      </div>
    </div>
  );
};
export default Post;
