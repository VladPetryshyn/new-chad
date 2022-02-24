import { initialThemes } from "@utils/constants/themes";
import { ThemeActions } from "./actions";

const initialState = initialThemes[0];

export const themeReducer = (state = initialState, action: ThemeActions) => {
	switch (action.type) {
	case "theme/SET_THEME":
		return action.payload;

	default:
		return state;
	}
};
