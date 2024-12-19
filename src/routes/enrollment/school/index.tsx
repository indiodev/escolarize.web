import React from "react";
import { Route, Routes } from "react-router-dom";

const SchoolPage = React.lazy(async function () {
  const module = await import("@/pages/enrollment/school");
  return {
    default: module.School,
  };
});

// const SignInAdministratorPage = React.lazy(async function () {
//   const module = await import("@/pages/auth/sign-in/administrator");

//   return {
//     default: module.Administrator,
//   };
// });

const StudentPage = React.lazy(async function () {
  const module = await import("@/pages/enrollment/student");
  return {
    default: module.Student,
  };
});

const ContinueWithResponsiblePage = React.lazy(async function () {
  const module = await import("@/pages/enrollment/continue-with-responsible");
  return {
    default: module.ContinueWithResponsible,
  };
});

const ResponsiblePage = React.lazy(async function () {
  const module = await import("@/pages/enrollment/responsible");
  return {
    default: module.Responsible,
  };
});

const AddressPage = React.lazy(async function () {
  const module = await import("@/pages/enrollment/address");
  return {
    default: module.Address,
  };
});

const FinishPage = React.lazy(async function () {
  const module = await import("@/pages/enrollment/finish");
  return {
    default: module.Finish,
  };
});

export function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path=":slug" element={<SchoolPage />} />
      <Route path=":slug/student" element={<StudentPage />} />
      <Route
        path=":slug/continue-with-responsible"
        element={<ContinueWithResponsiblePage />}
      />
      <Route path=":slug/responsible" element={<ResponsiblePage />} />
      <Route path=":slug/address" element={<AddressPage />} />
      <Route path=":slug/finish" element={<FinishPage />} />
    </Routes>
  );
}
