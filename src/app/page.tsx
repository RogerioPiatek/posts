import Post from "@/components/ui/post";
import PostBar from "@/components/ui/post-bar";
import prisma from "@/lib/prisma";
import { useEffect, useState } from "react";

/*
Sample for DB implementation, querying from DB and displaying
with map

const obj = [
 {
   name: 1,
   id: 2,
 },
 {
   name: 10,
   id: 11,
 },
];

<div>
 {obj.map((object) => {
   return <div key={object.id}>{object.name}</div>;
 })}
</div>;
*/

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <main className="flex flex-col gap-6 h-full">
      <div className="font-regular p-4 flex items-center justify-center">
        <PostBar />
      </div>
      {posts.map((post) => {
        return <Post key={post.id} postData={post} />;
      })}
    </main>
  );
}
