export type ItemsResultsType = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: 'new' | 'used';
  free_shipping: boolean;
  sold_quantity?: number;
  available_quantity?: number;
  description?: string;
  categories?: string[];
};

export type ItemsResponseType = {
  id: string;
  title: string;
  currency_id: string;
  price: number;
  thumbnail: string;
  condition: 'new' | 'used';
  shipping: {
    free_shipping: boolean;
  };
  sold_quantity: number;
  available_quantity: number;
  categories?: string[];
};

export type ItemDescriptionResponseType = {
  text: string;
  plain_text: string;
  last_updated: string;
  date_created: string;
  snapshot: {
    url: string;
    width: number;
    height: number;
    status: string;
  };
};

export type FiltersValue = {
  id: string;
  name: string;
  path_from_root: FilterPath[];
};

export type FilterPath = {
  id: string;
  name: string;
};

export type Filters = {
  id: string;
  name: string;
  type: string;
  values: FiltersValue[];
};

export type SearchResponseType = {
  query: string;
  paging: {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
  };
  results: ItemsResponseType[];
  filters: Filters[];
};

export type SearchResultType = {
  items: ItemsResultsType[] | [];
  categories: string[];
};

export type Author = {
  name: string;
  lastname: string;
};
