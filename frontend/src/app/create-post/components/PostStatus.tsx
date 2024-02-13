import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const PostStatus = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Post Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="onlyme">Only Me</SelectItem>
            <SelectItem value="friends">Friends</SelectItem>
            <SelectItem value="public">Public</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PostStatus;
