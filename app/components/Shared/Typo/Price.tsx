import styled from 'styled-components';
import theme from '../../../constants/theme';

const PriceSmall = styled.p<{ bold?: boolean }>`
  font-size: ${theme.fontSize.title2};
  font-weight: ${({ bold }): string => (bold ? `${theme.fontWeight.bold}` : `${theme.fontWeight.regular}`)};
  color: ${theme.color.grey900};

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    font-size: ${theme.fontSizeMobile.title2};
    line-height: 40px;
  }
`;

const PriceBig = styled.p<{ bold?: boolean }>`
  font-size: ${theme.fontSize.title1};
  font-weight: ${({ bold }): string => (bold ? `${theme.fontWeight.bold}` : `${theme.fontWeight.regular}`)};
  color: ${theme.color.grey900};

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    font-size: ${theme.fontSizeMobile.title2};
    line-height: 40px;
  }
`;

export { PriceSmall, PriceBig };
