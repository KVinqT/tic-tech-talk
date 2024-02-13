import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import PublishButton from "./PublishButton";
import CancelButton from "./CancelButton";

const PostCreateNavbar = () => {
  return (
    <div className="h-[13vh] shadow flex items-center justify-between">
      <div className="flex items-center justify-center ml-10">
        <h1 className="text-2xl font-bold text-primary">Create post</h1>
      </div>
      <div className="flex items-center gap-3 mr-5 cursor-pointer">
        <CancelButton />
        <PublishButton />
      </div>
    </div>
  );
};

export default PostCreateNavbar;
