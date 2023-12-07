import PostBar from "@/components/ui/post-bar";

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

export default function Home() {
  return (
    <main className="flex flex-col gap-6 h-full">
      <div className="font-regular p-4 flex items-center justify-center">
        <PostBar />
      </div>
    </main>
  );
}
