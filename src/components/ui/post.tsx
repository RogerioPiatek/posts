"use client";

import { Post } from "@prisma/client";

interface PostProps {
  postData: Post;
}

const Post = ({ postData }: PostProps) => {
  return <div>Post</div>;
};

export default Post;
