import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { themeReducer } from "./theme";
import { ThemeActions } from "./theme/actions";
import { themesReducer } from "./themes";
import { ThemesActions } from "./themes/actions";

export const rootReducer = combineReducers({
  theme: themeReducer,
  themes: themesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppActions = ThemesActions | ThemeActions;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AppActions
>;
