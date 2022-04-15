export type PostItem = {
  type: "PostItem";
  id: string;
  title: string;
  body: string;
};

export type PaginatedList<T> = {
  total: number;
  hasNextPage: boolean;
  results: T[];
};
