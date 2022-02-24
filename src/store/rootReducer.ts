import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { themeReducer } from "./theme";
import { ThemeActions } from "./theme/actions";
import { themesReducer } from "./themes";
import { ThemesActions } from "./themes/actions";
import { wallpaperReducer } from "./wallpapers";
import { WallpaperActions } from "./wallpapers/actions";
import { widgetsReducer } from "./widgets";
import { WidgetsActions } from "./widgets/actions";

export const rootReducer = combineReducers({
	theme: themeReducer,
	themes: themesReducer,
	widgets: widgetsReducer,
	wallpaper: wallpaperReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppActions =
  | ThemesActions
  | ThemeActions
  | WallpaperActions
  | WidgetsActions;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AppActions
>;
