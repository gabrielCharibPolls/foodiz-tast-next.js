import React from "react";
import { Text, Flex, HStack, VStack } from "@chakra-ui/react";
import Carte from "./carte";

type Props = {
  
};

const AllCarte: React.FC<Props> = ({}) => {
  return (
    <VStack
      align='stretch'
      marginLeft='32px'
      marginRight='32px'
      paddingTop='24.5px'
      justifyContent='space-between'
      borderRadius='8px'
      bg='#E7E9F4'
    >
      <Carte />
      <Carte />
      <Carte />
      <Carte />
      <Carte />
    </VStack>
  );
};

export default AllCarte;
