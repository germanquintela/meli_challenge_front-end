import React, { ReactElement } from 'react';
import styled from 'styled-components';
import theme from '../../../constants/theme';
import { Body2 } from '../Typo/Body';

const Wrapper = styled.div`
  display: flex;

  margin-top: 16px;

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    flex-direction: column;
  }
`;

const Title = styled(Body2)`
  &:after {
    content: ': ';
    margin-right: 4px;
  }

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    width: 100%;
  }
`;

const CategoriesList = styled.ul`
  display: flex;

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    flex-wrap: wrap;
  }
`;

const CategoriesItem = styled.li`
  display: flex;
  align-items: center;

  list-style-type: none;

  &:after {
    content: '-';
    margin: 0 4px;
  }

  &:last-child {
    &:after {
      content: '';
    }
  }
`;

type BeadCrumbType = {
  title: string;
  categories: string[];
};

const BreadCrumb = ({ title, categories }: BeadCrumbType): ReactElement => (
  <Wrapper>
    <Title bold>{title}</Title>
    <CategoriesList>
      {categories.map((category, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <CategoriesItem key={index}>
          <Body2>{`${category}`}</Body2>
        </CategoriesItem>
      ))}
    </CategoriesList>
  </Wrapper>
);

export default BreadCrumb;
