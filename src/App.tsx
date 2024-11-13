import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter } from "react-router-dom";

// import { Toaster } from "@components/ui/toaster";
// import { tanstack } from "@libs/tanstack";

import { TANS_TACK_QUERY_CLIENT } from "./lib/tans-tack-query-client";
import { Router } from "./routes";

export function App(): React.ReactElement {
  return (
    <QueryClientProvider client={TANS_TACK_QUERY_CLIENT}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      {/* <Toaster /> */}
    </QueryClientProvider>
  );
}
