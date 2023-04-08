import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { themeWhite } from "./styles/theme";
import { Routes } from "./routes";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={themeWhite}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
