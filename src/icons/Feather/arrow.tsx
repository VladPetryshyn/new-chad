import { FC } from "react";
import { IconI } from "./types";

export const ArrowLeft: FC<IconI> = ({ width, height, size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? width}
      height={size ?? height}
      viewBox="0 0 60 60"
      fill="none"
    >
      <path
        d="M47.5 30H12.5"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30 47.5L12.5 30L30 12.5"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
