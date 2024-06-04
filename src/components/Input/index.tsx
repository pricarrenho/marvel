import { IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { Loading } from "../Loading";

import { InputProps } from "./types";
import * as S from "./styles";

export const Input = ({
  value,
  onChange,
  name,
  onClear,
  isLoading,
}: InputProps) => {
  const renderLoading = () => (
    <S.InputIcon>
      <Loading size={16} />
    </S.InputIcon>
  );

  const renderClear = () => (
    <S.InputButtonClear onClick={() => onClear("")}>
      <IoClose size={16} />
    </S.InputButtonClear>
  );

  const renderSearch = () => (
    <S.InputIcon>
      <FaSearch size={14} />
    </S.InputIcon>
  );

  const currentInput = {
    loading: renderLoading,
    clear: renderClear,
    search: renderSearch,
  };

  const isInputFilled = value.length > 0;

  const inputStatus =
    isLoading && isInputFilled ? "loading" : isInputFilled ? "clear" : "search";

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

        {currentInput[inputStatus]()}
      </S.WrapperInput>
    </S.Wrapper>
  );
};
