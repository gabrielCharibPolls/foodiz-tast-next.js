import { Button, Text, Box } from "@chakra-ui/react";
import SaveIcon from "@/ui/icons/save";
//////////////////////////////////////////////////////////////////////////
//// todo :
//// modifie ce button pour pourvoir rajouter de props :
//// -la couleur bg le logo et la taille et le renomer costom button
////
//////////////////////////////////////////////////////////////////////////
const SaveButton = () => {
  return (
    <Button
      flexDirection='row'
      alignItems='center'
      padding='12px'
      width='113px'
      height='32px'
      background='#00504E'
      borderRadius='4px'
    >
      <Box pr='8px' pb='6px'>
        <SaveIcon />
      </Box>

      <Text
        fontFamily='Inter'
        fontSize='12px'
        lineHeight='15px'
        color='#FFFFFF'
      >
        Save & Add
      </Text>
    </Button>
  );
};

export default SaveButton;
