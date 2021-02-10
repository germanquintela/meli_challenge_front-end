import styled from 'styled-components';
import theme from '../../../constants/theme';

const Body1 = styled.p<{ bold?: boolean }>`
  font-size: ${theme.fontSize.body1};
  font-weight: ${({ bold }): string => (bold ? `${theme.fontWeight.bold}` : `${theme.fontWeight.regular}`)};
  line-height: 28px;
  color: ${theme.color.grey900};

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    font-size: ${theme.fontSizeMobile.body1};
  }
`;

const Body2 = styled.p<{ bold?: boolean }>`
  font-size: ${theme.fontSize.body2};
  font-weight: ${({ bold }): string => (bold ? `${theme.fontWeight.bold}` : `${theme.fontWeight.regular}`)};
  line-height: 24px;
  color: ${theme.color.grey900};

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    font-size: ${theme.fontSizeMobile.body2};
  }
`;

const Body3 = styled.p<{ bold?: boolean }>`
  font-size: ${theme.fontSize.body3};
  font-weight: ${({ bold }): string => (bold ? `${theme.fontWeight.bold}` : `${theme.fontWeight.regular}`)};
  line-height: 24px;
  color: ${theme.color.grey900};

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    font-size: ${theme.fontSizeMobile.body2};
  }
`;

export { Body1, Body2, Body3 };
