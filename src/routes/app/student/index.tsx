import { Layout } from "@/layouts";
import React from "react";
import { Route, Routes } from "react-router-dom";

const StudentDashboardPage = React.lazy(async function () {
  const module = await import("@/pages/app/student/dashboard");
  return {
    default: module.Dashboard,
  };
});

const StudentProfilePage = React.lazy(async function () {
  const module = await import("@/pages/app/student/profile");
  return {
    default: module.Profile,
  };
});

const StudentSettingPage = React.lazy(async function () {
  const module = await import("@/pages/app/student/setting");
  return {
    default: module.Setting,
  };
});

export function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout.App.Student />}>
        <Route path="/dashboard" element={<StudentDashboardPage />} />
        <Route path="/profile" element={<StudentProfilePage />} />
        <Route path="/setting" element={<StudentSettingPage />} />
      </Route>
    </Routes>
  );
}
