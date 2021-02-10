import React, { ReactElement } from 'react';
import styled from 'styled-components';

import theme from '../../../constants/theme';
import Skeleton from '../Skeleton';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 450px;
  padding: 24px;

  border: 1px solid ${theme.color.grey100};
  border-radius: ${theme.roundMedium};

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    width: 100%;
  }
`;

const ProductCardSkeleton = (): ReactElement => (
  <Wrapper>
    <Skeleton width={120} height={16} marginBottom={16} />
    <Skeleton width={320} height={24} marginBottom={16} />
    <Skeleton width={100} height={32} marginBottom={16} />
    <Skeleton width={80} height={24} marginBottom={60} />
    <Skeleton width={120} height={16} marginBottom={12} />
    <Skeleton width={160} height={16} marginBottom={16} />
    <Skeleton height={40} width="100%" />
  </Wrapper>
);

export default ProductCardSkeleton;
