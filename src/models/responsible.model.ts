import { Base } from "./base.model";
import { User } from "./user.model";

export interface Responsible extends Base {
  phone: string;
  cpf: string;
  user_id: number;
  user?: User;
}
