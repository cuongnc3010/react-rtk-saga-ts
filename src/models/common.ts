export interface PaginationParams {
  _page: number;
  _litmit: number;
  _total: number;
}
export interface ListRespone<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListParams {
  _page: number;
  _limit: number;
  _sort: string;
  _order: 'desc' | 'asc';

  [key: string]: any;
}
