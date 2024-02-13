"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const DropDownButton = () => {
  const [position, setPosition] = useState("bottom");
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Categories</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="Web Development">
              Web Development
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Mobile Development">
              Mobile Development
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Machine Learning">
              Machine Learning
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Cloud Computing">
              Cloud Computing{" "}
            </DropdownMenuRadioItem>
            <DropdownMenuSeparator />
            <DropdownMenuRadioItem value="Job Vacancy">
              Job Vacancy{" "}
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDownButton;
