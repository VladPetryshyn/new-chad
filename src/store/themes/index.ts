import { initialThemes } from "@utils/constants";
import { ThemesActions } from "./actions";

const initialState = initialThemes;

export const themesReducer = (state = initialState, action: ThemesActions) => {
  switch (action.type) {
    case "themes/SET_THEMES":
      return action.payload;

    default:
      return state;
  }
};
