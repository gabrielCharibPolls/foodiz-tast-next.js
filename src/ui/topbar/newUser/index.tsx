import React from "react";
import { Text, HStack } from "@chakra-ui/react";
import Flechegauche from "@/ui/icons/leftArrow";
import SaveButton from "@/ui/buttons/saveButton";

const Topbar = () => {
  return (
    <HStack justifyContent='space-between' py='11px' bg='white'>
      <HStack
        p='12px'
        py='18.5'
        paddingLeft='32px'
        height='36px'
        paddingRight='22px'
      >
        <HStack
          bg='teal.500'
          borderRadius='100'
          background='#E7E9F4'
          w='28px'
          h='28px'
          align='center'
          justify='center'
        >
          <Flechegauche />
        </HStack>

        <Text size='16px' fontFamily='inter' align='center' fontWeight='bold'>
          Add new user
        </Text>
      </HStack>

      <HStack paddingRight='32px'>
        {/* todo arranger ce button la taille de l'icone  */}
        <SaveButton />
      </HStack>
    </HStack>
  );
};

export default Topbar;
