import { InputSearch } from "@/components/global/input-search";
import { Pagination } from "@/components/global/pagination/pagination";
import { PerPage } from "@/components/global/pagination/per-page";
import React from "react";
import { Table } from "./table";

export function Responsible(): React.ReactElement {
  // const location = useLocation();
  // const [params, setParams] = useSearchParams(
  //   new URLSearchParams(location.search)
  // );

  const meta = {
    total: 3,
    perPage: 1,
    currentPage: 1,
    lastPage: 3,
    firstPage: 1,
    firstPageUrl: "/page/1",
    lastPageUrl: "/page/3",
    nextPageUrl: "/page/2",
    previousPageUrl: null,
  };

  return (
    <main className="container space-y-5">
      <h2 className="text-2xl font-semibold">Responsáveis</h2>

      <section className="inline-flex items-center space-x-10 w-full">
        <InputSearch />
        <PerPage />
      </section>

      <div className="flex flex-col gap-4">
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
        {meta?.total > meta?.perPage && <Pagination meta={meta} />}
      </div>
    </main>
  );
}
