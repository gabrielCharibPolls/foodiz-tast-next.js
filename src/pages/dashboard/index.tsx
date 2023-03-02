import React from "react";
import { Text, Flex, HStack, Box } from "@chakra-ui/react";
import TopInfo from "@/ui/topInfos";
import HeadBoutton from "@/ui/headBoutton";
import AllCarte from "@/ui/cartd/allCard";
import Top from "@/ui/top";
///////////////////////////////////////////////////////////////////
///arranger allcarts props car elle contiens de props inutill
/// all carts c'est mieux le mettre directement tout le composant ici
//////////////////////////////////////////////////////////////////////

export default function Dashboard() {
  return (
    <>
      <HeadBoutton />
      <TopInfo />
      <Box bg='#E7E9F4' pb='280px'>
        <Top />
        <AllCarte name={""} mail={""} role={""} />
      </Box>
    </>
  );
}
