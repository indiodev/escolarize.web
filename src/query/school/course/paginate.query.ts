import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { QUERY_MAPPING } from "@/lib/constant";
import { MetaQuery, MetaResponse } from "@/models/query.model";
import { Course } from "@/models/course.model";
import { Service } from "@/services";

async function fetcher(query: MetaQuery): Promise<MetaResponse<Course[]>> {
  return await Service.school.coursePaginate(query);
}

export function useSchoolCoursePaginateQuery(
  query: MetaQuery
): UseQueryResult<MetaResponse<Course[]>, Error | AxiosError> {
  return useQuery({
    queryKey: [QUERY_MAPPING.SCHOOL_COURSE_PAGINATE, query],
    queryFn: () => fetcher(query),
  });
}
