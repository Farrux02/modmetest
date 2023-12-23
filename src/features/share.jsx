import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Share = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="bg-white rounded-[6px] px-4 py-2 inline-flex border h-10">
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white rounded-[6px] p-1">
        <DropdownMenuItem className="rounded-[6px] hover:bg-gray-100">
          Share via Email
        </DropdownMenuItem>
        <DropdownMenuItem className="rounded-[6px] hover:bg-gray-100">
          Share on Social Media
        </DropdownMenuItem>
        <DropdownMenuItem className="rounded-[6px] hover:bg-gray-100">
          Copy Shareable Link
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Share;
