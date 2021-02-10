import { ItemsResponseType, ItemsResultsType } from '../types';

const mapItem = (item: ItemsResponseType): ItemsResultsType => ({
  id: item.id,
  title: item.title,
  price: {
    currency: item.currency_id,
    amount: item.price,
    decimals: Math.floor((item.price * 100) % 100),
  },
  picture: item.thumbnail,
  condition: item.condition,
  free_shipping: item.shipping.free_shipping,
});

export default mapItem;
