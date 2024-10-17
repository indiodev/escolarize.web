import { Layout } from "@/layouts";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AdministratorPaymentPage = React.lazy(async function () {
  const module = await import("@/pages/app/administrator/payment");
  return {
    default: module.Payment,
  };
});

const AdministratorResponsiblePage = React.lazy(async function () {
  const module = await import("@/pages/app/administrator/payment");
  return {
    default: module.Payment,
  };
});

export function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout.App.Administrator />}>
        <Route path="/responsible" element={<AdministratorResponsiblePage />} />
        <Route path="/payment" element={<AdministratorPaymentPage />} />
      </Route>
    </Routes>
  );
}
