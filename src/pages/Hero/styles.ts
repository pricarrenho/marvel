import styled, { css } from "styled-components";

export const WrapperContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
`;

export const Image = styled.img`
  max-width: 300px;
  border-radius: 8px;
  object-fit: cover;
`;

export const WrapperButton = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 24px;
    font-size: ${theme.font.sizes.xlg};
  `}
`;

export const WrapperContentText = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.neutral[100]};
    padding: 24px;
    margin-top: 48px;
    width: 100%;
    border-radius: 8px;
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
  `}
`;

export const Description = styled.ul`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
    color: ${theme.colors.neutral[600]};
  `}
`;
