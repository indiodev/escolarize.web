import { Base } from "./base.model";
import { Class } from "./class.model";
import { User } from "./user.model";

export interface School extends Base {
  phone: string;
  cnpj: string;
  slug: string;
  user_id: number;
  user: Partial<User> | null;
  classes: Class[];
}
