import { DefaultTheme } from "styled-components";

export const initialThemes: Theme[] = [
	{
		id: "73874cca-d53c-4513-a983-a686b036a130",
		colors: { bg: "#ffffff", fg: "#000000", primary: "#99d98c" },
	},
];

export interface Theme {
  colors: DefaultTheme;
  id: string;
}

export type DefaultThemeKeys = keyof DefaultTheme;
