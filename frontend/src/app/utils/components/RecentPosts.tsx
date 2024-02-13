import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const RecentPosts = () => {
  return (
    <div className="mt-4">
      <div className="flex gap-4 items-center">
        <Avatar className="h-6 w-6">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>{" "}
        <h1 className="text-sm">Lwin Moe Paing</h1>
        <p className="text-xs font-bold">Feb 6,2024</p>
      </div>
      <h1 className="font-bold text-md mt-3 text-primary hover:underline">
        Server Side Rendering and Client Side Rendering
      </h1>
    </div>
  );
};

export default RecentPosts;
