import React, { ReactElement } from 'react';
import styled from 'styled-components';
import theme from '../../../constants/theme';
import { Body3 } from '../Typo/Body';

const Wrapper = styled.div<{color: string}>`
  position: relative;

  width: fit-content;
  height: 24px;
  padding: 0 10px;
  
  border-radius: ${theme.roundSmall};
`;

const Text = styled(Body3)<{color: string}>`
  color: ${({ color }): string => color};

  z-index: 9;
`;

const Background = styled.div<{color: string}>`
  position: absolute;

  top: 0;
  left: 0;

  width: auto;

  width: 100%;
  height: 100%;

  background-color: ${({ color }): string => color};
  border-radius: ${theme.roundSmall};
  opacity: 0.05;
`;

const Badge = ({ color, text }: {color: string; text: string}): ReactElement => (
  <Wrapper color={color}>
    <Text bold color={color}>{text}</Text>
    <Background color={color} />
  </Wrapper>
);

export default Badge;
