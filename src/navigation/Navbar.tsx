import { Button } from "@/components/ui/button";
import { Brand } from "@/lib/Constant";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  let user = await currentUser();
  return (
    <header className="p border-black px-4 h-14 sticky top-0 w-full inset-x-0 bg-background/40 z-50 backdrop-blur-md border-b border-border">
      <div className="flex justify-between items-center mx-auto h-full md:max-w-screen-xl">
        <div className="flex items-start">
          <Link href={"/"} className="flex items-center gap-2">
            <span className="text-lg font-medium ">{Brand}</span>
          </Link>
        </div>
        <nav className="items-start  hidden md:flex capitalize absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <ul className="flex items-center gap-8 ">
            <li className="hover:text-foreground/80 text-sm">
              <Link href={"/"} className="h-8 ">
                <span className="text-lg font-medium ">pricing</span>
              </Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href={"/"} className="h-8 ">
                <span className="text-lg font-medium ">About</span>
              </Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href={"/"} className="h-8 ">
                <span className="text-lg font-medium ">Features</span>
              </Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href={"/"} className="h-8 ">
                <span className="text-lg font-medium ">Blog</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          {user ? (
            <UserButton />
          ) : (
            <>
              <Button asChild variant={"outline"} className="rounded-xl">
                <Link href={"/login"}>Login</Link>
              </Button>
              <Button asChild className="rounded-xl">
                <Link href={"/start-trial"} className="hidden md:flex">
                  Start trial
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
