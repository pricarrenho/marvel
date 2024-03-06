import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-bottom: 24px;

  @media (min-width: 800px) {
    align-items: start;
    padding-bottom: 0;
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
    padding: 14px 16px;
    outline-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius};
    border: 2px solid ${theme.colors.white};
  `}
`;
