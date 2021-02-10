import React, { ReactElement } from 'react';

import Link from 'next/link';
import styled from 'styled-components';
import Container from '../Layout/Container/index/index';
import SearchInput from '../../SearchInput';
import theme from '../../../constants/theme';
import Button from '../Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 72px;

  background-color: ${theme.color.yellow};

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    padding: 16px 0;
    height: auto;
  }
`;

const Logo = styled.img`
  height: 34px;

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    height: 24px;
    margin-bottom: 8px;
  }
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;

  & *:last-child {
    justify-self: end;
  }

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    grid-template-columns: 1fr;

    & a:last-child {
      display: none;
    }
  }
`;

const NavBar = (): ReactElement => (
  <Wrapper>
    <Container>
      <InnerWrapper>
        <Link href="/" passHref>
          <a>
            <Logo src="./Logo/logo.png" alt="Mercado Libre logo" />
          </a>
        </Link>
        <SearchInput />
        <Button type="secondary" href="https://www.mercadolibre.com.ar/credits/consumer/enrollment/#DEAL_ID=&S=MP&V=1&T=BME&L=mkt_MercadoCreditos">Cuotas sin tarjeta</Button>
      </InnerWrapper>
    </Container>
  </Wrapper>
);

export default NavBar;
