import React from "react";

import { Text, HStack, VStack } from "@chakra-ui/react";
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
      // position='absolute'
      top='80px'
      w='100%'
    >
      <HStack
        flex='1'
        display='flex'
        flexDirection='row'
        alignItems='center'
        padding='10px 12px '
        width='305px'
        height='35px'
        bg='#FBF8EE'
        mr='15px'
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
          pr='25px'
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
      <HStack p='0px 0px 0px 0px'>
        <Text
          p='10px 12px'
          fontFamily='Inter'
          fontWeight='500'
          lineHeight='15px'
          color='#8F95B2'
        >
          Invitation mail{" "}
        </Text>
      </HStack>
    </VStack>
  );
};

export default SideMenu;
