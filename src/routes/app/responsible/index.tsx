import { Layout } from "@/layouts";
import React from "react";
import { Route, Routes } from "react-router-dom";

const ResponsiblePaymentPage = React.lazy(async function () {
  const module = await import("@/pages/app/responsible/payment");
  return {
    default: module.Payment,
  };
});

export function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout.App.Responsible />}>
        <Route path="/payment" element={<ResponsiblePaymentPage />} />
      </Route>
    </Routes>
  );
}
