import React from "react";
import Fleche from "../icons/arrow";
import { Text, Flex, HStack } from "@chakra-ui/react";
import { CarteProps } from "./props";

const Carte: React.FC<CarteProps> = ({ name, mail, role, onClick }) => {
  return (
    <HStack
      justifyContent='space-between'
      p='16px'
      border='1px solid #E9EAF0'
      borderRadius='8px'
      bg='white'
      padding='16px'
      w={"full"}
    >
      <HStack spacing='24px' w={"full"} flex='1'>
        <HStack w={"full"}>
          <Text w='30%' as='b'>
            {name}
          </Text>

          <Text w='30%' size='14px' color='#8F95B2'>
            {mail}
          </Text>

          <Text size='14px' color='#8F95B2'>
            {role}
          </Text>
        </HStack>
      </HStack>
      <Flex
        bg='teal.500'
        borderRadius='100'
        background='#CCE0E0'
        w='28px'
        h='28px'
        align='center'
        justify='center'
        onClick={onClick}
      >
        <Fleche />
      </Flex>
    </HStack>
  );
};

export default Carte;
