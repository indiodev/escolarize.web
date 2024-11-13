import AdministratorService from "./administrator.service";
import AuthService from "./auth.service";

export const Service = {
  auth: new AuthService(),
  // responsible: new CompanyService(),
  administrator: new AdministratorService(),
};
