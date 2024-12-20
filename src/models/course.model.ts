import { Base } from "./base.model";

export interface Course extends Base {
  title: string;
  description: string;
  price: number;
  school_id: number;
  tags: string[];
}
