import { API } from "@/lib/api";
import { MetaQuery, MetaResponse } from "@/models/query.model";
import { Responsible } from "@/models/responsible.model";
import { SchoolDashboardMetric } from "@/models/school.model";
import { Student } from "@/models/student.model";

export default class SchoolService {
  async dashboard(query: MetaQuery): Promise<SchoolDashboardMetric> {
    const { data } = await API.get("/school/dashboard", {
      params: { ...query },
    });
    return data;
  }

  async responsiblePaginate(
    query: MetaQuery
  ): Promise<MetaResponse<Responsible[]>> {
    const { data } = await API.get("/school/responsible/paginate", {
      params: { ...query },
    });
    return data;
  }

  async studentPaginate(query: MetaQuery): Promise<MetaResponse<Student[]>> {
    const { data } = await API.get("/school/student/paginate", {
      params: { ...query },
    });
    return data;
  }
}
