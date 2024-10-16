import React from "react";
import { Route, Routes } from "react-router-dom";

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
        <Route path="responsible/*" element={<ResponsibleRouter />} />
      </Route>
    </Routes>
  );
}
