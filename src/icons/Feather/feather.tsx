import { FC } from "react";
import { IconI } from "./types";

export const Feather: FC<IconI> = ({ width, height, size, color }) => {
  return (
    <svg
      width={size ?? width}
      height={size ?? height}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.6966 27.0301C47.1829 24.5438 48.5796 21.1718 48.5796 17.6557C48.5796 14.1396 47.1829 10.7675 44.6966 8.28131C42.2104 5.79507 38.8383 4.39832 35.3222 4.39832C31.8062 4.39832 28.4341 5.79507 25.9479 8.28131L11.0416 23.1876V41.9584H29.8125L44.6966 27.0301Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35.3333 17.6666L4.41663 48.5833"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M38.6458 33.125H19.875"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
