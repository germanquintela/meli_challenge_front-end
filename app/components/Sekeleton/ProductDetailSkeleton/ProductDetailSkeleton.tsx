import React, { ReactElement } from 'react';

import styled from 'styled-components';

import theme from '../../../constants/theme';
import ProductCardSkeleton from '../ProductCardSkeleton';
import Skeleton from '../Skeleton';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 40px;
  margin-top: 24px;

  background-color: ${theme.color.white};
  border-radius: ${theme.roundSmall};

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    padding: 16px;
  }
`;

const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  width: 550px;
  height: 550px;

  margin-right: 40px;

  img {
    width: 100%;
    height: 100%;

    object-fit: contain;
    border-radius: ${theme.roundMedium};
  }

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    width: 100%;
    height: calc(100vw - 64px);
    overflow: hidden;

    margin-bottom: 24px;
    
    border-radius: 4px;
  }
`;

const ProductBody = styled.div`
  width: 100%;

  margin-top: 32px;
  padding-top: 32px;

  border-top: 1px solid ${theme.color.grey100};

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    border-top: 0;
    padding-top: 0;
  }
`;

const ProductDescription = styled.div`
  width: 100%;

  max-width: 600px;

  p {
    color: ${theme.color.grey500};
  }
`;

const ProductDetailSkeleton = (): ReactElement => (
  <Wrapper>
    <ProductHeader>
      <ImageWrapper>
        <Skeleton width={550} height={550} />
      </ImageWrapper>
      <ProductCardSkeleton />
    </ProductHeader>
    <ProductBody>
      <ProductDescription>
        <Skeleton width={220} height={27} marginBottom={16} />
        <Skeleton width={520} height={16} marginBottom={8} />
        <Skeleton width={540} height={16} marginBottom={8} />
        <Skeleton width={440} height={16} marginBottom={8} />
      </ProductDescription>
    </ProductBody>
  </Wrapper>
);

export default ProductDetailSkeleton;
