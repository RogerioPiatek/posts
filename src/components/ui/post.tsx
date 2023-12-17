"use client";

import { Like, Post } from "@prisma/client";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Heart, TrashIcon } from "lucide-react";
import { deletePost } from "@/actions/deletePost";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { likePost } from "@/actions/likePost";

interface PostProps {
  postData: Post;
  likeCount: number;
}

const Post = ({
  postData: { content, id, name, image, authorId },
  likeCount,
}: PostProps) => {
  const { data } = useSession();
  const userId = data?.user?.email;

  const router = useRouter();

  const handleDelete = async () => {
    await deletePost(id);
    router.refresh();
  };

  const handleLikeClick = async () => {
    if (!userId) {
      console.log("Log in to like posts!");
    } else {
      await likePost({ id, userId });
      router.refresh();
    }
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
          <Button onClick={handleDelete} className="p-0">
            <TrashIcon className="text-tuna-600" />
          </Button>
        )}
      </div>
      <div className="flex justify-between items-end">
        <p className="text-base w-full self-start">{content}</p>
        <div className="flex items-center text-sm gap-[2px] text-tuna-500">
          {likeCount}
          <Button className="p-0 text-tuna-600" onClick={handleLikeClick}>
            <Heart />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Post;
