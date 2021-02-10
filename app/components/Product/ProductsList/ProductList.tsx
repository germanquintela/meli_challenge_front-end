import React, { ReactElement } from 'react';

import styled from 'styled-components';
import ProductItem from '../ProductItem';
import theme from '../../../constants/theme';
import { Body1, Body3 } from '../../Shared/Typo/Body';
import EmptySearchIcon from '../../Shared/Icons/EmptySearch';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 16px;
  margin-top: 24px;

  background-color: ${theme.color.white};
  border-radius: ${theme.roundSmall};
`;

const EmptySearch = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: flex;
  align-items: center;

  width: 100%;
  padding: 32px;
  margin-top: 24px;

  background-color: ${theme.color.white};
  border-radius: ${theme.roundSmall};

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    flex-direction: column;
  }
`;

const EmptySearchData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;

  ul {
    list-style-type: none;
    margin-top: 16px;
  }

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    margin-top: 24px;
    margin-left: 0;
    
    p { 
    text-align: center;
  }
  }
`;

type ItemType = {
  id: string;
  free_shipping: boolean;
  picture: string;
  title: string;
  condition: string;
  price: {
    amount: number;
    currency: string;
    decimals: number;
  }
}

const ProductList = ({ items }: {items: ItemType[]}): ReactElement => {
  if (items.length > 0) {
    return (
      <Wrapper>
        {items.map((item) => (
          <ProductItem
            id={item.id}
            title={item.title}
            picture={item.picture}
            price={item.price.amount}
            condition={item.condition}
            freeShipping={item.free_shipping}
          />
        ))}
      </Wrapper>
    );
  }

  return (
    <EmptySearch>
      <EmptySearchIcon />
      <EmptySearchData>

        <Body1 bold>No hay publicaciones que coincidan con tu búsqueda.</Body1>
        <ul>
          <li>
            <Body3>Revisá la ortografía de la palabra.</Body3>
          </li>
          <li>
            <Body3>Utilizá palabras más genéricas o menos palabras.</Body3>
          </li>
        </ul>
      </EmptySearchData>
    </EmptySearch>
  );
};

export default ProductList;
