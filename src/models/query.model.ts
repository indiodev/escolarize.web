export interface MetaQuery {
  page?: number;
  per_page?: number;
  search?: string;
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
