import { ButtonProps } from "./types";

import * as S from "./styles";

export const Button = ({ children, styleType, ...props }: ButtonProps) => {
  return (
    <S.WrapperButton $styleType={styleType} {...props}>
      {children}
    </S.WrapperButton>
  );
};
