import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
`;

export const WrapperLabel = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[100]};
    font-size: ${theme.font.sizes.sm};
  `}
`;

export const WrapperInput = styled.input`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    height: 24px;
    padding-left: 8px;
    padding-right: 8px;
    outline-color: ${theme.colors.white};
    border-radius: 4px;
    border: 2px solid ${theme.colors.white};
  `}
`;
