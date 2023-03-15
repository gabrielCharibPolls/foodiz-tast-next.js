import { ButtonProps } from "@chakra-ui/react";
import { ReactElement } from "react";

export interface ButtonTextIconeProps extends ButtonProps {
  text?: string;
  textFont?: string;
  textcolor?: string;
  startEnhancer?: ReactElement;
  endEnhancer?: string;
  marginLeftLeftIcon?: string;
  marginLeftRightIcon?: string;
  marginRightLeftIcon?: string;
  marginRightRightIcon?: string;
  marginRightrightIcone?: string;
}
