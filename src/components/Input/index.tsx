import * as S from "./styles";
import { InputProps } from "./types";

export const Input = ({ value, onChange, name }: InputProps) => {
  return (
    <S.Wrapper>
      <S.WrapperLabel htmlFor={name}>Pesquise por personagem</S.WrapperLabel>

      <S.WrapperInput
        name={name}
        id={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </S.Wrapper>
  );
};
