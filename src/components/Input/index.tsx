import { IoClose } from "react-icons/io5";
import { InputProps } from "./types";
import * as S from "./styles";

export const Input = ({ value, onChange, name, onClear }: InputProps) => {
  return (
    <S.Wrapper>
      <S.WrapperLabel htmlFor={name}>Pesquise por personagem</S.WrapperLabel>

      <S.WrapperInput>
        <S.Input
          name={name}
          id={name}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />

        {value.length > 1 && (
          <S.InputButtonClear onClick={() => onClear("")}>
            <IoClose size={16} />
          </S.InputButtonClear>
        )}
      </S.WrapperInput>
    </S.Wrapper>
  );
};
