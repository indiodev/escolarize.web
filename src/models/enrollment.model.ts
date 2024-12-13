import { Base } from "./base.model";
import { User } from "./user.model";

export interface Course extends Base {
  title: string;
  description: string;
  price: number;
  school_id: number;
}

export interface Class extends Base {
  code: string;
  capacity: number;
  start_hour: string;
  final_hour: string;
  number_of_student_accepted: number;
  number_of_student_on_reserve: number;
  school_id: number;
  days_of_week: string;
  audience: string;
  course: Partial<Course> | null;
  age_group: string;
}

export interface School extends Base {
  phone: string;
  cnpj: string;
  slug: string;
  user_id: number;
  user: Partial<User> | null;
  classes: Class[];
}
