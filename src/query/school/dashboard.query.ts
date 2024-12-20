import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { QUERY_MAPPING } from "@/lib/constant";
import { MetaQuery } from "@/models/query.model";
import { SchoolDashboardMetric } from "@/models/school.model";
import { Service } from "@/services";

async function fetcher(query: MetaQuery): Promise<SchoolDashboardMetric> {
  return await Service.school.dashboard(query);
}

export function useSchoolDashboardQuery(
  query: MetaQuery
): UseQueryResult<SchoolDashboardMetric, Error | AxiosError> {
  return useQuery({
    queryKey: [QUERY_MAPPING.SCHOOL_DASHBOARD, query],
    queryFn: () => fetcher(query),
  });
}
