import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${() => css`
    body {
      margin: 0;
      padding: 0;
    }

    h1 {
      color: red;
    }
  `}
`;
