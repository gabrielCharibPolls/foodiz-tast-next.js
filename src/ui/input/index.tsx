import { useState } from "react";
import { Icon, Input, HStack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const AnimatedInput = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <HStack m='0'>
      <Icon
        as={SearchIcon}
        color='gray.500'
        onClick={toggleExpansion}
        cursor='pointer'
      />

      {isExpanded && <Input type='text' placeholder='Type to searche...' size='xs' />}
    </HStack>
  );
};

export default AnimatedInput;
