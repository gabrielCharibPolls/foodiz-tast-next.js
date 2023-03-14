import { ReactElement, ReactNode } from "react";

export type TopbarProps = {
  startEnhancer?: ReactElement;
  endEnhancer?: string;
  text?: string;
  styleFont?: string;
  colorFont?: string;
  logo?: ReactElement;
  button?: ReactElement;
  button2?: ReactElement;
  icone?: ReactElement;
  arrowLeft?: ReactElement;
};
