import { initialThemes } from "@utils/constants/themes";
import { ThemesActions } from "./actions";

export const themesReducer = (state = initialThemes, action: ThemesActions) => {
	switch (action.type) {
	case "themes/SET_THEMES":
		return action.payload;

	default:
		return state;
	}
};
