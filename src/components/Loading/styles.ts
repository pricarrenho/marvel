import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
`;

type LoadingProps = {
  size: number;
};

export const Loading = styled.div<LoadingProps>`
  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
    border: 3px solid #fff;
    border-bottom-color: red;
    border-left-color: red;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;
