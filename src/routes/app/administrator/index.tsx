import { Layout } from "@/layouts";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AdministratorDashboardPage = React.lazy(async function () {
  const module = await import("@/pages/app/administrator/dashboard");
  return {
    default: module.Dashboard,
  };
});

const AdministratorPaymentPage = React.lazy(async function () {
  const module = await import("@/pages/app/administrator/payment");
  return {
    default: module.Payment,
  };
});

const AdministratorResponsiblePage = React.lazy(async function () {
  const module = await import("@/pages/app/administrator/responsible");
  return {
    default: module.Responsible,
  };
});

const AdministratorProfilePage = React.lazy(async function () {
  const module = await import("@/pages/app/administrator/profile");
  return {
    default: module.Profile,
  };
});

const AdministratorSettingPage = React.lazy(async function () {
  const module = await import("@/pages/app/administrator/setting");
  return {
    default: module.Setting,
  };
});

export function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout.App.Administrator />}>
        <Route path="/dashboard" element={<AdministratorDashboardPage />} />
        <Route path="/responsible" element={<AdministratorResponsiblePage />} />
        <Route path="/payment" element={<AdministratorPaymentPage />} />
        <Route path="/profile" element={<AdministratorProfilePage />} />
        <Route path="/setting" element={<AdministratorSettingPage />} />
      </Route>
    </Routes>
  );
}
