import React from "react";

import { Outlet } from "react-router-dom";
export function Auth(): React.ReactElement {
  return (
    <section className="flex h-screen w-full">
      <div className=" h-auto m-auto p-10 rounded-2xl w-auto">
        <Outlet />
      </div>
    </section>
  );
}
