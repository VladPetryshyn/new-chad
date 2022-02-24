import { WallpaperActions } from "./actions";

export const initialState = 0;

export const wallpaperReducer = (
	state = initialState,
	action: WallpaperActions,
) => {
	switch (action.type) {
	case "wallpaper/SET_WALLPAPER":
		return action.payload;
	default:
		return state;
	}
};
