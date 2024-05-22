import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  min-height: calc(100vh - 104px - 67px);
  padding: 40px 0px 40px 0px;
  display: flex;
  flex-direction: column;
  align-content: start;
`;

export const Titles = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    padding: 0px 24px 16px 24px;

    font-size: ${theme.font.sizes.sm};
    color: ${theme.colors.neutral[700]};

    h2:not(:first-child) {
      display: none;
    }

    @media (min-width: 800px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 0px 24px 16px 24px;

      h2:not(:first-child) {
        display: grid;
      }
    }
  `}
`;

export const LinkWrapper = styled(Link)`
  ${({ theme }) => css`
    background-color: ${theme.colors.neutral[100]};
    border-radius: ${theme.borderRadius};
    margin-bottom: 24px;
    transition: background ${theme.transition};

    &:hover {
      background-color: ${theme.colors.neutral[300]};
    }
  `}
`;

type LinkPaginationProps = {
  $currentButton?: boolean;
};

export const LinkPagination = styled(Link)<LinkPaginationProps>`
  ${({ theme, $currentButton }) => css`
    margin-left: 8px;
    padding: 8px 16px;
    border-radius: ${theme.borderRadius};
    transition: background ${theme.transition};

    &:hover {
      background-color: ${theme.colors.red[200]};
      color: ${theme.colors.white};
    }

    ${$currentButton &&
    css`
      background-color: ${theme.colors.red[200]};
      color: white;
    `}
  `}
`;

export const WrapperCard = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    padding: 24px;

    font-size: ${theme.font.sizes.sm};

    color: ${theme.colors.neutral[600]};

    @media (min-width: 800px) {
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`;

export const WrapperCardImage = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  font-weight: bold;
`;

export const WrapperCardSeries = styled.div`
  display: none;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const WrapperCardEvents = styled.div`
  display: none;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 72px;
    height: 72px;
    border-radius: ${theme.borderRadius};
    object-fit: cover;
    object-position: left;
  `}
`;

export const Pagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 24px 0px;

  @media (min-width: 800px) {
    gap: 8px;
  }
`;

export const CharacterNotFound = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
  `}
`;
