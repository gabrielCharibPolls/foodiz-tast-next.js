import React from "react";

import AnimatedInput from "@/ui/input/index";
import { Text, Flex, Button, Box, Spacer } from "@chakra-ui/react";

const Tab = () => {
  return (
    <Box bg='#E7E9F4'>
      <Flex px='32px' paddingTop='24.5px'>
        <Button
          border-radius='4px'
          width='49px'
          height='31px'
          border='8'
          bg='#CCE0E0'
        >
          <Text
            fontSize='12px'
            fontFamily='Inter'
            textAlign='center'
            color='#006462'
          >
            Admin
          </Text>
        </Button>
        <Button colorScheme='teal' variant='link' marginLeft='16px'>
          <Text
            fontSize='12px'
            fontFamily='Inter'
            textAlign='center'
            color='#006462'
          >
            Superior
          </Text>
        </Button>
        <Button colorScheme='teal' variant='link' marginLeft='16px'>
          <Text
            fontSize='12px'
            fontFamily='Inter'
            textAlign='center'
            color='#006462'
          >
            Enployee
          </Text>
        </Button>
        <Spacer />
        <Box>
          <AnimatedInput />
        </Box>
      </Flex>
    </Box>
  );
};

export default Tab;
