import * as S from "./styles";

type LoadingProps = {
  size?: number;
};

export const Loading = ({ size = 48 }: LoadingProps) => {
  return (
    <S.Wrapper>
      <S.Loading size={size} />
    </S.Wrapper>
  );
};
