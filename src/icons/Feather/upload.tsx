import { FC } from "react";
import { IconI } from "./types";

export const Upload: FC<IconI> = ({ width, height, size, color }) => {
  return (
    <svg
      width={size ?? width}
      height={size ?? height}
      viewBox="0 0 53 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46.375 32.5V41.1667C46.375 42.3159 45.9097 43.4181 45.0814 44.2308C44.2531 45.0435 43.1297 45.5 41.9583 45.5H11.0417C9.87029 45.5 8.7469 45.0435 7.91861 44.2308C7.09033 43.4181 6.625 42.3159 6.625 41.1667V32.5"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M37.5417 17.3333L26.5 6.5L15.4584 17.3333"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.5 6.5V32.5"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
