import React from "react";

import { Text, Flex, HStack, VStack } from "@chakra-ui/react";
import { None } from "framer-motion";

const SideMenu: React.FC<None> = ({}) => {
  return (
    <VStack
      p='16px'
      border='1px solid #E9EAF0'
      borderRadius='8px'
      bg='white'
      w={"full"}
    >
      <HStack w={"full"} flex='1'>
    
          <Text as='b'>User informations</Text>
     
   
          <Text as='b'>User informations</Text>

      </HStack>
    </VStack>
  );
};

export default SideMenu;
