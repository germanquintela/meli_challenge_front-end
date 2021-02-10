import React, { ReactElement } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { AppProps } from 'next/app';
import { normalize } from 'polished';
import Head from 'next/head';
import Footer from '../components/Shared/Footer/Footer';
import NavBar from '../components/Shared/NavBar';
import { SearchProvider } from '../contexts/search';
import theme from '../constants/theme';

const GlobalStyles = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Lato';
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
  }

  ${normalize()}
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-height: 100vh;

  background-color: ${theme.color.background};
`;

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>Mercado Libre Argentina</title>
      </Head>
      <AppWrapper>
        <GlobalStyles />
        <SearchProvider>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </SearchProvider>
      </AppWrapper>
    </>
  );
}

export default App;
