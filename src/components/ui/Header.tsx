"use client";

import { ReactNode } from "react";
import { Separator } from "./separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";

const Header = () => {
  const session = useSession();
  console.log(session);
  return (
    <div>
      <div className="text-xl leading-heading font-semibold w-full bg-tuna-950 h-14 shadow-sm  p-2 flex justify-between items-center">
        <div>Posts</div>
        <div>
          {" "}
          <Avatar>
            <AvatarImage src="https://github.com/rogeriopiatek.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <Separator className="bg-tuna-800" />
    </div>
  );
};

//TODO: Add clicking Posts makes page refresh, and authentication with Next Auth

export default Header;
