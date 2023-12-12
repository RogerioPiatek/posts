"use client";

import { ChangeEvent, useState } from "react";
//TODO: Add post functionality, OnClick handle
//TODO: Ensure character count goes down

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "./dialog";
import { Textarea } from "./textarea";
import SubmitButton from "./submit-button";
import { useSession } from "next-auth/react";
import { Button } from "./button";

import { createPost } from "@/actions/createPost";

const PostBar = () => {
  const [postContent, setPostContent] = useState("");

  const { data } = useSession();
  const email = data?.user?.email;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(event.target.value);
  };

  const handleSubmit = async () => {
    if (!email) {
      return "Couldn't submit post.";
    } else {
      await createPost({ email, postContent });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          onClick={() => {}}
          className="bg-tuna-800 text-tuna-500 w-full rounded-full"
        >
          <div className="px-3 py-2 text-sm">What are you thinking about?</div>
        </div>
      </DialogTrigger>
      <DialogContent className="p-4 flex flex-col rounded-xl leading-base border-none bg-tuna-900 gap-7">
        <DialogHeader className="font-semibold leading-heading self-start text-xl">
          Write your post!
        </DialogHeader>
        {/* TEXT AREA HERE */}
        <Textarea
          className="bg-tuna-700 text-tuna-400 border-tuna-700"
          placeholder="Share your ideas!"
          onChange={handleChange}
          maxLength={140}
        />
        <DialogFooter>
          <Button onClick={handleSubmit}>Publicate Post</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PostBar;
