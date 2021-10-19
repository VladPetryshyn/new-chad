import { Theme } from "@utils/constants";
import { AppDispatch, RootState } from "../rootReducer";

export const setThemesAC = (payload: Theme[]): setThemes => ({
  type: "themes/SET_THEMES",
  payload,
});

export const addThemeAC = (payload: Theme): addTheme => ({
  type: "themes/ADD_THEME",
  payload,
});

export const deleteThemeAC =
  (id: string) => (dispatch: AppDispatch, getStore: () => RootState) => {
    const { themes } = getStore();
  };

export interface setThemes {
  type: "themes/SET_THEMES";
  payload: Theme[];
}

export interface addTheme {
  type: "themes/ADD_THEME";
  payload: Theme;
}

export type ThemesActions = setThemes | addTheme;
