"use client";

import { ChangeEvent, useState } from "react";
//TODO: Add post functionality, OnClick handle
//TODO: Ensure character count goes down

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "./dialog";
import { Textarea } from "./textarea";
import { useSession } from "next-auth/react";
import { Button } from "./button";

import { createPost } from "@/actions/createPost";
import { useRouter } from "next/navigation";

const PostBar = () => {
  const [postContent, setPostContent] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const { data } = useSession();
  const email = data?.user?.email;
  const name = data?.user?.name;
  const image = data?.user?.image;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(event.target.value);
  };

  const handleSubmit = async () => {
    if (!email || !name || !image) {
      return "Couldn't submit post.";
    } else {
      await createPost({ email, postContent, name, image });
      setOpen(false);
      router.refresh();
    }
  };

  return (
    <Dialog defaultOpen={false}>
      <DialogTrigger asChild>
        <div
          onClick={() => {
            setOpen(true);
          }}
          className="bg-tuna-800 text-tuna-500 w-full rounded-full"
        >
          <div className="px-3 py-2 text-sm">What are you thinking about?</div>
        </div>
      </DialogTrigger>
      <DialogContent className="p-4 flex flex-col rounded-xl leading-base border-none bg-tuna-900 gap-7">
        <DialogHeader className="font-semibold leading-heading self-start text-xl">
          Write your post!
        </DialogHeader>
        <Textarea
          className="bg-tuna-700 text-tuna-400 border-tuna-700"
          placeholder="Share your ideas!"
          onChange={handleChange}
          maxLength={140}
        />
        <DialogFooter>
          <DialogClose
            onClick={handleSubmit}
            className="bg-tuna-700 text-tuna-100 w-fit self-end mx-2 my-1 leading-base font-semibold px-3 py-2 rounded text-base"
          >
            Publicate post
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PostBar;
