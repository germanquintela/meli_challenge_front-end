import React, { ReactElement } from 'react';
import styled from 'styled-components';
import theme from '../../../../../constants/theme';

const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 1200px;

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    padding: 0 16px;
  }
`;

const Index = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}): ReactElement => (
  <ContainerWrapper>
    {children}
  </ContainerWrapper>

);

export default Index;
