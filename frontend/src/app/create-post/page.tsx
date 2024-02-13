import React from "react";
import PostCreateNavbar from "./components/PostCreateNavbar";
import PostStory from "./components/PostStory";
import PostTitle from "./components/PostTitle";
import MinutesReadSelector from "./components/MinutesReadSelector";
import CategorySelector from "./components/CategorySelector";
import PostStatus from "./components/PostStatus";
import { Input } from "@/components/ui/input";

const CreatePost = () => {
  return (
    <div>
      <PostCreateNavbar />
      <div className="mt-10 flex gap-8 w-[600px] m-auto">
        <MinutesReadSelector />
        <CategorySelector />
        <PostStatus />
      </div>
      <PostTitle />
      <PostStory />
      <div className="mt-8 flex gap-8 w-[600px] m-auto">
        <Input id="post-image" type="file" />
      </div>
    </div>
  );
};

export default CreatePost;
