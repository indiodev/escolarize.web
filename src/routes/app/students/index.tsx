import { Layout } from "@/layouts";
import React from "react";
import { Route, Routes } from "react-router-dom";

const StudentsDashboardPage = React.lazy(async function () {
  const module = await import("@/pages/app/students/dashboard");
  return {
    default: module.Dashboard,
  };
});

const StudentsProfilePage = React.lazy(async function () {
  const module = await import("@/pages/app/students/profile");
  return {
    default: module.Profile,
  };
});

const StudentsSettingPage = React.lazy(async function () {
  const module = await import("@/pages/app/students/setting");
  return {
    default: module.Setting,
  };
});

export function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout.App.Students/>}>
        <Route path="/dashboard" element={<StudentsDashboardPage />} />
        <Route path="/profile" element={<StudentsProfilePage />} />
        <Route path="/setting" element={<StudentsSettingPage />} />
      </Route>
    </Routes>
  );
}
