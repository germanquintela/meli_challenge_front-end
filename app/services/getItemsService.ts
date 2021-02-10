import axios from 'axios';
import { SearchResultType } from '../types';

export const getItemsService = async ({
  query,
  limit,
}: {query: string, limit: number}): Promise<SearchResultType | void> => {
  try {
    const items = await axios.get<SearchResultType>(
      `${process.env.API_URL}/items?${query && `q=${query}&`}limit=${limit}`,
    );
    const response = items.data;

    return response;
  } catch (error) {
    throw error.response.data;
  }
};
