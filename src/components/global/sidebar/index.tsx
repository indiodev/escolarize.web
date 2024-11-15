import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar as Root,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { MENU } from "@/lib/menu";
import { cn } from "@/lib/utils";
import { AuthStore } from "@/store/auth.store";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronsLeft, ChevronsRight, ChevronUp, LogOut } from "lucide-react";
import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export function Sidebar() {
  const { toggleSidebar, open, isMobile } = useSidebar();
  const navigate = useNavigate();
  const location = useLocation();
  const auth = AuthStore();
  const ACCESS = auth.access! as keyof typeof MENU;
  // const newTableButtonRef = React.useRef<HTMLButtonElement | null>(null);

  return (
    <React.Fragment>
      <Root variant="floating" collapsible="icon">
        <SidebarHeader className="dark:bg-secondary">
          <div
            className={cn(
              "inline-flex w-full justify-end",
              !open && !isMobile && "justify-center"
            )}
          >
            <Button
              data-sidebar="trigger"
              variant="ghost"
              size="icon"
              className="border p-0 w-6 h-6 bg-primary text-primary-foreground dark:text-foreground"
              onClick={toggleSidebar}
            >
              {open && <ChevronsLeft className="w-5 h-5 " />}
              {!open && <ChevronsRight className="w-5 h-5 " />}
            </Button>
          </div>
          <div className="inline-flex w-full justify-center">
            <div className="py-4">
              {/* <img
                src={open ? "/logo.png" : "/simple-logo.png"}
                alt="Logo Easy base"
                loading="lazy"
                className={cn("w-40 object-cover", !open && "w-9 h-9")}
              /> */}
              <h1
                className={cn(
                  "font-bold text-2xl text-primary/80 dark:text-foreground",
                  !open && "hidden"
                )}
              >
                Escolarize
              </h1>
              <h1
                className={cn(
                  "font-bold text-2xl text-primary/80 dark:text-foreground",
                  open && "hidden"
                )}
              >
                EZ
              </h1>
            </div>
          </div>
        </SidebarHeader>

        <Separator className="w-full h-1" />

        <SidebarContent className="dark:bg-secondary">
          <SidebarGroup>
            <SidebarMenu>
              {MENU[ACCESS]?.SIDEBAR?.map((item) => {
                const KEY = `${ACCESS}-${item.pathname}` as const;
                return (
                  <React.Fragment key={KEY}>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        className="py-6 [&[data-active=true]]:bg-primary/80 [&[data-active=true]>span]:text-white [&[data-active=true]>svg]:text-white"
                        isActive={location.pathname === item.pathname}
                        onClick={() => {
                          if (isMobile) {
                            toggleSidebar();
                            return;
                          }
                        }}
                      >
                        <NavLink to={item.pathname}>
                          <item.icon className="h-5 w-5 text-foreground" />
                          <span className="text-lg text-foreground">
                            {item.label}
                          </span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    {item?.hasSeparator && <Separator className="mt-1 mb-1" />}
                  </React.Fragment>
                );
              })}
              {(isMobile || !open) && (
                <React.Fragment>
                  {MENU[ACCESS]?.DROPDOWN?.map((item) => {
                    const KEY = `${ACCESS}-${item.pathname}` as const;
                    return (
                      <React.Fragment key={KEY}>
                        <SidebarMenuItem>
                          <SidebarMenuButton
                            asChild
                            className="py-6 [&[data-active=true]]:bg-primary/80 [&[data-active=true]>span]:text-white [&[data-active=true]>svg]:text-white"
                            isActive={location.pathname === item.pathname}
                            onClick={() => {
                              if (isMobile) {
                                toggleSidebar();
                                return;
                              }
                            }}
                          >
                            <NavLink to={item.pathname}>
                              <item.icon className="h-5 w-5 text-foreground" />
                              <span className="text-lg text-foreground">
                                {item.label}
                              </span>
                            </NavLink>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        {item?.hasSeparator && (
                          <Separator className="mt-1 mb-1" />
                        )}
                      </React.Fragment>
                    );
                  })}
                  <SidebarMenuButton
                    className="py-6 [&[data-active=true]]:bg-foreground [&[data-active=true]>span]:text-white [&[data-active=true]>svg]:text-white"
                    onClick={() => {
                      navigate(
                        "/auth/sign-in/".concat(
                          auth.access?.toLowerCase() || ""
                        ),
                        { replace: true }
                      );
                      auth.clear();
                    }}
                  >
                    <LogOut className="h-5 w-5 text-foreground" />
                    <span className="text-lg text-foreground">Sair</span>
                  </SidebarMenuButton>
                </React.Fragment>
              )}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="bg-primary/80 p-0 rounded-md">
          <SidebarMenu>
            {!(isMobile || !open) && (
              <SidebarMenuItem>
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton className="h-14 rounded-md">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src="/profile.png" loading="lazy" />
                        <AvatarFallback>EZ</AvatarFallback>
                      </Avatar>
                      <span className="text-lg text-neutral-100 font-semibold">
                        Escolarize
                      </span>
                      <ChevronUp className="ml-auto text-white" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    side="top"
                    className="w-[--radix-popper-anchor-width] bg-foreground dark:bg-primary/80"
                  >
                    {MENU[ACCESS].DROPDOWN.map((item) => {
                      const KEY = `${ACCESS}-${item.pathname}` as const;
                      return (
                        <DropdownMenuItem asChild key={KEY}>
                          <NavLink
                            to={item.pathname}
                            className="space-x-1 group"
                          >
                            <item.icon className="h-5 w-5 text-white group-hover:text-foreground" />
                            <span className="text-lg text-white group-hover:text-foreground">
                              {item.label}
                            </span>
                          </NavLink>
                        </DropdownMenuItem>
                      );
                    })}
                    <DropdownMenuItem asChild>
                      <SidebarMenuButton
                        className="py-5 group"
                        onClick={() => {
                          navigate(
                            "/auth/sign-in/".concat(
                              auth.access?.toLowerCase() || ""
                            ),
                            { replace: true }
                          );
                          auth.clear();
                        }}
                      >
                        <LogOut className="h-5 w-5 text-white group-hover:text-foreground" />
                        <span className="text-lg text-white group-hover:text-foreground">
                          Sair
                        </span>
                      </SidebarMenuButton>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            )}
          </SidebarMenu>
        </SidebarFooter>
      </Root>
      {/* <Modal.NewTable ref={newTableButtonRef} /> */}
    </React.Fragment>
  );
}
