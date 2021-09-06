import { FC } from "react";
import { IconI } from "./types";

export const Gallery: FC<IconI> = ({ width, height, size, color }) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M41.1667 6.5H10.8333C8.4401 6.5 6.5 8.4401 6.5 10.8333V41.1667C6.5 43.5599 8.4401 45.5 10.8333 45.5H41.1667C43.5599 45.5 45.5 43.5599 45.5 41.1667V10.8333C45.5 8.4401 43.5599 6.5 41.1667 6.5Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.4166 21.6666C20.2116 21.6666 21.6666 20.2116 21.6666 18.4166C21.6666 16.6217 20.2116 15.1666 18.4166 15.1666C16.6217 15.1666 15.1666 16.6217 15.1666 18.4166C15.1666 20.2116 16.6217 21.6666 18.4166 21.6666Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M45.5 32.5L34.6667 21.6666L10.8334 45.5"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
