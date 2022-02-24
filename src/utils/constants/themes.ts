import { DefaultTheme } from "styled-components";

export const initialThemes: Theme[] = [
	{
		id: "73874cca-d53c-4513-a983-a686b036a130",
		name: "something",
		colors: { bg: "#000000", fg: "#ffffff", primary: "#700B97" },
	},
];

export interface Theme {
  name: string;
  colors: DefaultTheme;
  id: string;
}

export type DefaultThemeKeys = keyof DefaultTheme;

export const randomThemeNames = [
	"bubble",
	"poodle",
	"spoon",
	"colorful sprout",
];
