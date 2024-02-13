import { Textarea } from "@/components/ui/textarea";
import React from "react";

const PostStory = () => {
  return (
    <div className="flex flex-col w-[600px] m-auto mt-10 ">
      <Textarea
        placeholder="Tell the story"
        className="border-none text-2xl text-gray-600"
      />
    </div>
  );
};

export default PostStory;
