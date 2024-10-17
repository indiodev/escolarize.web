import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { Table } from "./table";

export function Responsible(): React.ReactElement {
  return (
    <main className="container space-y-5">
      <h2 className="text-2xl text-indigo-500 font-semibold">
        Mensalidades/Pagamentos
      </h2>

      <section className="inline-flex items-center space-x-10 w-full">
        <div className="flex-1 inline-flex space-x-2 w-full">
          <Input placeholder="Pesquisar" />
          <Button className="p-2 bg-indigo-500 hover:bg-indigo-600">
            <Search className="w-4 h-4" />
          </Button>
        </div>

        <div className="inline-flex items-center space-x-4">
          <span className="font-medium">Itens por página </span>
          <Select defaultValue="10">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="30">30</SelectItem>
              <SelectItem value="40">40</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      <Table
        data={[
          {
            id: 1,
            date: "09/10/2024",
            status: "Paga",
            course: "Curso Informática Básica",
          },
          {
            id: 2,
            date: "09/11/2024",
            status: "Pendente",
            course: "Curso Informática Básica",
          },
          {
            id: 3,
            date: "09/12/2024",
            status: "Pendente",
            course: "Curso Informática Básica",
          },
        ]}
        labels={["Referência", "Vencimento", "Valor", "Situação"]}
      />
    </main>
  );
}
