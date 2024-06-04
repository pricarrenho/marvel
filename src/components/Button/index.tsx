import { ButtonProps } from "./types";

import * as S from "./styles";

export const Button = ({
  children,
  styleType,
  active,
  ...props
}: ButtonProps) => {
  return (
    <S.WrapperButton $styleType={styleType} data-active={active} {...props}>
      {children}
    </S.WrapperButton>
  );
};
