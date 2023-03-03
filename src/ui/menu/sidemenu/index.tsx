import React from "react";

import { Text, Flex, HStack, VStack } from "@chakra-ui/react";
import { None } from "framer-motion";

const SideMenu: React.FC<None> = ({}) => {
  return (
    <VStack
      p='10px 12px 10px 20px'
      border='1px solid #E9EAF0'
      borderRadius='8px'
      bg='white'
      alignItems='flex-start'
      backgroundColor='#FFFFFF'
      boxSizing='border-box'
      display='flex'
      flexDirection='column'
      gap='8px'
      left='212px'
      padding='20px'
      position='absolute'
      top='80px'
    >
      <HStack
        flex='1'
        p='10px 12px 0px 130px'
        display='flex'
        flexDirection='row'
        alignItems='center'
        padding='10px 12px'
        width='240px'
        height='35px'
        bg='#FBF8EE'
        borderRadius='6px'
        order='0'
        alignSelf='stretch'
        flexGrow='0'
      >
        <Text
          as='b'
          fontFamily='Inter'
          fontWeight='500'
          lineHeight='15px'
          color='#EDB10E'
          py='10px'
        >
          User informations
        </Text>
      </HStack>

      <HStack
        flex='1'
        p='10px 12px'
        display='flex'
        flexDirection='row'
        alignItems='center'
        padding='10px 12px'
        width='240px'
        height='35px'
        borderRadius='6px'
        order='0'
        alignSelf='stretch'
        flexGrow='0'
        pr='20px'
      >
        <Text
          as='b'
          fontFamily='Inter'
          fontWeight='500'
          lineHeight='15px'
          color='#8F95B2'
          py='10px'
        >
          User type
        </Text>
      </HStack>
      <HStack>
        <Text
          p='10px 12px'
          as='b'
          fontFamily='Inter'
          fontWeight='500'
          lineHeight='15px'
          color='#8F95B2'
          py='10px'
        >
          Invitation mail{" "}
        </Text>
      </HStack>
    </VStack>
  );
};

export default SideMenu;
