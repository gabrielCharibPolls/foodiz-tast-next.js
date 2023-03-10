import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import AddLogo from "@/ui/icons/addLogo";
import { ButtonProps } from "./props";

function ButtonText({
  text,
  styleFont,
  colorFont,
  bg,
  variant,
  width,
  height,
  colorScheme,
}: ButtonProps) {
  return (
    <Button
      flexDirection='row'
      alignItems='center'
      padding='12px'
      width={width || "142px"}
      height={height || "32px"}
      background={bg || "#00504E"}
      borderRadius='4px'
      order={1}
      variant={variant || "solid"}
      colorScheme={colorScheme || "blue"}
    >
      <Flex pl='12px' pr='8px'>
        <AddLogo />

        <Text
          fontFamily={styleFont || "Inter"}
          fontSize='12px'
          lineHeight='15px'
          textAlign='center'
          color={colorFont || "#FFFFFF"}
          pr='12px'
        >
          {text || "Default Text"}
        </Text>
      </Flex>
    </Button>
  );
}

export default ButtonText;
