import React from "react";
import { Text, HStack } from "@chakra-ui/react";
const Tab = () => {
  return (
    <HStack
      justifyContent='space-between'
      p='16px'
      border='1px solid #E9EAF0'
      bg='white'
      paddingLeft='32px'
      height='36px'
    >
      <HStack spacing='30px'>
        <Text
          size='10px'
          fontStyle='regular'
          color='#8F95B2'
          fontFamily='Inter'
        >
          Restaurants
        </Text>{" "}
        <Text fontFamily='Inter' size='10 px' fontWeight='bold'>
          Users
        </Text>{" "}
        <Text
          size='10px'
          fontStyle='regular'
          paddingRight='5px'
          color='#8F95B2'
          fontFamily='Inter'
        >
          Informations
        </Text>
      </HStack>
    </HStack>
  );
};

export default Tab;
