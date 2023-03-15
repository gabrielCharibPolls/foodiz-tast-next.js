import { ChakraProps } from "@chakra-ui/react";
import { ReactElement } from "react";

export interface TopbarProps extends ChakraProps {
  startEnhancer?: ReactElement;
  endEnhancer?: ReactElement;
  text?: string;
  styleFont?: string;
  colorFont?: string;
  logo?: ReactElement;
  icone?: ReactElement;
  arrowLeft?: ReactElement;
}
