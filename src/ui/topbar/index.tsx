import React, { ReactElement } from "react";
import { Text, HStack } from "@chakra-ui/react";
import { TopbarProps } from "./props";

const Topbar = ({
  text,
  styleFont,
  colorFont,
  logo,
  button,
  button2,
  icone,
  arrowLeft,
}: TopbarProps) => {
  return (
    <HStack justifyContent={"space-between"} py='11px'>
      <HStack
        p='12px'
        py='18.5'
        bg='white'
        paddingLeft='32px'
        height='36px'
        paddingRight='22px'
      >
        {arrowLeft}
        {logo}
        <Text
          size='16px'
          fontFamily='inter'
          align='center'
          fontWeight='bold'
          style={{ fontStyle: styleFont, color: colorFont }}
        >
          {text}
        </Text>
      </HStack>
      <HStack>
        {button}
        {button2}
        {icone}
      </HStack>
    </HStack>
  );
};

export default Topbar;
