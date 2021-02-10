import { Filters } from '../types';

const getCategories = (filters: Filters[]): string[] => {
  const categories = filters.find((element) => element.id === 'category');
  const categoriesArray = categories?.values[0]?.path_from_root?.map((category) => category.name) || [];

  return categoriesArray;
};

export default getCategories;
