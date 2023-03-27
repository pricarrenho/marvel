import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body {
      margin: 0;
      padding: 0;
      background: ${theme.colors.background};
    }

    h1 {
      color: red;
    }
  `}
`;
