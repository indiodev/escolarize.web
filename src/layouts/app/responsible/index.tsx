import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { ChevronsLeft, ChevronsRight, LogOut } from "lucide-react";
import React from "react";
import { Outlet } from "react-router-dom";
// import { Icon } from '@components/icons';
// import { Loading } from '@components/loading';
// import { Logo } from '@components/logo';
// import { ROUTER } from '@libs/constant';

// import { Modal as BaseModal } from '../modal';

// import { Modal } from './modal';

export function Responsible(): React.ReactElement {
  // const location = useLocation();
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <section className="flex-1 flex flex-row h-screen bg-app-neutral-12 overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel
            className={cn(!open && "max-w-20", open && "max-w-56", "shadow-md")}
          >
            <Sidebar.Header>
              <Button
                onClick={() => setOpen((state) => !state)}
                className="absolute right-0 top-2 w-7 h-7 p-0 rounded-tl-full rounded-bl-full bg-indigo-500 hover:bg-indigo-600"
              >
                {!open && <ChevronsRight className="w-4 h-4" />}

                {open && <ChevronsLeft className="w-4 h-4" />}
              </Button>
              {open && (
                <h1 className="text-indigo-600 uppercase font-semibold text-3xl">
                  JEDAIS TEC
                </h1>
              )}

              {!open && (
                <h1 className="text-indigo-600 uppercase font-bold text-4xl bg-indigo-200 p-2 rounded-2xl">
                  JT
                </h1>
              )}
            </Sidebar.Header>

            <Sidebar.Menu>
              {/* {ROUTER.COMPANY.map((route) => {
              if (route.type === "button") {
                const isAddEmployeesButton =
                  route.label === "Adicionar Funcionários";

                return (
                  <Sidebar.Button
                    key={route.path}
                    {...(isAddEmployeesButton && {
                      onClick: () =>
                        companyRegisterEmployeesButtonRef.current?.click(),
                    })}
                  >
                    <route.icon />
                    <span className="text-app-neutral-03 ml-2 font-normal text-xs lg:text-base">
                      {route.label}
                    </span>
                  </Sidebar.Button>
                );
              }

              return (
                <Sidebar.Link
                  key={route.path}
                  to={route.path}
                  isActive={location.pathname === route.path}
                >
                  <route.icon />
                  <span className="text-app-neutral-03 font-normal text-base">
                    {route.label}
                  </span>
                </Sidebar.Link>
              );
            })} */}

              <Sidebar.Button
                className="w-full rounded-none p-5 bg-indigo-500 space-x-2"
                // onClick={() => signOutButtonRef.current?.click()}
              >
                {/* <Icon.SignOut /> */}
                <LogOut className={cn("w-5 h-5", !open && "w-6 h-6")} />

                {open && (
                  <span className="text-app-neutral-03 font-semibold uppercase text-base">
                    Sair
                  </span>
                )}
              </Sidebar.Button>
            </Sidebar.Menu>
          </ResizablePanel>

          <ResizablePanel>
            <React.Suspense
              fallback={
                // <Loading className="flex-1 flex justify-center items-center h-screen [&>svg]:w-44" />
                <div></div>
              }
            >
              <section className="flex-1 w-full h-auto p-12 overflow-y-auto">
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
