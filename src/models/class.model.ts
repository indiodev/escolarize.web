import { Base } from "./base.model";
import { Course } from "./course.model";

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
