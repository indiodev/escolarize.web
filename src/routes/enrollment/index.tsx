import { Layout } from "@/layouts";
import React from "react";
import { Route, Routes } from "react-router-dom";

const SchoolRouter = React.lazy(async function () {
  const module = await import("./school");
  return {
    default: module.Router,
  };
});

// const ForgotPasswordRouter = React.lazy(async function () {
//   const module = await import("./forgot-password");
//   return {
//     default: module.Router,
//   };
// });

export function Router(): React.ReactElement {
  return (
    <Routes>
      * children routes. Specifically, it includes the "school" sub-route
      handled by * the SchoolRouter component. */
      <Route path="/enrollment/*" element={<Layout.Root />}>
        <Route path="school/*" element={<SchoolRouter />} />
      </Route>
    </Routes>
  );
}
