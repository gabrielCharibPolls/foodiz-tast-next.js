import React from "react";
import { Text, HStack } from "@chakra-ui/react";
import { TopbarProps } from "./props";

const Topbar = ({
  startEnhancer,
  text,
  styleFont,
  colorFont,
  logo,
  buttonLeft,
  buttonRight,
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
        {startEnhancer && (
          <HStack
            bg='teal.500'
            borderRadius='100'
            background='#E7E9F4'
            w='28px'
            h='28px'
            align='center'
            justify='center'
          >
            {startEnhancer}
          </HStack>
        )}

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
        {buttonLeft}
        {buttonRight}
        {icone}
      </HStack>
    </HStack>
  );
};

export default Topbar;
