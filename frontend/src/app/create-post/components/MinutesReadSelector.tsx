import React from "react";
import { Clock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MinutesReadSelector = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <Clock />
          <SelectValue placeholder="Minutes read" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="3min">3 minutes</SelectItem>
            <SelectItem value="5min">5 minutes</SelectItem>
            <SelectItem value="10min">10 minutes</SelectItem>
            <SelectItem value="15min">15 minutes</SelectItem>
            <SelectItem value="30min">30 minutes</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default MinutesReadSelector;
