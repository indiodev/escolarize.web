export interface MetaQuery<S = string> {
	page?: number;
	per_page?: number;
	search?: S;   // Campo de busca genérico
}

export type MetaResponse<T> = {
	data: T;
	meta: MetaData;
};

export interface MetaData {
	total: number;
	perPage: number;
	currentPage: number;
	firstPage: number;
	lastPage: number;
	firstPageUrl: string;
	lastPageUrl: string;
	nextPageUrl: string | null;
	previousPageUrl: string | null;
}
