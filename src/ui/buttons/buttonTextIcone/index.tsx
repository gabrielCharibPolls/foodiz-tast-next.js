import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { ButtonTextIconeProps } from "./props";

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
        <Flex
          pl={`${marginLeftRightIcon || "12px"}`}
          pr={`${marginLeftRightIcon || "8px"}`}
        >
          {leftIcon}
        </Flex>
      )}

      {icon && (
        <Flex
          pl={`${marginLeftRightIcon || "12px"}`}
          pr={`${marginLeftRightIcon || "8px"}`}
        >
          {icon}
        </Flex>
      )}

      {startEnhancer && <Flex pl='12px'>{startEnhancer}</Flex>}

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
