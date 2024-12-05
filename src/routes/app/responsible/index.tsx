import { Layout } from "@/layouts";
import React from "react";
import { Route, Routes } from "react-router-dom";

const ResponsiblePaymentPage = React.lazy(async function () {
  const module = await import("@/pages/app/responsible/payment");
  return {
    default: module.Payment,
  };
});

const ResponsibleProfilePage = React.lazy(async function () {
  const module = await import("@/pages/app/responsible/profile");
  return {
    default: module.Profile,
  };
});

const ResponsibleSettingPage = React.lazy(async function () {
  const module = await import("@/pages/app/responsible/setting");
  return {
    default: module.Setting,
  };
});

export function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout.App.Responsible />}>
        <Route path="/payment" element={<ResponsiblePaymentPage />} />
        <Route path="/profile" element={<ResponsibleProfilePage />} />
        <Route path="/settings" element={<ResponsibleSettingPage />} />
      </Route>
    </Routes>
  );
}
