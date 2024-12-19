import React from "react";
import { Route, Routes } from "react-router-dom";

const SignInResponsiblePage = React.lazy(async function () {
  const module = await import("@/pages/auth/sign-in/responsible");
  return {
    default: module.Responsible,
  };
});

const SignInAdministratorPage = React.lazy(async function () {
  const module = await import("@/pages/auth/sign-in/administrator");

  return {
    default: module.Administrator,
  };
});

export function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path="/responsible" element={<SignInResponsiblePage />} />

      <Route path="/administrator" element={<SignInAdministratorPage />} />
    </Routes>
  );
}
