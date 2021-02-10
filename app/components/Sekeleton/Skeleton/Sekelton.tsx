import React, { ReactElement } from 'react';
import styled from 'styled-components';
import SkeletonLib, { SkeletonTheme } from 'react-loading-skeleton';
import theme from '../../../constants/theme';

const SkeletonWrapper = styled.div<{marginBottom?: number; marginTop?: number; width: number | string; height: number | string}>`
  width: ${({ width }): number | string => width};
  height: ${({ height }): number | string => height};
  margin-bottom: ${({ marginBottom }): number => marginBottom || 0}px;
  margin-top: ${({ marginTop }): number => marginTop || 0}px;

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    max-width: 100%;
    width: 100%;

    span {
      max-width: 100%;
      width: 100%;
    }
  }
`;

type SkeletonType = {
  marginBottom?: number;
  marginTop?: number;
  width: number | string;
  height: number | string;
  dark?: boolean
}

const Sekelton = ({
  marginBottom, marginTop, width, height, dark = false,
}: SkeletonType): ReactElement => (
  <SkeletonTheme color={dark ? '#e9e9e9' : '#eee'} highlightColor={dark ? '#e0e0e0' : '#eee'}>
    <SkeletonWrapper
      marginBottom={marginBottom}
      marginTop={marginTop}
      width={width}
      height={height}
    >
      <SkeletonLib width={width} height={height} />
    </SkeletonWrapper>
  </SkeletonTheme>
);

export default Sekelton;
