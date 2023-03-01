import React from "react";
import { Text, Flex, HStack, Box } from "@chakra-ui/react";
import TopInfo from "@/ui/composents/topInfos";
import HeadBoutton from "@/ui/composents/headBoutton";
import AllCarte from "@/ui/composents/allCarte";
import Top from "@/ui/composents/top";

export default function Dashboard() {
  return (
    <>
      <HeadBoutton />
      <TopInfo />
      <Box bg='#E7E9F4' pb='280px'>
        <Top />
        <AllCarte />
      </Box>
    </>
  );
}
