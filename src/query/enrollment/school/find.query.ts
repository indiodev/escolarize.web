import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { School } from "@/models/enrollment.model";
import { Service } from "@/services";

async function fetcher(slug: string): Promise<School> {
  return await Service.enrollment.findSchoolBySlug(slug);
}

export function useEnrollmentFindQuery(
  slug: string
): UseQueryResult<School, Error | AxiosError> {
  return useQuery({
    queryKey: ["ENROLMENT-SCHOOL-FIND-BY-SLUG", slug],
    queryFn: () => fetcher(slug),
  });
}
