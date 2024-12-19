import { Base } from "./base.model";
import { User } from "./user.model";

export interface Course extends Base {
  title: string;
  description: string;
  price: number;
  school_id: number;
  tags: string[];
}

export interface Class extends Base {
  code: string;
  capacity: number;
  start_hour: string;
  final_hour: string;
  number_of_student_accepted: number;
  number_of_student_on_reserve: number;
  school_id: number;
  course: Partial<Course> | null;
}

export interface School extends Base {
  phone: string;
  cnpj: string;
  slug: string;
  user_id: number;
  user: Partial<User> | null;
  classes: Class[];
}
