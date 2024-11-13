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
import { cn } from "@/lib/utils";
import { AuthStore } from "@/store/auth.store";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  ChevronsLeft,
  ChevronsRight,
  ChevronUp,
  Home,
  LayoutGrid,
  LogOut,
  Settings,
  User,
  Users,
} from "lucide-react";
import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export function Sidebar() {
  const { toggleSidebar, open, isMobile } = useSidebar();
  const navigate = useNavigate();
  const location = useLocation();
  const auth = AuthStore();
  // const newTableButtonRef = React.useRef<HTMLButtonElement | null>(null);

  return (
    <React.Fragment>
      <Root variant="floating" collapsible="icon">
        <SidebarHeader>
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
              className="border  p-0 w-6 h-6"
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
              <h1 className={cn("w-40 object-cover", !open && "hidden")}>
                School Manager
              </h1>
              <h1 className={cn("font-bold text-2xl", open && "hidden")}>SM</h1>
            </div>
          </div>
        </SidebarHeader>

        <Separator className="w-full h-1" />

        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="py-6 [&[data-active=true]]:bg-foreground [&[data-active=true]>span]:text-white [&[data-active=true]>svg]:text-white"
                  isActive={
                    location.pathname === "/app/administrator/dashboard"
                  }
                >
                  <NavLink to="/app/administrator/dashboard">
                    <Home className="h-5 w-5 text-foreground" />
                    <span className="text-lg text-foreground">Inicio</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>

            <Separator className="mt-1 mb-1" />

            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="py-6 [&[data-active=true]]:bg-foreground [&[data-active=true]>span]:text-white [&[data-active=true]>svg]:text-white"
                  isActive={location.pathname === "/app/administrator/payment"}
                >
                  <NavLink to="/app/administrator/payment">
                    <LayoutGrid className="h-5 w-5 text-foreground" />
                    <span className="text-lg text-foreground">
                      Mensalidades
                    </span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="py-6 [&[data-active=true]]:bg-foreground [&[data-active=true]>span]:text-white [&[data-active=true]>svg]:text-white"
                  isActive={
                    location.pathname === "/app/administrator/responsible"
                  }
                >
                  <NavLink to="/app/administrator/responsible">
                    <LayoutGrid className="h-5 w-5 text-foreground" />
                    <span className="text-lg text-foreground">
                      Responsáveis
                    </span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {(isMobile || !open) && (
                <React.Fragment>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className="py-6 [&[data-active=true]]:bg-foreground [&[data-active=true]>span]:text-white [&[data-active=true]>svg]:text-white"
                      isActive={
                        location.pathname === "/app/administrator/users"
                      }
                    >
                      <NavLink to="/app/administrator/users">
                        <Users className="h-5 w-5 text-foreground" />
                        <span className="text-lg text-foreground">
                          Usuários
                        </span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className="py-6 [&[data-active=true]]:bg-foreground [&[data-active=true]>span]:text-white [&[data-active=true]>svg]:text-white"
                      isActive={
                        location.pathname === "/app/administrator/settings"
                      }
                    >
                      <NavLink to="/app/administrator/settings">
                        <Settings className="h-5 w-5 text-foreground" />
                        <span className="text-lg text-foreground">
                          Configurações
                        </span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className="py-6 [&[data-active=true]]:bg-foreground [&[data-active=true]>span]:text-white [&[data-active=true]>svg]:text-white"
                      isActive={
                        location.pathname === "/app/administrator/profile"
                      }
                    >
                      <NavLink to="/app/administrator/profile">
                        <User className="h-5 w-5 text-foreground" />
                        <span className="text-lg text-foreground">Perfil</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton
                      className="py-6"
                      onClick={() => {
                        auth.clear();
                        navigate("/", { replace: true });
                      }}
                    >
                      <LogOut className="h-5 w-5 text-foreground" />
                      <span className="text-lg text-foreground">Sair</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </React.Fragment>
              )}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="bg-foreground p-0 rounded-md">
          <SidebarMenu>
            {!(isMobile || !open) && (
              <SidebarMenuItem>
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton className="h-14 rounded-md">
                      {/* {user_status === "success" && (
                        <React.Fragment>
                          <Avatar className="w-10 h-10">
                            <AvatarImage src="/profile.png" loading="lazy" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <span className="text-lg text-neutral-100 font-semibold">
                            {user?.name?.split(" ")[0]}
                          </span>
                        </React.Fragment>
                      )} */}

                      {/* {!(user_status === "success") && ( */}
                      <React.Fragment>
                        <Avatar className="w-10 h-10">
                          <AvatarImage src="/profile.png" loading="lazy" />
                          <AvatarFallback>SM</AvatarFallback>
                        </Avatar>
                        <span className="text-lg text-neutral-100 font-semibold">
                          School Manager
                        </span>
                      </React.Fragment>
                      {/* )} */}
                      <ChevronUp className="ml-auto text-white" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    side="top"
                    className="w-[--radix-popper-anchor-width] bg-foreground"
                  >
                    <DropdownMenuItem asChild>
                      <NavLink
                        to="/app/administrator/profile"
                        className="space-x-1 group"
                      >
                        <User className="h-5 w-5 text-white group-hover:text-foreground" />
                        <span className="text-lg text-white group-hover:text-foreground">
                          Perfil
                        </span>
                      </NavLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <NavLink to="/app/users" className="space-x-1 group">
                        <User className="h-5 w-5 text-white group-hover:text-foreground" />
                        <span className="text-lg text-white group-hover:text-foreground">
                          Usuários
                        </span>
                      </NavLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <NavLink to="/app/settings" className="space-x-1 group">
                        <Settings className="h-5 w-5 text-white group-hover:text-foreground" />
                        <span className="text-lg text-white group-hover:text-foreground">
                          Configurações
                        </span>
                      </NavLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <SidebarMenuButton
                        className="py-5 group"
                        onClick={() => {
                          auth.clear();
                          navigate("/", { replace: true });
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
