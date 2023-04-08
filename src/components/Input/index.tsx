import * as S from "./styles";
import { InputProps } from "./types";

export const Input = ({ value, onChange }: InputProps) => {
  return (
    <S.Wrapper>
      <S.WrapperLabel>Pesquise por personagem</S.WrapperLabel>
      <S.WrapperInput
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </S.Wrapper>
  );
};
