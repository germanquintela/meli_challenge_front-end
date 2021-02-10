import React, { ReactElement } from 'react';
import { PriceBig, PriceSmall } from '../Typo/Price';

import FormatNumber from '../../../utils/FormatNumber';

const Price = ({
  price,
  size,
}: {
  price: number;
  size: 'small' | 'big';
}): ReactElement => {
  if (size === 'small') {
    return <PriceSmall bold>{`$ ${FormatNumber(price)}`}</PriceSmall>;
  }

  return <PriceBig>{`$ ${FormatNumber(price)}`}</PriceBig>;
};

export default Price;
