import { ReactElement } from "react";

export type TopbarProps = {
  startEnhancer?: ReactElement;
  endEnhancer?: string;
  text?: string;
  styleFont?: string;
  colorFont?: string;
  logo?: ReactElement;
  buttonLeft?: ReactElement;
  buttonRight?: ReactElement;
  icone?: ReactElement;
  arrowLeft?: ReactElement;
};
