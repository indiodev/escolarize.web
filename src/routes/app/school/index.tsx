import { Layout } from "@/layouts";
import React from "react";
import { Route, Routes } from "react-router-dom";

const SchoolDashboardPage = React.lazy(async function () {
  const module = await import("@/pages/app/school/dashboard");
  return {
    default: module.Dashboard,
  };
});

const SchoolPaymentPage = React.lazy(async function () {
  const module = await import("@/pages/app/school/payment");
  return {
    default: module.Payment,
  };
});

const SchoolResponsiblePage = React.lazy(async function () {
  const module = await import("@/pages/app/school/responsible");
  return {
    default: module.Responsible,
  };
});

const SchoolStudentPage = React.lazy(async function () {
  const module = await import("@/pages/app/school/student");
  return {
    default: module.Student,
  };
});

const SchoolProfilePage = React.lazy(async function () {
  const module = await import("@/pages/app/school/profile");
  return {
    default: module.Profile,
  };
});

const SchoolSettingPage = React.lazy(async function () {
  const module = await import("@/pages/app/school/setting");
  return {
    default: module.Setting,
  };
});

export function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout.App.School />}>
        <Route path="/dashboard" element={<SchoolDashboardPage />} />
        <Route path="/responsible" element={<SchoolResponsiblePage />} />
        <Route path="/student" element={<SchoolStudentPage />} />
        <Route path="/payment" element={<SchoolPaymentPage />} />
        <Route path="/profile" element={<SchoolProfilePage />} />
        <Route path="/setting" element={<SchoolSettingPage />} />
      </Route>
    </Routes>
  );
}
