import React from "react";
import { Route, Routes } from "react-router-dom";

const SignInAdministratorPage = React.lazy(async function () {
  const module = await import("@/pages/auth/sign-in/administrator");

  return {
    default: module.Administrator,
  };
});

const SignInSchoolPage = React.lazy(async function () {
  const module = await import("@/pages/auth/sign-in/school");
  return {
    default: module.School,
  };
});

const SignInResponsiblePage = React.lazy(async function () {
  const module = await import("@/pages/auth/sign-in/responsible");
  return {
    default: module.Responsible,
  };
});

export function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path="/administrator" element={<SignInAdministratorPage />} />
      <Route path="/school" element={<SignInSchoolPage />} />
      <Route path="/responsible" element={<SignInResponsiblePage />} />
    </Routes>
  );
}
