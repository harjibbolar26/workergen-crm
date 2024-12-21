"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Lead } from "@/config/types";
import Image from "next/image";
import { useState } from "react";

interface LeadsTableProps {
  leads: Lead[];
}

export function LeadsTable({ leads }: LeadsTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter leads by name or topic based on the search term
  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search Input */}
      <div
        className="mb-4 flex items-center gap-2 rounded-md w-full md:w-1/3 sm:w-2/3 p-1"
        style={{
          background: "linear-gradient(90deg, #8250df, #0969da, #1a7f37)",
          padding: "2px",
          borderRadius: "8px",
          backgroundClip: "padding-box",
        }}
      >
        <div className="flex items-center gap-2 bg-white rounded-md w-full p-2">
          <input
            type="text"
            placeholder="Search by name or topic"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-none outline-none w-full"
          />
          <Image
            src={"/copilot.png"}
            alt="copilot"
            height={20}
            width={20}
            className="pr-1"
          />
        </div>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead>Topic</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Created on</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredLeads.length > 0 ? (
            filteredLeads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell className="font-medium">{lead.name}</TableCell>
                <TableCell>{lead.topic}</TableCell>
                <TableCell>{lead.status}</TableCell>
                <TableCell className="text-right">{lead.createdOn}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No leads found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
