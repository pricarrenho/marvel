import styled, { css } from "styled-components";
import { Link as LinkStyled } from "react-router-dom";

export const Wrapper = styled.div`
  min-height: calc(100vh - 104px - 67px);
  padding: 40px 0px 40px 0px;
  display: flex;
  flex-direction: column;
  align-content: start;
`;

export const WrapperContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 24px;

  @media (min-width: 800px) {
    grid-template-columns: auto 1fr auto;
    justify-items: initial;
    gap: 48px;
  }
`;

export const Image = styled.img`
  ${({ theme }) => css`
    max-width: 300px;
    border-radius: ${theme.borderRadius};
    object-fit: cover;
  `}
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

export const Link = styled(LinkStyled)`
  ${({ theme }) => css`
    padding: 12px 16px;
    border-radius: ${theme.borderRadius};
    transition: background ${theme.transition};
    align-self: flex-start;

    font-weight: bold;
    background-color: ${theme.colors.red[200]};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.red[300]};
    }
  `}
`;

export const WrapperContentText = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.neutral[100]};
    padding: 32px;
    margin-top: 48px;
    border-radius: ${theme.borderRadius};

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
