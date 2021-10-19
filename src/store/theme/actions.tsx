import { Theme } from "@utils/constants";

export const setThemeAC = (payload: Theme): setTheme => ({
  type: "theme/SET_THEME",
  payload,
});

export interface setTheme {
  type: "theme/SET_THEME";
  payload: Theme;
}

export type ThemeActions = setTheme;
