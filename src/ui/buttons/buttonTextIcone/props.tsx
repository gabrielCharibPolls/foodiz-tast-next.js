import { ReactNode } from "react";

export interface ButtonTextIconeProps {
  text?: string;
  styleFont?: string;
  colorFont?: string;
  border?: string;
  padding?: string;
  borderRadius?: string;
  radius?: string;
  ////////////////////////////////////////////
  //props pas util
  ////////////////////////////////////////
  icon?: ReactNode;
  leftIcon?: ReactNode;
  startEnhancer?: ReactNode;
  endEnhancer?: ReactNode;
  marginLeftLeftIcon?: string;
  marginLeftRightIcon?: string;
  marginRightLeftIcon?: string;
  marginRightRightIcon?: string;
  marginRightrightIcone?: string;
  bg?: string;
  variant?: string;
  width?: string;
  height?: string;
  color?: string;
}
