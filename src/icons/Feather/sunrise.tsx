import { FC } from "react";
import { IconI } from "./types";

export const Sunrise: FC<IconI> = ({ width, height, size, color }) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 52 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0)">
      <path
        d="M36.8333 35C36.8333 32.1268 35.6919 29.3713 33.6603 27.3396C31.6286 25.308 28.8731 24.1666 26 24.1666C23.1268 24.1666 20.3713 25.308 18.3396 27.3396C16.308 29.3713 15.1666 32.1268 15.1666 35"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26 0.333374V15.5"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.14331 18.1433L12.22 21.22"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.16663 35H6.49996"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M45.5 35H49.8333"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M39.7802 21.22L42.8568 18.1433"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M49.8333 43.6666H2.16663"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.3334 9.00004L26 0.333374L34.6667 9.00004"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="52" height="53" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
