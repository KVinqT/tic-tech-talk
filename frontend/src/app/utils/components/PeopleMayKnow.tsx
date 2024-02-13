import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import React from "react";

const PeopleMayKnow = () => {
  return (
    <div className="mt-4">
      <div className="flex gap-4 items-center">
        <Avatar className="h-6 w-6">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>{" "}
        <h1 className="text-sm">Lwin Moe Paing</h1>
        <Button className="h-8 bg-transparent text-black border">Follow</Button>
      </div>
      {/* bio status */}
      <h1 className="text-sm mt-2 text-gray-400 ml-10">
        Nothing Last Forever, we can change the future{" "}
      </h1>
    </div>
  );
};

export default PeopleMayKnow;
