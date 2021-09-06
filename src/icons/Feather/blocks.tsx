import { FC } from "react";
import { IconI } from "./types";

export const Blocks: FC<IconI> = ({ width, height, size, color }) => {
  return (
    <svg
      width={size ?? width}
      height={size ?? height}
      viewBox="0 0 53 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.0833 6.5H6.625V21.6667H22.0833V6.5Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M46.375 6.5H30.9166V21.6667H46.375V6.5Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M46.375 30.3333H30.9166V45.4999H46.375V30.3333Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.0833 30.3333H6.625V45.4999H22.0833V30.3333Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
