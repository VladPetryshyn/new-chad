import { getImageFromIDB } from "@utils/indexedDB";
import { AppThunk } from "../rootReducer";

export interface setWallpaper {
  type: "wallpaper/SET_WALLPAPER";
  payload: string;
}

export const setWallpaperAC = (payload: string): setWallpaper => ({
	type: "wallpaper/SET_WALLPAPER",
	payload,
});

export const updateWallpaper =
  (payload: number): AppThunk =>
  	async (dispatch) => {
  		localStorage.setItem("currentWallpaper", String(payload));
  		dispatch(setWallpaperAC(await getImageFromIDB(payload)));
  	};

export type WallpaperActions = setWallpaper;
