import styled, { css, DefaultTheme } from "styled-components";
import { ButtonStyleType } from "./types";

type WrapperProps = {
  $styleType: ButtonStyleType;
};

const WrapperModifier = {
  primary: (theme: DefaultTheme) => css`
    padding: 14px 64px;
    background-color: ${theme.colors.neutral[100]};
    color: ${theme.colors.neutral[700]};
    font-weight: 200;
    font-size: ${theme.font.sizes.sm};

    &:hover {
      background-color: ${theme.colors.neutral[400]};
    }

    &:focus {
      background-color: ${theme.colors.neutral[400]};
    }

    @media (min-width: 800px) {
      padding: 14px;
      font-size: ${theme.font.sizes.md};
    }
  `,
};

export const WrapperButton = styled.button<WrapperProps>`
  ${({ theme, $styleType }) => css`
    border: none;
    border-radius: ${theme.borderRadius};
    cursor: pointer;
    transition: background ${theme.transition};

    ${$styleType && WrapperModifier[$styleType](theme)}
  `}
`;
