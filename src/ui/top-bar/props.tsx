import { ChakraProps } from "@chakra-ui/react";
import { ReactElement } from "react";

export interface TopbarProps extends ChakraProps {
  //ça remplace  bouttonRight / buttonleft
  startEnhancer?: ReactElement;
  endEnhancer?: ReactElement;
  text?: string;
  styleFont?: string;
  colorFont?: string;
  logo?: ReactElement;
  // buttonLeft?: ReactElement;
  // buttonRight?: ReactElement;
  icone?: ReactElement;
  arrowLeft?: ReactElement;
}
