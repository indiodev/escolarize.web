import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import {
  ChevronsLeft,
  ChevronsRight,
  HandCoins,
  LogOut,
  Users,
} from "lucide-react";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
// import { Icon } from '@components/icons';
// import { Loading } from '@components/loading';
// import { Logo } from '@components/logo';
// import { ROUTER } from '@libs/constant';

// import { Modal as BaseModal } from '../modal';

// import { Modal } from './modal';

export function Administrator(): React.ReactElement {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <section className="flex-1 flex flex-row h-screen overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel
            className={cn(
              !open && "max-w-20",
              open && "max-w-56",
              "shadow-lg relative"
            )}
          >
            <Sidebar.Header>
              {open && (
                <Button
                  onClick={() => setOpen((state) => !state)}
                  className="absolute right-0 top-2 w-7 h-7 p-0 rounded-tl-full rounded-bl-full bg-neutral-500 hover:bg-neutral-600 shadow-2xl"
                >
                  <ChevronsLeft className="w-4 h-4" />
                </Button>
              )}

              {/* <Button>
                {!open && <ChevronsRight className="w-4 h-4" />}

                {open && <ChevronsLeft className="w-4 h-4" />}
              </Button> */}
              {open && (
                <h1 className="text-neutral-600 uppercase font-semibold text-3xl">
                  JEDAIS TEC
                </h1>
              )}

              {!open && (
                <h1 className="text-neutral-600 uppercase font-bold text-4xl bg-neutral-200 p-2 rounded-2xl">
                  JT
                </h1>
              )}
            </Sidebar.Header>

            <Sidebar.Menu>
              <Sidebar.Link
                to="/app/administrator/responsible"
                isActive={
                  location.pathname === "/app/administrator/responsible"
                }
                className="w-full rounded-none p-5 space-x-2 inline-flex justify-center items-center"
              >
                <Users className={cn("w-5 h-5", !open && "w-6 h-6")} />

                {open && (
                  <span className="font-semibold uppercase text-base">
                    Responsáveis
                  </span>
                )}
              </Sidebar.Link>
              <Sidebar.Link
                to="/app/administrator/payment"
                isActive={location.pathname === "/app/administrator/payment"}
                className="w-full rounded-none p-5 space-x-2 inline-flex justify-center items-center"
              >
                <HandCoins className={cn("w-5 h-5", !open && "w-6 h-6")} />

                {open && (
                  <span className="font-semibold uppercase text-base">
                    Mensalidades
                  </span>
                )}
              </Sidebar.Link>

              <Sidebar.Button
                className="[&>*]:text-red-500"

                // onClick={() => signOutButtonRef.current?.click()}
              >
                <LogOut className={cn("w-5 h-5", !open && "w-6 h-6")} />

                {open && (
                  <span className=" font-semibold uppercase text-base">
                    Sair
                  </span>
                )}
              </Sidebar.Button>
            </Sidebar.Menu>
          </ResizablePanel>

          <ResizablePanel className="relative">
            {!open && (
              <Button
                onClick={() => setOpen((state) => !state)}
                className="absolute left-0 z-50 top-2 w-7 h-7 p-0 rounded-tr-full rounded-br-full bg-neutral-500 hover:bg-neutral-600 shadow-2xl"
              >
                <ChevronsRight className="w-4 h-4" />
              </Button>
            )}
            <React.Suspense
              fallback={
                // <Loading className="flex-1 flex justify-center items-center h-screen [&>svg]:w-44" />
                <div></div>
              }
            >
              <section className="flex-1 w-full  h-auto p-12 overflow-y-auto flex justify-center">
                <Outlet />
              </section>
            </React.Suspense>
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>
      {/* <Modal.Register ref={companyRegisterEmployeesButtonRef} /> */}
      {/* <BaseModal.SignOut ref={signOutButtonRef} /> */}
      {/* <BaseModal.CustomerService ref={customerServiceButtonRef} /> */}
    </React.Fragment>
  );
}
