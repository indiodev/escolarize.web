import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { Payment } from '@/models/payment.model';
import { Service } from '@/services';
import { MetaQuery, MetaResponse } from '@/models/query.model';

async function fetcher(
	query: MetaQuery,
): Promise<MetaResponse<Partial<Payment[]>>> {
	return await Service.administrator.paymentsPaginate(query);
}

export function useAdminListPaymentsQuery(
	query: MetaQuery,
): UseQueryResult<MetaResponse<Payment[]>, Error | AxiosError> {
	return useQuery({
		queryKey: ['ADMIN-LIST-PAYMENTS', query],
		queryFn: () => fetcher(query),
	});
}
