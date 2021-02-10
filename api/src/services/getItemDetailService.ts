import axios from 'axios';

import mapItemDetail from '../helpers/mapItemDetail';
import { ItemsResultsType } from '../types';

const getItemCategories = async (id: string): Promise<string[] | undefined> => {
  try {
    const responseCategories = await axios.get(`${process.env.API_URL}/categories/${id}`);
    const cateogries = responseCategories.data.path_from_root.map((category: { name: string; id: string }) => category.name) || [];

    return cateogries;
  } catch (error) {
    return [];
  }
};

const getItemDetailService = async (id: string): Promise<ItemsResultsType | void> => {
  try {
    const response = await Promise.all([axios.get(`${process.env.API_URL}/items/${id}`), axios.get(`${process.env.API_URL}/items/${id}/description`)]);
    const [itemResponse, descriptionResponse] = response;
    const categories = await getItemCategories(itemResponse.data.category_id);
    const data = {
      ...itemResponse.data,
      ...descriptionResponse.data,
      categories: categories,
    };

    return mapItemDetail(data);
  } catch (error) {
    throw error;
  }
};

export default getItemDetailService;
