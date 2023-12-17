import Post from "@/components/ui/post";
import PostBar from "@/components/ui/post-bar";
import prisma from "@/lib/prisma";

export const revalidate = 0;

export default async function Home() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: { Like: true },
      },
    },
  });

  return (
    <main className="flex flex-col gap-6 h-full mx-3">
      <div className="font-regular p-4 flex items-center justify-center">
        <PostBar />
      </div>
      {posts.map((post) => {
        return (
          <Post key={post.id} postData={post} likeCount={post._count.Like} />
        );
      })}
    </main>
  );
}
