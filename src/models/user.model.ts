import type { Role } from "./auth.model";
import type { Base } from "./base.model";
import { Responsible } from "./responsible.model";

export interface User extends Base {
  name: string;
  email: string;
  password: string;
  role: Role;
  accepted_terms: boolean;
  responsible: Partial<Responsible> | null;

  birth_date: string | null;
  avatar: string | null;
  // gender: null;
}
