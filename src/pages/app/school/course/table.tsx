import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table as Root,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Course } from "@/models/course.model";
import { Ellipsis, EyeIcon } from "lucide-react";
interface Props {
  labels: string[];
  data: Course[];
}
export function Table({ data, labels }: Props): React.ReactElement {
  return (
    <Root>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          {labels.map((label) => (
            <TableHead key={label}>{label}</TableHead>
          ))}
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row?.title}</TableCell>
            <TableCell>{row?.price}</TableCell>
            <TableCell>{row?.school_id}</TableCell>
            <TableCell>{row?.tags}</TableCell>

            <TableCell>
              <DropdownMenu dir="rtl">
                <DropdownMenuTrigger asChild>
                  <Button className="rounded-full p-0 w-6 h-6 bg-transparent text-neutral-600 border shadow-sm hover:bg-neutral-100">
                    <Ellipsis className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="inline-flex justify-between items-center w-full">
                      <EyeIcon className="ml-1 h-4 w-4" />
                      <span>Visualizar</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Root>
  );
}
