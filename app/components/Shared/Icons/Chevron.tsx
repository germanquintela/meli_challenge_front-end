import React, { ReactElement } from 'react';
import theme from '../../../constants/theme';

const ChevronLeft = ({
  color = theme.color.black,
  medium,
}: {
  color?: string;
  medium?: boolean;
}): ReactElement => {
  if (medium) {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.93934 19.0607C7.35355 18.4749 7.35355 17.5251 7.93934 16.9393L12.8787 12L7.93934 7.06066C7.35355 6.47487 7.35355 5.52513 7.93934 4.93934C8.52513 4.35355 9.47487 4.35355 10.0607 4.93934L16.0607 10.9393C16.6464 11.5251 16.6464 12.4749 16.0607 13.0607L10.0607 19.0607C9.47487 19.6464 8.52513 19.6464 7.93934 19.0607Z"
          fill={color}
        />
      </svg>
    );
  }

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929L8.58579 8L5.29289 4.70711C4.90237 4.31658 4.90237 3.68342 5.29289 3.29289C5.68342 2.90237 6.31658 2.90237 6.70711 3.29289L10.7071 7.29289C11.0976 7.68342 11.0976 8.31658 10.7071 8.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronLeft;
