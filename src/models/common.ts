export interface PaginationParams {
  _page: number;
  _litmit: number;
  _total: number;
}
export interface ListRespone<T> {
  data: T[];
  pagination: PaginationParams;
}
