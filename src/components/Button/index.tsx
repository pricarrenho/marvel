import { ButtonProps } from "./types";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

import * as S from "./styles";

export const Button = ({
  children,
  styleType,
  icon,
  ...props
}: ButtonProps) => {
  const icons = {
    doubleArrowLeft: <MdKeyboardDoubleArrowLeft />,
    doubleArrowRight: <MdKeyboardDoubleArrowRight />,
    arrowLeft: <MdKeyboardArrowLeft />,
    arrowRight: <MdKeyboardArrowRight />,
  };

  return (
    <S.WrapperButton $styleType={styleType} {...props}>
      {icon && icons[icon]} {children}
    </S.WrapperButton>
  );
};
