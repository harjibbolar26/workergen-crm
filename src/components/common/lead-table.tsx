import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import type { Lead } from "@/config/types"
  
  interface LeadsTableProps {
    leads: Lead[]
  }
  
  export function LeadsTable({ leads }: LeadsTableProps) {
    return (
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
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell className="font-medium">{lead.name}</TableCell>
              <TableCell>{lead.topic}</TableCell>
              <TableCell>{lead.status}</TableCell>
              <TableCell className="text-right">{lead.createdOn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  
  