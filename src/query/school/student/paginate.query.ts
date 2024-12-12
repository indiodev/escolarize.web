import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { QUERY_MAPPING } from "@/lib/constant";
import { MetaQuery, MetaResponse } from "@/models/query.model";
import { Responsible } from "@/models/responsible.model";
import { Student } from "@/models/student.model";
import { Service } from "@/services";

async function fetcher(query: MetaQuery): Promise<MetaResponse<Student[]>> {
  return await Service.school.studentPaginate(query);
}

export function useSchoolStudentPaginateQuery(
  query: MetaQuery
): UseQueryResult<MetaResponse<Responsible[]>, Error | AxiosError> {
  return useQuery({
    queryKey: [QUERY_MAPPING.SCHOOL_STUDENT_PAGINATE, query],
    queryFn: () => fetcher(query),
  });
}
