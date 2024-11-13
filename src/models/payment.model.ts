import { Base } from "./base.model";

// status temporário, esperando o backend
export type Status = "Paga" | "Pendente";

export interface Payment extends Base {
  date: string;
  status: Status;
  course: string;
  cpf: string;
  email: string;
  phone: string;
  nome: string;
}