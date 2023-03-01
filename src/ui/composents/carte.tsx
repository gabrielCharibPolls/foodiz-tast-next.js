import React from "react";
import Fleche from "../icons/fleche";
import { Text, Flex, HStack } from "@chakra-ui/react";
interface Props     {

};

const Carte: React.FC<Props> = ({}) => {
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
        <Text as='b'>Stéphane De Groot</Text>
        <Text size='14px' color='#8F95B2' paddingLeft='100px'>
          stephane.de.goort@foodiz.com
        </Text>
        <Text size='14px' color='#8F95B2' paddingLeft='100px'>
          admin
        </Text>
      </HStack>
      <Flex
        bg='teal.500'
        borderRadius='100'
        background='#CCE0E0'
        w='28px'
        h='28px'
        align='center'
        justify='center'>
        <Fleche />
      </Flex>
    </HStack>
  );
};

export default Carte;
