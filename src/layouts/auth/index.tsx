import { LoaderCircle } from "lucide-react";
import React from "react";

import { Outlet } from "react-router-dom";
export function Auth(): React.ReactElement {
  return (
    <section className="flex h-screen w-full justify-center items-center p-10">
      <React.Suspense
        fallback={
          <LoaderCircle className="w-6 h-6 animate-spin" />
        }
      >
        <Outlet />
			</React.Suspense>
    </section>
  );
}
