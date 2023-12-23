import React from "react";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
} from "@/components/ui/table";
import { LeadInfo } from "@/entities";

const LeadsTable = () => {
  const leadsList = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "098-765-4321",
      status: "Inactive",
    },
  ];

  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leadsList.map((lead) => (
          <LeadInfo
            leadName={lead?.name}
            leadEmail={lead?.email}
            leadPhone={lead?.phone}
            leadStatus={lead?.status}
            key={lead?.id}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default LeadsTable;
