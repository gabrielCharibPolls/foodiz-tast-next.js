import { Box } from "@chakra-ui/react";
import React from "react";
import { PageProps } from "./props";

const Page: React.FC<PageProps> = ({ bg, children }) => {
  return (
    <Box w='100%' h='100%' bg={bg} id='bg-red'>
      {children}
    </Box>
  );
};

export default Page;
