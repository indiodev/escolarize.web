import React from "react";

import { Outlet } from "react-router-dom";
export function Auth(): React.ReactElement {
  return (
    <section className="flex h-screen bg-app-neutral-13 w-full">
      <div className="bg-app-neutral-14 h-auto m-auto p-10 rounded-2xl w-auto">
        <Outlet />
      </div>
    </section>
  );
}
