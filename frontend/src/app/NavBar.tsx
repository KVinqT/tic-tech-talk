import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TfiWrite } from "react-icons/tfi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="h-[13vh] shadow flex items-center justify-between">
      <div className="flex items-center w-[700px] ml-5">
        <h1 className="text-2xl font-bold text-primary mr-4">Tic Tech-Talk</h1>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <div>
            <Input type="search" placeholder="Search" className="rounded-xl" />
          </div>
          <Button type="submit" className="text-white">
            Search
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-8 mr-5 cursor-pointer">
        <Link href="/create-post">
          <div className="flex text-primary items-center gap-2">
            <TfiWrite className="text-xl" />
            <span className="text-md">Write</span>
          </div>
        </Link>
        <div className="flex items-center text-primary gap-2">
          <IoMdNotificationsOutline className="text-2xl" />
          <span>1</span>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </div>
    </div>
  );
};

export default NavBar;
