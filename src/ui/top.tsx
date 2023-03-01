import React from "react";
import Loupe from "./icons/loupe";
import { Text, Flex, Input, Button, Box, Spacer } from "@chakra-ui/react";
type Props = {};

const Top: React.FC<Props> = ({}) => {
  return (
    <Box>
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
        <Box margin='5px'>
          <Loupe />
        </Box>
        <Input
          w=''
          variant='unstyled'
          placeholder='Type to search...'
          size='xs'
          paddingRight='48px'
        />
      </Flex>
    </Box>
  );
};

export default Top;
