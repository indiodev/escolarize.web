import AdministratorService from "./administrator.service";
import AuthService from "./auth.service";
import EnrollmentService from "./enrollment.service";
import SchoolService from "./school.service";

export const Service = {
  auth: new AuthService(),
  // responsible: new CompanyService(),
  administrator: new AdministratorService(),
  enrollment: new EnrollmentService(),
  school: new SchoolService(),
};
