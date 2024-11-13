import { InputSearch } from "@/components/global/input-search";
import { Pagination } from "@/components/global/pagination/pagination";
import { PerPage } from "@/components/global/pagination/per-page";
import { useAdminListPaymentsQuery } from "@/query/admin/list-payments-paginate.query";
import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Table } from "./table";

export function Payment(): React.ReactElement {
  const location = useLocation();
  const [searchParams] = useSearchParams(new URLSearchParams(location.search));

  const { data: payments_list, status: payments_list_status } =
    useAdminListPaymentsQuery({
      page: Number(searchParams.get("page") || 1),
      per_page: Number(searchParams.get("per_page") || 10),
      ...(searchParams.get("search") && {
        search: searchParams.get("search")!,
      }),
    });

  console.log(payments_list);
  console.log(payments_list_status);

  if (payments_list_status === "error") {
    return (
      <main className="container flex justify-center items-center">
        <h2>Houve um erro ao buscar os dados.</h2>
        <p>Por favor, tente mais tarde.</p>
      </main>
    );
  }

  if (payments_list_status === "pending") {
    return (
      <main className="container flex justify-center items-center">
        <h2>Buscando dados...</h2>
        {/* <p>Por favor, tente mais tarde.</p> */}
      </main>
    );
  }

  if (payments_list_status === "success" && !(payments_list?.meta?.total > 0)) {
    return (
      <main className="container flex justify-center items-center h-full">
        <h2>Nenhum registro encontrado.</h2>
        {/* <p>Por favor, tente mais tarde.</p> */}
      </main>
    );
  }

  return (
    <main className="container space-y-5">
      <h2 className="text-2xl font-semibold">Mensalidades/Pagamentos</h2>

      <section className="inline-flex items-center space-x-10 w-full">
        <InputSearch />
        <PerPage />
      </section>

      <div className="flex flex-col gap-4">
        <Table
          data={payments_list?.data || []}
          labels={[
            "Nome",
            "Email",
            "Telefone",
            "CPF",
            "Referência",
            "Vencimento",
            "Valor",
            "Situação",
          ]}
        />
        {payments_list?.meta?.total > payments_list?.meta?.perPage && (
          <Pagination meta={payments_list?.meta} />
        )}
      </div>
    </main>
  );
}
