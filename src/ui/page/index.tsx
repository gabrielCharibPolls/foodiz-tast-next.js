import { Box } from "@chakra-ui/react";
import React from "react";
import { PageProps } from "./props";

const Page: React.FC<PageProps> = ({ bg }) => {
  return <Box w='100%' h='100%' bg={bg}></Box>;
};

export default Page;
