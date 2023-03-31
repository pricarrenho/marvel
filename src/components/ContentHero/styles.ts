import styled, { css } from "styled-components";

export const WrapperContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 24px;

  @media (min-width: 800px) {
    grid-template-columns: auto 1fr;
    justify-items: initial;
    gap: 48px;
  }
`;

export const Image = styled.img`
  max-width: 300px;
  border-radius: 8px;
  object-fit: cover;
`;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 800px) {
    width: 25%;
  }
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 24px;
    font-size: ${theme.font.sizes.lg};
    text-align: center;

    @media (min-width: 800px) {
      text-align: left;
      font-size: ${theme.font.sizes.xlg};
    }
  `}
`;

export const WrapperContentText = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.neutral[100]};
    padding: 32px;
    margin-top: 48px;
    border-radius: 8px;

    @media (min-width: 800px) {
      padding: 24px;
    }
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};

    @media (min-width: 800px) {
      font-size: ${theme.font.sizes.lg};
    }
  `}
`;

export const Description = styled.li`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    color: ${theme.colors.neutral[600]};
    margin-bottom: 16px;

    @media (min-width: 800px) {
      font-size: ${theme.font.sizes.md};
      margin-bottom: 8px;
    }
  `}
`;
