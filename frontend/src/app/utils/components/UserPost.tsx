import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { MessageCircle } from "lucide-react";

const UserPosts = () => {
  return (
    <div className="border-b mt-6">
      <div className="flex gap-4 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>{" "}
        <h1 className="">Lwin Moe Paing</h1>
        <p className="text-sm font-bold">Feb 6,2024</p>
      </div>
      <h1 className="font-bold text-xl mt-3 text-primary">
        Server Side Rendering and Client Side Rendering
      </h1>
      <p className="mt-2">
        Client side and server side are web development terms that describe
        where application code runs. Web developers will also refer to this
        distinction as the frontend vs. the backend, although
        client-side/server-side and frontend/backend aren't quite the same. In a
        serverless architecture, the serverless vendor hosts and assigns
        resources to all server-side processes, and the processes scale up as
        application usage increases.
      </p>
      <div className="mt-10 flex justify-between items-center w-full pb-6">
        <div className="flex gap-4 items-center">
          <Badge variant="outline">Web Development</Badge>
          <Badge variant="outline">For you</Badge>
          <p className="text-sm">8 minutes read</p>
        </div>
        <div className="flex gap-8 cursor-pointer">
          <Heart className="h-6 w-6" />
          <MessageCircle />
          <MoreHorizontal />
        </div>
      </div>
    </div>
  );
};

export default UserPosts;
