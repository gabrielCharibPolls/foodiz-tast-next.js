import React from "react";
import Fleche from "../icons/arrow";
import { Text, Flex, HStack } from "@chakra-ui/react";
import { CarteProps } from "./props";

const Carte: React.FC<CarteProps> = ({ name, mail, role }) => {
  return (
    <HStack
      justifyContent='space-between'
      p='16px'
      border='1px solid #E9EAF0'
      borderRadius='8px'
      bg='white'
      padding='16px'
    >
      <HStack spacing='24px'>
        <Text as='b'>{name}</Text>
        <Text size='14px' color='#8F95B2' paddingLeft='100px'>
          {mail}
        </Text>
        <Text size='14px' color='#8F95B2' paddingLeft='100px'>
          {role}
        </Text>
      </HStack>
      <Flex
        bg='teal.500'
        borderRadius='100'
        background='#CCE0E0'
        w='28px'
        h='28px'
        align='center'
        justify='center'
      >
        <Fleche />
      </Flex>
    </HStack>
  );
};

export default Carte;
