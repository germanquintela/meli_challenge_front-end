import axios from 'axios';

import getCategories from '../helpers/getCategories';
import mapItems from '../helpers/mapItems';
import { SearchResultType } from '../types';

const getItemsService = async (searchQuery: string, limit = 4): Promise<SearchResultType | void> => {
  try {
    const response = await axios.get(`${process.env.API_URL}/sites/MLA/search?q=${searchQuery}&limit=${limit}`);
    const items = mapItems(response.data.results);
    const categories = getCategories(response.data.filters);

    const data = {
      items,
      categories,
    };

    return data;
  } catch (error) {
    throw error;
  }
};
export default getItemsService;
