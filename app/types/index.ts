/* eslint-disable camelcase */
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
  description?: string;
};

/* eslint-disable camelcase */
export type ItemDetailResultsType = {
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
  sold_quantity: number;
  available_quantity: number;
  description: string;
  categories: string[];
};

export type Author = {
  name: string;
  lastname: string;
};

export type SearchResultType = {
  items: ItemsResultsType[] | [];
  categories: string[];
  author: Author;
};
