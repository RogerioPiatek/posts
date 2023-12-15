"use client";

import { ReactNode } from "react";
import { Separator } from "./separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./button";
import { LogOutIcon } from "lucide-react";

const Header = () => {
  const { status, data } = useSession();

  const handleSignIn = () => {
    signIn();
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <div>
      <div className="text-xl leading-heading font-semibold w-full bg-tuna-950 shadow-sm  p-2 flex justify-between items-center">
        <div>Posts</div>
        <div>
          {status === "authenticated" ? (
            <div className="flex flex-row-reverse items-center gap-3">
              <Avatar>
                <AvatarImage
                  src={
                    data.user?.image ?? "../../../../public/default_avatar.jpg"
                  }
                  alt="User image"
                  className="h-10 w-10"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <LogOutIcon onClick={handleLogout} className="text-tuna-600" />
            </div>
          ) : (
            <Button className="bg-tuna-50 text-tuna-950" onClick={handleSignIn}>
              Sign in
            </Button>
          )}
        </div>
      </div>
      <Separator className="bg-tuna-800" />
    </div>
  );
};

//TODO: Add clicking Posts makes page refresh
//TODO: Add sign-out option via side menu or modal

export default Header;
