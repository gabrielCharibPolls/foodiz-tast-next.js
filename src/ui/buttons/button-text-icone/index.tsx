import React from "react";
import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import { ButtonTextIconeProps } from "./props";

const ButtonTextIcone = ({
  text,
  textFont,
  textcolor,
  border,
  padding,
  borderRadius,
  startEnhancer,
  endEnhancer,
  marginRightLeftIcon,
  marginRightRightIcon,
  bg,
  variant,
  width,
  height,
  color,
  ...props
}: ButtonTextIconeProps) => {
  return (
    <Button
      {...props}
      flexDirection='row'
      alignItems='center'
      padding={padding || "12px"}
      width={width || "142px"}
      height={height || "32px"}
      background={bg || "#F46363"}
      borderRadius={borderRadius || "4px"}
      border={border}
      color={color}
      variant={variant || "solid"}
    >
      {startEnhancer && (
        <HStack pb='2px' pl='12px' pr='0px'>
          {startEnhancer}
        </HStack>
      )}

      <Text
        fontFamily={textFont || "Inter"}
        fontSize='12px'
        lineHeight='15px'
        textAlign='center'
        color={textcolor || "#FFFFFF"}
        pr={`${marginRightLeftIcon || "12px"}`}
        pl={`${marginRightRightIcon || "12px"}`}
      >
        {text || "Default Text"}
      </Text>
      {endEnhancer && <Flex pr='12px'>{endEnhancer}</Flex>}
    </Button>
  );
};

export default ButtonTextIcone;
