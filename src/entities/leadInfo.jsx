import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DotIcon } from "@/assets/icons";

const LeadInfo = ({ leadName, leadEmail, leadPhone, leadStatus }) => {
  const statusBgColors = {
    active: "bg-green-500",
    inactive: "bg-red-500",
  };

  return (
    <TableRow>
      <TableCell contentEditable>{leadName}</TableCell>
      <TableCell contentEditable>{leadEmail}</TableCell>
      <TableCell contentEditable>{leadPhone}</TableCell>
      <TableCell>
        <Badge
          className={`${
            statusBgColors[leadStatus.toLowerCase()]
          } text-white px-2 py-1 rounded hover:bg-gray-600`}
        >
          {leadStatus}
        </Badge>
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="bg-white rounded-[6px] p-0 inline-flex border h-10 w-10 hover:bg-gray-100">
              <DotIcon className="h-4 w-4" />
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
      </TableCell>
    </TableRow>
  );
};

export default LeadInfo;
