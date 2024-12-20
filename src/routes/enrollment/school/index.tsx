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

const SuccessPage = React.lazy(async function () {
  const module = await import("@/pages/enrollment/success");
  return {
    default: module.Success,
  };
});

const ProofOfPaymentPage = React.lazy(async function () {
  const module = await import("@/pages/enrollment/proof_of_payment");
  return {
    default: module.ProofOfPayment,
  };
});

export function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path=":slug" element={<SchoolPage />} />
      <Route path=":slug/student" element={<StudentPage />} />
      <Route path=":slug/responsible" element={<ResponsiblePage />} />
      <Route path=":slug/address" element={<AddressPage />} />
      <Route path=":slug/success" element={<SuccessPage />} />
      <Route path=":slug/proof-of-payment" element={<ProofOfPaymentPage />} />
    </Routes>
  );
}
