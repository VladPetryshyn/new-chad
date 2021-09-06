import { Menu } from "@components/Menu";
import { Modal } from "@components/Modal";
import { createContext, useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { Wallpapers } from "./components/Wallpapers";
import { initialThemes } from "./utils/constants";

export const ThemeContext = createContext<(theme: DefaultTheme) => void>(
  () => {},
);

function App() {
  const [theme, setTheme] = useState(initialThemes.ice);

  useEffect(() => {
    const theme = localStorage.getItem("currentTheme");
    const themes = localStorage.getItem("themes");
    if (theme && themes) setTheme(JSON.parse(themes)[theme]);
    else {
      localStorage.setItem("themes", JSON.stringify(initialThemes));
      localStorage.setItem("currentTheme", "ice");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={setTheme}>
        <Wallpapers />
        <Menu />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
