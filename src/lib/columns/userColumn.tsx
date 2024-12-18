import { ColumnDef } from "@tanstack/react-table"
import { Address, User } from '../models';
import { ArrowUpDown } from "lucide-react"
import { Button } from "../../components/ui/button";

export const userColumns: ColumnDef<User>[] = [    
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className='bg-[#242424]'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "username",
    header: "UserName",
  },
  {
    accessorKey: "phone",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className='bg-[#242424]'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Phone Number
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "website",
    header: "Website",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className='bg-[#242424]'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "address",
    header:  "Address",
    cell: ({ row }) => {
      const address:Address = row.getValue('address');
      const formattedAddress = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
      return <div className="text-right font-medium">{formattedAddress}</div>;
    },
  },
]