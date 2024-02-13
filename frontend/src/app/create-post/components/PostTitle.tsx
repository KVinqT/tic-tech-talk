import { Input } from "@/components/ui/input";
import React from "react";

const PostTitle = () => {
  return (
    <div className="flex flex-col w-[600px] m-auto mt-10 ">
      <Input
        type="title"
        placeholder="Title"
        className="text-5xl border-none text-primary"
      />
    </div>
  );
};

export default PostTitle;
