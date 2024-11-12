export interface MetaQuery {
	page?: number;
	per_page?: number;
	search?: string;
}

export type MetaResponse<T> = {
	data: T;
	meta: {
		total: number;
		perPage: number;
		currentPage: number;
		lastPage: number;
		firstPage: number;
		firstPageUrl: string;
		lastPageUrl: string;
		nextPageUrl: string | null;
		previousPageUrl: string | null;
	};
};
