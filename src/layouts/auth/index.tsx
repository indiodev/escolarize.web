import React from "react";

import { Outlet } from "react-router-dom";
export function Auth(): React.ReactElement {
  return (
    <section className="flex h-screen w-full justify-center items-center p-10">
      <Outlet />
    </section>
  );
}
