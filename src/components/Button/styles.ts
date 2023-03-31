import styled, { css, DefaultTheme } from "styled-components";
import { ButtonStyleType } from "./types";

type WrapperProps = {
  $styleType: ButtonStyleType;
};

const WrapperModifier = {
  primary: (theme: DefaultTheme) => css`
    padding: 8px 16px;
    font-size: ${theme.font.sizes.xsm};
  `,

  secondary: (theme: DefaultTheme) => css`
    padding: 8px 16px;
    font-size: ${theme.font.sizes.xsm};
    background-color: ${theme.colors.neutral[300]};
  `,

  tertiary: (theme: DefaultTheme) => css`
    padding: 14px 64px;
    font-size: ${theme.font.sizes.sm};

    @media (min-width: 800px) {
      padding: 14px;
      font-size: ${theme.font.sizes.md};
    }
  `,
};

export const WrapperButton = styled.button<WrapperProps>`
  ${({ theme, $styleType }) => css`
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${theme.colors.neutral[100]};
    color: ${theme.colors.neutral[700]};
    transition: 0.2s;

    &:hover:not(:disabled) {
      background-color: ${theme.colors.neutral[300]};
    }

    &:disabled {
      cursor: initial;
      opacity: 0.5;
    }

    &:focus {
      background-color: ${theme.colors.neutral[300]};
    }

    ${$styleType && WrapperModifier[$styleType](theme)}
  `}
`;
