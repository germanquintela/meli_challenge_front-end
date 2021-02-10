import { ItemsResponseType, ItemsResultsType } from '../types';
import mapItem from './mapItem';

const mapItems = (items: ItemsResponseType[]): ItemsResultsType[] => {
  const newData = items.map(mapItem);

  return newData;
};

export default mapItems;
