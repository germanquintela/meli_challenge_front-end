import React, { ReactElement } from 'react';

import styled from 'styled-components';
import { Body1 } from '../../Shared/Typo/Body';
import ProductCard from '../ProductCard/ProductCard';
import { Title2 } from '../../Shared/Typo/Titles';
import theme from '../../../constants/theme';

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
  height: auto;
  max-width: 80vw;

  margin-right: 40px;

  img {
    width: 100%;
    height: 100%;

    object-fit: contain;
    border-radius: ${theme.roundMedium};
  }

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    margin-bottom: 32px;
    margin-right: unset;
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

type ProductDetailType = {
  picture: string;
  description: string;
  price: number;
  title: string;
  soldQuantity: number;
  condition: string;
  freeShipping: boolean;
  avaliableQuantity: number;
}
const ProductDetail = ({
  picture, description, price, title, soldQuantity, condition, freeShipping, avaliableQuantity,
}: ProductDetailType): ReactElement => (
  <Wrapper>
    <ProductHeader>
      <ImageWrapper>
        <img
          src={picture}
          alt={title}
        />
      </ImageWrapper>
      <ProductCard
        title={title}
        price={price}
        condition={condition}
        soldQuantity={soldQuantity}
        freeShipping={freeShipping}
        avaliableQuantity={avaliableQuantity}
      />
    </ProductHeader>
    <ProductBody>
      <ProductDescription>
        <Title2>Description</Title2>
        <Body1>
          {description}
        </Body1>
      </ProductDescription>
    </ProductBody>
  </Wrapper>
);

export default ProductDetail;
