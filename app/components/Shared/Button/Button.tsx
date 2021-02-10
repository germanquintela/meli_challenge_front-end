import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';

import Link from 'next/link';
import theme from '../../../constants/theme';

const baseButtonStyles = css<{ full: boolean; type: 'primary' | 'secondary' }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ full }): string => (full ? '100%' : 'auto')};
  cursor: pointer;
  border-radius: ${theme.roundSmall};

  ${({ type }): string => {
    switch (type) {
      case 'primary':
        return `
          padding: 12px 32px;

          font-weight: bold;

          color: white;
          background-color: ${theme.color.blue};
        `;
      default:
        return `
          padding: 4px;
          
          color: ${theme.color.grey900};
        `;
    }
  }}
`;

const Anchor = styled.a`
  ${baseButtonStyles};
`;

type ButtonType = {
  type: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  children: ReactElement | ReactElement[] | string;
  full?: boolean;
};

const Button = ({
  type,
  href,
  full = false,
  onClick,
  children,
}: ButtonType): ReactElement => {
  const a = (
    <Anchor href={href} type={type} full={full}>
      {children}
    </Anchor>
  );

  if (href) {
    const isExternal = href && href.startsWith('http');

    return isExternal ? a : <Link href={href}>{a}</Link>;
  }

  return (
    <Anchor type={type} onClick={onClick} full={full}>
      {children}
    </Anchor>
  );
};

export default Button;
