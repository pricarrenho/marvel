import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.red[200]};
  `}
`;

export const Content = styled.div`
  ${() => css`
    padding: 24px;
  `}
`;

export const ContentText = styled.p`
  ${({ theme }) => css`
    text-transform: uppercase;
    text-align: center;
    font-size: ${theme.font.sizes.xsm};
    color: ${theme.colors.neutral[100]};
    line-height: 20px;
    letter-spacing: 1px;

    a {
      color: ${theme.colors.neutral[100]};
      transition: color ${theme.transition};

      &:hover {
        color: ${theme.colors.neutral[300]};
      }
    }
  `}
`;
