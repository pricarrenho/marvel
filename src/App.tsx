import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { themeWhite } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={themeWhite}>
      <h1>Marvel</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
