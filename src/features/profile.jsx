import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-8 h-8">
        <Button className="bg-gray-200 hover:bg-gray-200 rounded-full w-8 h-8 p-0"></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white rounded-[6px] p-1">
        <DropdownMenuItem className="font-semibold">
          My Account
        </DropdownMenuItem>
        <div className="-mx-1 my-1 h-px bg-gray-100 h-[1px]"></div>
        <DropdownMenuItem className="rounded-[6px] hover:bg-gray-100">
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem className="rounded-[6px] hover:bg-gray-100">
          Support
        </DropdownMenuItem>
        <div className="-mx-1 my-1 h-px bg-gray-100 h-[1px]"></div>
        <DropdownMenuItem className="rounded-[6px] hover:bg-gray-100">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
