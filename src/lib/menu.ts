import {
  Book,
  BookMarked,
  GraduationCapIcon,
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
      label: "Dashboard",
      pathname: "/app/school/dashboard",
      icon: Home,
      hasSeparator: true,
    },
    // {
    //   label: "Mensalidades",
    //   pathname: "/app/school/payment",
    //   icon: HandCoins,
    //   hasSeparator: false,
    // },
    {
      label: "Estudantes",
      pathname: "/app/school/student",
      icon: User,
      hasSeparator: false,
    },
    {
      label: "Responsáveis",
      pathname: "/app/school/responsible",
      icon: Users,
      hasSeparator: false,
    },
    {
      label: "Cursos",
      pathname: "/app/school/course",
      icon: BookMarked,
      hasSeparator: false,
    },
  ],
  DROPDOWN: [
    {
      label: "Perfil",
      pathname: "/app/school/profile",
      icon: User,
      hasSeparator: false,
    },
    {
      pathname: "/app/school/setting",
      label: "Configurações",
      icon: Settings,
      hasSeparator: false,
    },
  ],
} as const;

const STUDENTS: Context = {
  SIDEBAR: [
    {
      label: "Inicio",
      pathname: "/app/student/dashboard",
      icon: Home,
      hasSeparator: true,
    },
  ],
  DROPDOWN: [
    {
      label: "Perfil",
      pathname: "/app/student/profile",
      icon: User,
      hasSeparator: false,
    },
    {
      pathname: "/app/student/setting",
      label: "Configurações",
      icon: Settings,
      hasSeparator: false,
    },
  ],
} as const;

const RESPONSIBLE: Context = {
  SIDEBAR: [
    {
      label: "Inicio",
      pathname: "/app/responsible",
      icon: Home,
      hasSeparator: true,
    },
    {
      label: "Mensalidades",
      pathname: "/app/responsible/payment",
      icon: HandCoins,
      hasSeparator: false,
    },
  ],
  DROPDOWN: [
    {
      label: "Perfil",
      pathname: "/app/responsible/profile",
      icon: User,
      hasSeparator: false,
    },
    {
      label: "Configurações",
      pathname: "/app/responsible/setting",
      icon: Settings,
      hasSeparator: false,
    },
  ],
} as const;

// exemplo
export const MENU = {
  ADMINISTRATOR,
  SCHOOL,
  STUDENTS,
  RESPONSIBLE,
} as const;
