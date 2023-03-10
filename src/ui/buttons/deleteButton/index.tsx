import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import Trash from "@/ui/icons/trash";

const DeleteButton = () => {
  return (
    <Button
      flexDirection='row'
      alignItems='center'
      padding='12px'
      width='142px'
      height='32px'
      background='#F46363'
      borderRadius='4px'
      order={1}
    >
      <Flex pl='12px' pr='8px'>
        <Trash />
      </Flex>
      <Text
        fontFamily='Inter'
        fontSize='12px'
        lineHeight='15px'
        textAlign='center'
        color='#FFFFFF'
        pr='12px'
      >
        Delete company
      </Text>
    </Button>
  );
};

export default DeleteButton;
