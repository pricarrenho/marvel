import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.red};
    padding: 16px 0px;
    margin-bottom: 40px;

    @media (min-width: 800px) {
      margin-bottom: 104px;
    }
  `}
`;

export const WrapperContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    @media (min-width: 800px) {
      flex-direction: row;
      justify-content: space-between;
    }
  `}
`;

export const LinkTitle = styled(Link)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
    color: ${theme.colors.white};
  `}
`;
