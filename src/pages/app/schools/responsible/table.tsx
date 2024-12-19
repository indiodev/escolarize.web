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
import { Download, Ellipsis, Send } from "lucide-react";
interface Props {
  labels: string[];
  data: { course: string; date: string; status: string; id: number }[];
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
            <TableCell>{row.course}</TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell>R$ 150,00</TableCell>
            <TableCell>{row.status}</TableCell>
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
                      <Send className="h-4 w-4" />
                      <span>Enviar comprovante</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="inline-flex justify-between items-center w-full">
                      <Download className="ml-1 h-4 w-4" />
                      <span>Baixar recibo</span>
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
