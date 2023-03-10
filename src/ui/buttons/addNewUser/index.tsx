import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import AddLogo from "@/ui/icons/addLogo";

const AddNewUserButton = () => {
  return (
    <Button
      flexDirection='row'
      alignItems='center'
      padding='12px'
      width='142px'
      height='32px'
      background='#00504E'
      borderRadius='4px'
      order={1}
      flexGrow={0}
    >
      <Flex pl='12px' pr='8px'>
        <AddLogo />
      </Flex>
      <Text
        fontFamily='Inter'
        fontSize='12px'
        lineHeight='15px'
        textAlign='center'
        color='#FFFFFF'
        pr='12px'
      >
        Add new user
      </Text>
    </Button>
  );
};

export default AddNewUserButton;
