import React from "react";
import { Grid } from "@components/Grid";
import { Menu } from "@components/Menu";
import { initialThemes } from "@utils/constants/themes";
import { useAppDispatch, useAppSelector } from "@utils/hooks/store";
import { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Wallpapers } from "./components/Wallpapers";
import { setThemeAC } from "./store/theme/actions";
import { setThemesAC } from "./store/themes/actions";
import { setWallpaperAC } from "./store/wallpapers/actions";
import { getImageFromIDB } from "@utils/indexedDB";

const Container = styled.div`
  color: ${(p) => p.theme.fg};
`;

function App() {
	const theme = useAppSelector(({ theme }) => theme);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const changeWallpaper = async (walls: number) =>
			dispatch(setWallpaperAC(await getImageFromIDB(walls)));
		const localTheme = localStorage.getItem("currentTheme");
		const localThemes = localStorage.getItem("themes");
		const wallpaper = localStorage.getItem("currentWallpaper");

		if (localTheme) dispatch(setThemeAC(JSON.parse(localTheme)));
		if (localThemes) dispatch(setThemesAC(JSON.parse(localThemes)));
		if (wallpaper) changeWallpaper(+wallpaper);
		// else changeWallpaper(defaultWallpapers[0]);
		if (!localTheme && !localThemes) {
			localStorage.setItem("themes", JSON.stringify(initialThemes));
			localStorage.setItem("currentTheme", JSON.stringify(theme));
		}
	}, [dispatch]);

	return (
		<ThemeProvider theme={theme.colors}>
			<Container>
				<Wallpapers />
				<Grid />
				<Menu />
			</Container>
		</ThemeProvider>
	);
}

export default App;
