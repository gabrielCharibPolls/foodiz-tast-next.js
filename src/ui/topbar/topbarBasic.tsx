import React from "react";
import { Text, HStack } from "@chakra-ui/react";
import Flechegauche from "../icons/leftArrow";
import ButtonAdd from "../icons/buttonAddUser";
import Logo from "../icons/logo";
import ButtonTextIcone from "@/ui/buttons/buttonTextIcone";
import Trash from "../icons/trash";

const HeadButton = () => {
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
        <HStack
          bg='teal.500'
          borderRadius='100'
          background='#E7E9F4'
          w='28px'
          h='28px'
          align='center'
          justify='center'
        >
          <Flechegauche />
        </HStack>
        <Logo />
        <Text size='16px' fontFamily='inter' align='center' fontWeight='bold'>
          Nightborn
        </Text>
      </HStack>
      <HStack>
        <ButtonTextIcone text='Delete company' startEnhancer=<Trash></Trash> />
        <ButtonAdd />
      </HStack>
    </HStack>
  );
};

export default HeadButton;
