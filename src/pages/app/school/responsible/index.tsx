import { InputSearch } from "@/components/global/input-search";
import { Pagination } from "@/components/global/pagination/pagination";
import { PerPage } from "@/components/global/pagination/per-page";
import { useSchoolResponsiblePaginateQuery } from "@/query/school/responsible/paginate.query";
import { LoaderCircle, ServerOff } from "lucide-react";
import React from "react";
import { Table } from "./table";

export function Responsible(): React.ReactElement {
  const { data: response, status: status_response } =
    useSchoolResponsiblePaginateQuery({});

  if (status_response === "pending") {
    return (
      <main className="container gap-4 max-w-full w-full h-full flex flex-col">
        <h2 className="text-2xl font-semibold">Responsáveis</h2>

        <section className="inline-flex items-center gap-10 w-full">
          <InputSearch />
          <PerPage />
        </section>

        <div className="flex-1 flex justify-center items-center">
          <LoaderCircle className="w-12 h-12 animate-spin" />
        </div>
      </main>
    );
  }

  if (status_response === "error") {
    return (
      <main className="container gap-4 max-w-full w-full h-full flex flex-col">
        <h2 className="text-2xl font-semibold">Responsáveis</h2>

        <section className="inline-flex items-center gap-10 w-full">
          <InputSearch />
          <PerPage />
        </section>

        <div className="flex-1 flex justify-center items-center flex-col gap-6">
          <ServerOff className="w-12 h-12" />
          <h2 className="text-2xl font-semibold">
            Houve um erro ao buscar os dados.
          </h2>
        </div>
      </main>
    );
  }

  return (
    <main className="container gap-4 max-w-full w-full h-full flex flex-col">
      <h2 className="text-2xl font-semibold">Responsáveis</h2>

      <section className="inline-flex items-center gap-10 w-full">
        <InputSearch />
        <PerPage />
      </section>

      <div className="flex flex-col gap-4">
        <Table
          data={response?.data || []}
          labels={["Nome", "E-mail", "CPF", "Celular (Whatsapp)"]}
        />
        {response?.meta?.total > response?.meta?.perPage && (
          <Pagination meta={response?.meta} />
        )}
      </div>
    </main>
  );
}
