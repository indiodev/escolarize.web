import {
  Table as Root,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
interface Props {
  labels: string[];
  data: { date: string; status: string; id: number }[];
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
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.date}</TableCell>
            <TableCell>R$ 150,00</TableCell>

            <TableCell>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Root>
  );
}
