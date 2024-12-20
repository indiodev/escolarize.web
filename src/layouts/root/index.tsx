import { LoaderCircle } from "lucide-react";
import React from "react";

import { Outlet } from "react-router-dom";

function Fallback(): React.ReactElement {
  return (
    <main className="container gap-4 max-w-full w-full h-full flex flex-col">
      <div className="flex-1 flex justify-center items-center">
        <LoaderCircle className="w-12 h-12 animate-spin" />
      </div>
    </main>
  );
}
export function Root(): React.ReactElement {
  return (
    <main className="flex-1 overflow-hidden h-auto">
      <React.Suspense fallback={<Fallback />}>
        <Outlet />
      </React.Suspense>
    </main>
  );
}
