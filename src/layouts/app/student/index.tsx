import { Sidebar } from "@/components/global/sidebar";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { ChevronsRight, LoaderCircle } from "lucide-react";
import React from "react";
import { Outlet } from "react-router-dom";

export function Student(): React.ReactElement {
  const { toggleSidebar, isMobile } = useSidebar();

  return (
    <React.Fragment>
      <Sidebar />
      <React.Suspense
        fallback={<LoaderCircle className="w-6 h-6 animate-spin" />}
      >
        <main className="p-2 flex-1 overflow-hidden h-screen space-y-1">
          {isMobile && (
            <section className="inline-flex w-full justify-start">
              <Button
                data-sidebar="trigger"
                variant="ghost"
                size="icon"
                className="border  p-0 w-6 h-6"
                onClick={toggleSidebar}
              >
                <ChevronsRight className="w-5 h-5 " />
              </Button>
            </section>
          )}

          <section className="flex h-full flex-1 flex-col gap-4 w-full overflow-y-auto p-4">
            <Outlet />
          </section>
        </main>
      </React.Suspense>
    </React.Fragment>
  );
}
