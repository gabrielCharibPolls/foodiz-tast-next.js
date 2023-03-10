import React from "react";
import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { ButtonTextIconeProps } from "./props";
import Flechegauche from "../../icons/leftArrow";

const ButtonTextIcone = ({
  text,
  styleFont,
  colorFont,
  border,
  padding,
  borderRadius,
  /////////////////////////////////////////////////
  ///voir si on peut suprimer ce props
  ///////////////////////////////////////////////
  radius,
  icon,
  leftIcon,
  startEnhancer,
  endEnhancer,
  marginLeftRightIcon,
  marginRightLeftIcon,
  marginRightRightIcon,
  bg,
  variant,
  width,
  height,
  color,
}: ButtonTextIconeProps) => {
  return (
    <Button
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
      {leftIcon && (
        <Box
          pl={`${marginLeftRightIcon || "8px"}`}
          pr={`${marginLeftRightIcon || "8px"}`}
        >
          {leftIcon}
        </Box>
      )}

      {startEnhancer && (
        <HStack>
          pb='2px' pl='12px' pr='0px'
          {startEnhancer}
        </HStack>
      )}

      <Text
        fontFamily={styleFont || "Inter"}
        fontSize='12px'
        lineHeight='15px'
        textAlign='center'
        color={colorFont || "#FFFFFF"}
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
