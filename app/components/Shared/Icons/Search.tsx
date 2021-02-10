import React, { ReactElement } from 'react';

import theme from '../../../constants/theme';

const Search = ({
  color = theme.color.black,
}: {
  color?: string;
}): ReactElement => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.625 3.625C6.31129 3.625 3.625 6.31129 3.625 9.625C3.625 12.9387 6.31129 15.625 9.625 15.625C12.9387 15.625 15.625 12.9387 15.625 9.625C15.625 6.31129 12.9387 3.625 9.625 3.625ZM1.625 9.625C1.625 5.20672 5.20672 1.625 9.625 1.625C14.0433 1.625 17.625 5.20672 17.625 9.625C17.625 14.0433 14.0433 17.625 9.625 17.625C5.20672 17.625 1.625 14.0433 1.625 9.625Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.8617 13.8616C14.2523 13.4711 14.8854 13.4711 15.276 13.8616L19.0822 17.6679C19.4727 18.0584 19.4727 18.6916 19.0822 19.0821C18.6917 19.4726 18.0585 19.4726 17.668 19.0821L13.8617 15.2759C13.4712 14.8853 13.4712 14.2522 13.8617 13.8616Z"
      fill={color}
    />
  </svg>
);

export default Search;
