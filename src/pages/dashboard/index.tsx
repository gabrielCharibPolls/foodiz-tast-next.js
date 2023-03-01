import React from "react";
import { Text, Flex, HStack, Box } from "@chakra-ui/react";
import TopInfo from "@/ui/topInfos";
import HeadBoutton from "@/ui/headBoutton";
import AllCarte from "@/ui/cartd/allCard";
import Top from "@/ui/top";

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
