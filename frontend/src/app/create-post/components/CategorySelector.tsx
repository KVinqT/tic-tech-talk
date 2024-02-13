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
const CategorySelector = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" className="w-full" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="web">Web Development</SelectItem>
            <SelectItem value="mobile">Mobile Development</SelectItem>
            <SelectItem value="machine">Machine Learning</SelectItem>
            <SelectItem value="cloud">Cloud Computing</SelectItem>
            <SelectItem value="job">Job Vacancy</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategorySelector;
