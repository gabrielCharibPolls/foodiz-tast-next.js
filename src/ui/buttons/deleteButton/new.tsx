import React from "react";
import { Button, Text } from "@chakra-ui/react";
import SaveIcon from "@/ui/icons/save";
import Trash from "@/ui/icons/trash";

const DeleteButton = () => {
  return (
    <Button
      display='flex'
      flexDirection='row'
      alignItems='center'
      padding='12px'
      width='113px'
      height='32px'
      background='#F46363'
      borderRadius='4px'
      flex='none'
      order={1}
      flexGrow={0}
    >
      <Trash />
      <Text
        fontFamily='Inter'
        fontStyle='normal'
        fontWeight={700}
        fontSize='12px'
        lineHeight='15px'
        textAlign='center'
        color='#FFFFFF'
      >
        Delete company
      </Text>
    </Button>
  );
};

export default DeleteButton;
