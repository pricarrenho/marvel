import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.red};
  `}
`;

export const Content = styled.div`
  ${() => css`
    padding: 24px;

    @media (min-width: 800px) {
      padding: 40px;
    }
  `}
`;

export const ContentText = styled.p`
  ${({ theme }) => css`
    text-transform: uppercase;
    text-align: center;
    font-size: ${theme.font.sizes.xsm};
    color: ${theme.colors.neutral[100]};
    line-height: 20px;
  `}
`;
