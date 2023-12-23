import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SmileIcon, FrownIcon } from "@/assets/icons";

const LeadsDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="bg-white rounded-[6px] p-0 inline-flex border h-10 w-10 hover:bg-gray-100">
          <SmileIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white rounded-[6px] p-1">
        <DropdownMenuItem className="rounded-[6px] hover:bg-gray-100">
          <SmileIcon className="h-4 w-4" />
        </DropdownMenuItem>
        <DropdownMenuItem className="rounded-[6px] hover:bg-gray-100">
          <FrownIcon className="h-4 w-4" />
        </DropdownMenuItem>
        <DropdownMenuItem className="rounded-[6px] hover:bg-gray-100">
          <SmileIcon className="h-4 w-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LeadsDropDown;
