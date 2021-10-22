import { Grid } from "@components/Grid";
import { Menu } from "@components/Menu";
import { initialThemes } from "@utils/constants";
import { useAppDispatch, useAppSelector } from "@utils/hooks/store";
import { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Wallpapers } from "./components/Wallpapers";
import { setThemeAC } from "./store/theme/actions";
import { setThemesAC } from "./store/themes/actions";

const Container = styled.div`
  color: #${(p) => p.theme.fg};
`;

function App() {
  const theme = useAppSelector(({ theme }) => theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const localTheme = localStorage.getItem("currentTheme");
    const localThemes = localStorage.getItem("themes");

    if (localTheme) dispatch(setThemeAC(JSON.parse(localTheme)));
    if (localThemes) dispatch(setThemesAC(JSON.parse(localThemes)));
    else {
      localStorage.setItem("themes", JSON.stringify(initialThemes));
      localStorage.setItem("currentTheme", JSON.stringify(theme));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
