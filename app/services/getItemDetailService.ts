import axios from 'axios';
import { ItemDetailResultsType } from '../types';

export const getItemDetailService = async ({
  productId,
}: {productId: string}): Promise<ItemDetailResultsType | void> => {
  try {
    const item = await axios.get<ItemDetailResultsType>(
      `${process.env.API_URL}/items/${productId}`,
    );
    const response = item.data;

    return response;
  } catch (error) {
    throw error.response.data;
  }
};
