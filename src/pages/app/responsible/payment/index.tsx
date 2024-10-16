import { Input } from "@/components/ui/input";
import { Table } from "./table";

export function Payment(): React.ReactElement {
  return (
    <main>
      <h2 className="text-2xl text-indigo-500 font-semibold">
        Mensalidades/Pagamentos
      </h2>

      <Input placeholder="Pesquisar" />

      <Table
        data={[
          {
            id: 1,
            date: "09/10/2024",
            status: "Pago",
          },
          {
            id: 2,
            date: "09/11/2024",
            status: "Pendente",
          },
          {
            id: 3,
            date: "09/12/2024",
            status: "Pendente",
          },
        ]}
        labels={["Vencimento", "Valor", "Situação", ""]}
      />
    </main>
  );
}
