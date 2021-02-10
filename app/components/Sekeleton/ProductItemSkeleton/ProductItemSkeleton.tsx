import React, { ReactElement } from 'react';

import styled from 'styled-components';
import theme from '../../../constants/theme';
import Skeleton from '../Skeleton';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  padding-bottom: 16px;
  margin-bottom: 16px;

  border-bottom: 1px solid ${theme.color.grey100};

  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: 0;
  }

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    flex-direction: column;
    align-items: flex-start;

    padding: 16px 16px 32px;

    &:last-child {
      padding-bottom: 16px;
    }

    span {
      max-width: 250px;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 160px;
  height: 160px;

  margin-right: 40px;

  img {
    width: 100%;
    height: 100%;

  object-fit: contain;
    border-radius: ${theme.roundSmall};
  }

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    margin-right: 0;

    margin-bottom: 24px;
  }
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductItemSkeleton = (): ReactElement => (
  <Wrapper>
    <ImageWrapper>
      <Skeleton width={160} height={160} />
    </ImageWrapper>
    <DataWrapper>
      <Skeleton width={40} height={18} marginBottom={8} />
      <Skeleton width={320} height={32} marginBottom={10} />
      <Skeleton width={110} height={28} marginBottom={18} />
      <Skeleton width={80} height={24} marginBottom={8} />
    </DataWrapper>
  </Wrapper>
);

export default ProductItemSkeleton;
