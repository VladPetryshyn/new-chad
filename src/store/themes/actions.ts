import { DefaultThemeKeys, Theme } from "@utils/constants/themes";
import { v4 as uuidv4 } from "uuid";
import { AppThunk, RootState } from "../rootReducer";
import { setThemeAC } from "../theme/actions";

export const setThemesAC = (payload: Theme[]): setThemes => ({
	type: "themes/SET_THEMES",
	payload,
});

export const addThemeAC =
  (name: string): AppThunk =>
  	(dispatch, getState) => {
  		const themes = [
  			...getState().themes,
  			{
  				name: name,
  				id: uuidv4(),
  				colors: { bg: "ffffff", fg: "ffffff", primary: "ffffff" },
  			},
  		];

  		localStorage.setItem("themes", JSON.stringify(themes));
  		dispatch(setThemesAC(themes));
  	};

export const deleteThemeAC =
  (themeId: string): AppThunk =>
  	(dispatch, getState: () => RootState) => {
  		const themes = getState().themes.filter(({ id }) => themeId !== id);

  		localStorage.setItem("themes", JSON.stringify(themes));
  		dispatch(setThemesAC(themes));
  	};

export const updateThemeAC =
  ({ themeId, colorName, colorValue }: updateThemePayload): AppThunk =>
  	(dispatch, getState: () => RootState) => {
  		const theme = JSON.parse(localStorage.getItem("currentTheme")!);

  		if (theme.id === themeId) {
  			const newTheme = {
  				...theme,
  				colors: { ...theme.colors, [colorName]: colorValue },
  			};
  			localStorage.setItem("currentTheme", JSON.stringify(newTheme));
  			dispatch(setThemeAC(newTheme));
  		}

  		const newThemes = getState().themes.map((theme) =>
  			theme.id === themeId
  				? { ...theme, colors: { ...theme.colors, [colorName]: colorValue } }
  				: theme,
  		);

  		localStorage.setItem("themes", JSON.stringify(newThemes));
  		dispatch(setThemesAC(newThemes));
  	};

export interface setThemes {
  type: "themes/SET_THEMES";
  payload: Theme[];
}

interface updateThemePayload {
  themeId: string;
  colorName: DefaultThemeKeys;
  colorValue: string;
}

export type ThemesActions = setThemes;
