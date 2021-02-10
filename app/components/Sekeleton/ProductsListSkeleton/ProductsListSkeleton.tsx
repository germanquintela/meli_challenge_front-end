import React, { ReactElement } from 'react';

import styled from 'styled-components';
import theme from '../../../constants/theme';
import ProductItemSkeleton from '../ProductItemSkeleton';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 16px;
  margin-top: 24px;

  background-color: ${theme.color.white};
  border-radius: ${theme.roundSmall};
`;

const ProductsListSkeleton = ({ items }: {items: number}): ReactElement => (
  <Wrapper>
    {[...Array(items)].map(() => (
      <ProductItemSkeleton />
    ))}
  </Wrapper>
);

export default ProductsListSkeleton;
