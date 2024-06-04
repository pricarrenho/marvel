import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonType =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonStyleType = "primary";

export type ButtonProps = {
  children?: string | number;
  styleType: ButtonStyleType;
  active?: boolean;

  as?: React.ElementType;
} & ButtonType;
