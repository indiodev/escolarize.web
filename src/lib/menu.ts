import {
  HandCoins,
  Home,
  LucideIcon,
  Settings,
  User,
  Users,
} from "lucide-react";

interface Route {
  pathname: string;
  label: string;
  icon: LucideIcon;
  hasSeparator: boolean;
}

interface Context {
  DROPDOWN: Route[];
  SIDEBAR: Route[];
}

const ADMINISTRATOR: Context = {
  SIDEBAR: [
    {
      label: "Inicio",
      pathname: "/app/administrator/dashboard",
      icon: Home,
      hasSeparator: true,
    },
    {
      label: "Mensalidades",
      pathname: "/app/administrator/payment",
      icon: HandCoins,
      hasSeparator: false,
    },
    {
      label: "Responsáveis",
      pathname: "/app/administrator/responsible",
      icon: Users,
      hasSeparator: false,
    },
  ],
  DROPDOWN: [
    {
      label: "Perfil",
      pathname: "/app/administrator/profile",
      icon: User,
      hasSeparator: false,
    },
    {
      pathname: "/app/administrator/setting",
      label: "Configurações",
      icon: Settings,
      hasSeparator: false,
    },
  ],
} as const;


const SCHOOL: Context = {
  SIDEBAR: [
    {
      label: "Inicio",
      pathname: "/app/schools/dashboard",
      icon: Home,
      hasSeparator: true,
    },
    {
      label: "Mensalidades",
      pathname: "/app/schools/payment",
      icon: HandCoins,
      hasSeparator: false,
    },
    {
      label: "Responsáveis",
      pathname: "/app/schools/responsible",
      icon: Users,
      hasSeparator: false,
    },
  ],
  DROPDOWN: [
    {
      label: "Perfil",
      pathname: "/app/schools/profile",
      icon: User,
      hasSeparator: false,
    },
    {
      pathname: "/app/schools/setting",
      label: "Configurações",
      icon: Settings,
      hasSeparator: false,
    },
  ],
} as const;

// exemplo
export const MENU = {
  ADMINISTRATOR,
  SCHOOL,
} as const;
