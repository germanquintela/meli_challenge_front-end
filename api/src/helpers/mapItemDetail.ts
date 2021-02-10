import { ItemDescriptionResponseType, ItemsResponseType, ItemsResultsType } from '../types';
import mapItem from './mapItem';

const mapItemDetail = (data: ItemsResponseType & ItemDescriptionResponseType): ItemsResultsType => {
  const item = mapItem(data);

  return {
    ...item,
    sold_quantity: data.sold_quantity,
    available_quantity: data.available_quantity,
    description: data.plain_text,
    categories: data.categories,
  };
};

export default mapItemDetail;
