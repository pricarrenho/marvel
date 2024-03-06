import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.red[200]};
  `}
`;

export const WrapperContent = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 800px) {
      flex-direction: row;
      justify-content: space-between;
      padding: 0;
    }
  `}
`;

export const LinkTitle = styled(Link)`
  ${() => css``}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 100px;
    object-fit: cover;
  `}
`;
