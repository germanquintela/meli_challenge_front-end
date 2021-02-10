import React, { ReactElement } from 'react';

import styled from 'styled-components';
import { Body2, Body3 } from '../Typo/Body';
import theme from '../../../constants/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 32px;
  padding: 32px;

  background-color: ${theme.color.grey100};
`;

const Author = styled(Body3)`
  a {
    text-decoration: underline;
    text-decoration-color: ${theme.color.yellow};
    color: ${theme.color.grey500};
  }
`;
const Footer = (): ReactElement => (
  <Wrapper>
    <Body2>Crafted with love 🖤</Body2>
    <Author>
      By
      {' '}
      <a
        href="https://www.linkedin.com/in/germanquintela"
        rel="noreferrer"
        target="_blank"
      >
        German Quintela
      </a>
    </Author>
  </Wrapper>
);

export default Footer;
