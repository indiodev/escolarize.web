import { Layout } from "@/layouts";
import React from "react";
import { Route, Routes } from "react-router-dom";

const SchoolsDashboardPage = React.lazy(async function () {
  const module = await import("@/pages/app/schools/dashboard");
  return {
    default: module.Dashboard,
  };
});

const SchoolsPaymentPage = React.lazy(async function () {
  const module = await import("@/pages/app/schools/payment");
  return {
    default: module.Payment,
  };
});

const SchoolsResponsiblePage = React.lazy(async function () {
  const module = await import("@/pages/app/schools/responsible");
  return {
    default: module.Responsible,
  };
});

const SchoolsProfilePage = React.lazy(async function () {
  const module = await import("@/pages/app/schools/profile");
  return {
    default: module.Profile,
  };
});

const SchoolsSettingPage = React.lazy(async function () {
  const module = await import("@/pages/app/schools/setting");
  return {
    default: module.Setting,
  };
});

export function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout.App.Schools/>}>
        <Route path="/dashboard" element={<SchoolsDashboardPage />} />
        <Route path="/responsible" element={<SchoolsResponsiblePage />} />
        <Route path="/payment" element={<SchoolsPaymentPage />} />
        <Route path="/profile" element={<SchoolsProfilePage />} />
        <Route path="/setting" element={<SchoolsSettingPage />} />
      </Route>
    </Routes>
  );
}
