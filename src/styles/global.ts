import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body,
    h1,
    h2,
    h3,
    p {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html,
    body,
    #__next {
      background: ${theme.colors.background};
      overflow: auto;
      font-family: ${theme.font.family};
    }

    h2,
    h3 {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: ${theme.colors.neutral[800]};
    }

    li {
      list-style: none;
    }

    ul {
      padding: 0;
    }
  `}
`;
