import { Layout } from "@/layouts";
import React from "react";
import { Route, Routes } from "react-router-dom";

const SingInRouter = React.lazy(async function () {
  const module = await import("./sign-in");
  return {
    default: module.Router,
  };
});

export function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path="/auth/*" element={<Layout.Auth />}>
        <Route path="sign-in/*" element={<SingInRouter />} />
      </Route>
    </Routes>
  );
}
