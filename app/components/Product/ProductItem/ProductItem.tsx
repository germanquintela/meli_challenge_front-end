import React, { ReactElement } from 'react';

import styled from 'styled-components';
import Link from 'next/link';
import { Body2 } from '../../Shared/Typo/Body';
import Price from '../../Shared/Price';
import { Title2 } from '../../Shared/Typo/Titles';
import theme from '../../../constants/theme';
import Badge from '../../Shared/Badge';
import transformCondition from '../../../utils/transformCondition';

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

const ProductTitle = styled(Title2)`
  margin-bottom: 12px;
`;

const Condition = styled(Body2)`
  margin-bottom: 4px;

  color: ${theme.color.grey500};
`;

const PriceWrapper = styled.div`
  margin-bottom: 24px;
`;

type ProductItemType = {
  id: string;
  title: string;
  price: number;
  condition: string;
  picture: string;
  freeShipping: boolean;
}
const ProductItem = ({
  id, title, price, condition, picture, freeShipping,
}: ProductItemType): ReactElement => (
  <Wrapper>
    <Link href={{ pathname: `/${id}`, query: { producto: title } }}>
      <a>
        <ImageWrapper>
          <img
            src={picture}
            alt={title}
          />
        </ImageWrapper>
      </a>
    </Link>
    <DataWrapper>
      <Condition>{transformCondition(condition)}</Condition>
      <Link href={{ pathname: `/${id}`, query: { producto: title } }}>
        <a>
          <ProductTitle>
            {title}
          </ProductTitle>
        </a>
      </Link>
      <PriceWrapper>
        <Price size="small" price={price} />
      </PriceWrapper>
      {freeShipping && <Badge color={theme.color.green} text="Llega gratis" />}
    </DataWrapper>
  </Wrapper>
);

export default ProductItem;
