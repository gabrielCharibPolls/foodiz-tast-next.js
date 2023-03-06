import React from "react";
import Fleche from "../icons/loupe";
import { Text, Flex, HStack } from "@chakra-ui/react";
import Flechegauche from "../icons/leftArrow";
import ButtonDeleteCompanie from "../icons/buttonDeleteCompany";
import ButtonAdd from "../icons/buttonAddUser";
import DeleteButton from "../buttons/deleteButton";
import AddLogo from "../icons/addLogo";
import Logo from "../icons/logo";

type Props = {};

////////////////////////////
//changer le const
////////////////////////
const HeadButton: React.FC<Props> = ({}) => {
  return (
    <HStack justifyContent='space-between' py='11px'>
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
      //////////////////////////////////////////////////////////// /////demander
      l'aide pour les positions des buttons
      ////////////////////////////////////////////////////////////
      <HStack paddingRight='32px' spacing='6px'>
        {/* <ButtonAdd /> */}
        <DeleteButton />
        <ButtonAdd />
      </HStack>
    </HStack>
  );
};

export default HeadButton;
