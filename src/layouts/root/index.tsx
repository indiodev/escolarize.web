import { LoaderCircle } from "lucide-react";
import React from "react";

import { Outlet } from "react-router-dom";
export function Root(): React.ReactElement {
  return (
    <section className="w-full h-full">
      <React.Suspense
        fallback={<LoaderCircle className="w-6 h-6 animate-spin" />}
      >
        <Outlet />
      </React.Suspense>
    </section>
  );
}
