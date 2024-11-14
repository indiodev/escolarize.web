import { Responsible } from "./responsible.model";

export type Role = "ADMINISTRATOR" | "RESPONSIBLE" | "SCHOOL";

export type AuthTokenResponse = {
  token: string;
  type: string;
  expires_at: string;
};

export type AuthSignIn = {
  access: Role;
  login: string;
  password: string;
};

export type AuthSignUp = {
  name: string;
  email: string;
  password: string;
  accepted_terms: boolean;
  access: Role;
  // address: Omit<Address, "user">;
  responsible: Pick<Responsible, "cpf" | "phone">;
};
