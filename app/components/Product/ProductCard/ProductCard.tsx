import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Body1, Body2 } from '../../Shared/Typo/Body';
import { Title2, Title3 } from '../../Shared/Typo/Titles';

import Button from '../../Shared/Button';
import Price from '../../Shared/Price';
import theme from '../../../constants/theme';
import transformCondition from '../../../utils/transformCondition';
import Badge from '../../Shared/Badge';

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

const ConditionWrapper = styled.div`
  display: flex;

  margin-bottom: 16px;
`;

const Condition = styled(Body2)`
  color: ${theme.color.grey500};
`;

const SellAmount = styled(Body2)`
  position: relative;
  color: ${theme.color.grey500};

  padding-left: 8px;
  margin-left: 8px;

  &::before {
    content: '';
    position: absolute;

    top: 4px;
    left: 0;
    height: 18px;
    width: 1px;

    background-color: ${theme.color.grey400};
  }
`;

const ProductTitle = styled(Title2)`
  margin-bottom: 16px;

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    margin-bottom: 8px;
  }
`;

const StockWrapper = styled.div`
  margin: 60px 0 16px;
`;

const AmmountWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-top: 8px;

  p:first-child::after {
    content: ' ';
    padding-right: 4px;
  }
`;

const PriceWrapper = styled.div`
  margin-bottom: 16px;
`;

type ProductCardType = {
  title: string;
  price: number;
  condition:string;
  soldQuantity:number;
  freeShipping: boolean;
  avaliableQuantity: number
}

const ProductCard = ({
  title, price, condition, soldQuantity, freeShipping, avaliableQuantity,
}: ProductCardType): ReactElement => (
  <Wrapper>
    <ConditionWrapper>
      <Condition>{transformCondition(condition)}</Condition>
      <SellAmount>{`${soldQuantity} vendidos`}</SellAmount>
    </ConditionWrapper>
    <ProductTitle bold>
      {title}
    </ProductTitle>
    <PriceWrapper>
      <Price size="big" price={price} />
    </PriceWrapper>
    {freeShipping && <Badge color={theme.color.green} text="Llega gratis" />}
    <StockWrapper>
      <Title3>Stock disponible</Title3>
      <AmmountWrapper>
        <Body1 bold>Cantidad:</Body1>
        <Body1>{`${avaliableQuantity} unidades`}</Body1>
      </AmmountWrapper>
    </StockWrapper>
    <Button type="primary" full href="https://www.mercadolibre.com.ar/">
      Comprar
    </Button>
  </Wrapper>
);

export default ProductCard;
