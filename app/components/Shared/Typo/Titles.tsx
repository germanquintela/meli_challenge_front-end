import styled from 'styled-components';
import theme from '../../../constants/theme';

const Title1 = styled.h1<{ bold?: boolean }>`
  font-size: ${theme.fontSize.title1};
  font-weight: ${({ bold }): string => (bold ? `${theme.fontWeight.bold}` : `${theme.fontWeight.regular}`)};
  color: ${theme.color.grey900};

  margin-bottom: 16px;
  margin-top: 0;

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    font-size: ${theme.fontSizeMobile.title1};
  }
`;

const Title2 = styled.h2<{ bold?: boolean }>`
  font-size: ${theme.fontSize.title2};
  font-weight: ${({ bold }): string => (bold ? `${theme.fontWeight.bold}` : `${theme.fontWeight.regular}`)};
  color: ${theme.color.grey900};

  margin-bottom: 16px;

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    font-size: ${theme.fontSizeMobile.title2};
  }
`;

const Title3 = styled.h3`
  font-size: ${theme.fontSize.title3};
  font-weight: ${theme.fontWeight.bold};
  letter-spacing: -0.7px;
  color: ${theme.color.grey900};

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    font-size: ${theme.fontSizeMobile.title3};
  }
`;

export { Title1, Title2, Title3 };
