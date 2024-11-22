import React from "react";
import { Route, Routes } from "react-router-dom";

const AdministratorRouter = React.lazy(async function () {
  const module = await import("./administrator");
  return {
    default: module.Router,
  };
});

const SchoolsRouter = React.lazy(async function () {
  const module = await import("./schools");
  return {
    default: module.Router,
  };
});

const ResponsibleRouter = React.lazy(async function () {
  const module = await import("./responsible");
  return {
    default: module.Router,
  };
});

export function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path="app/*">
        <Route path="administrator/*" element={<AdministratorRouter />} />
        <Route path="responsible/*" element={<ResponsibleRouter />} />
        <Route path="schools/*" element={<SchoolsRouter />} />
      </Route>
    </Routes>
  );
}
