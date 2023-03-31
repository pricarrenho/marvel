import styled, { css } from "styled-components";

export const WrapperTable = styled.table`
  ${({ theme }) => css`
    border-spacing: 0 16px;
    width: 100%;
  `}
`;

export const WrapperHead = styled.thead`
  ${({ theme }) => css`
    text-align: left;

    th {
      font-size: ${theme.font.sizes.md};
      color: ${theme.colors.neutral[700]};
      padding: 0px 24px;
    }

    th:nth-child(n + 2):nth-child(-n + 3) {
      display: none;
    }

    @media (min-width: 800px) {
      th:nth-child(n + 2):nth-child(-n + 3) {
        display: table-cell;
      }
    }
  `}
`;

export const WrapperBody = styled.tbody`
  ${({ theme }) => css`
    span {
      display: flex;
    }

    a {
      text-decoration: none;
      color: ${theme.colors.neutral[600]};

      &:hover {
        color: ${theme.colors.red};
      }
    }

    td {
      padding: 24px;
      height: 54px;
      font-size: ${theme.font.sizes.sm};
      background-color: ${theme.colors.neutral[100]};
      color: ${theme.colors.neutral[600]};
    }

    td:first-child {
      border-radius: 8px 0px 0px 8px;
      display: flex;
      align-items: center;
      gap: 16px;
    }

    td:last-child {
      border-radius: 0px 8px 8px 0px;
    }

    td:nth-child(n + 2):nth-child(-n + 3) {
      display: none;
    }

    @media (min-width: 800px) {
      td:nth-child(n + 2):nth-child(-n + 3) {
        display: table-cell;
      }
    }
  `}
`;

export const Image = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 8px;
`;

export const Pagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
  margin-top: 16px;
  margin-bottom: 24px;

  @media (min-width: 800px) {
    gap: 8px;
  }
`;
