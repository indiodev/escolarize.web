import { API } from "@/lib/api";
import { School } from "@/models/enrollment.model";

export default class EnrollmentService {
  async findSchoolBySlug(slug: string): Promise<School> {
    const { data } = await API.get(`/enrollment/school/${slug}`);
    return data;
  }

  async create(payload: unknown): Promise<void> {
    const { data } = await API.post(`/enrollment/create`, payload);
    return data;
  }
}
