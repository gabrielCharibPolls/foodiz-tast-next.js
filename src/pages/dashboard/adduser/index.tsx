import React from "react";
import { Text, Flex, HStack, Box, VStack, Stack } from "@chakra-ui/react";
import Topbar from "@/ui/topbar/newUser";
import UserInformationForms from "@/ui/forms/userInformation";
import UserType from "@/ui/forms/userType";
import InvitationMail from "@/ui/forms/invitationMail";
import SideMenu from "@/ui/menu/sidemenu";
import Page from "@/ui/page";

export default function AddUser() {
  ///////////////////////////////////////////////////
  //composant page ne marche pas
  ///////////////////////////////////////////////////
  return (
    <>
      <Page bg='red' />
      <Box bgColor='#E7E9F4' h='100%' w='100%'>
        <Topbar />

        <HStack p='32px' spacing={"32px"}>
          <HStack w='30%' alignSelf={"baseline"}>
            <SideMenu type={false} />
          </HStack>

          <VStack width={"100%"} w='70%'>
            <UserInformationForms />
            <UserType />
            <InvitationMail />
          </VStack>
        </HStack>
      </Box>
    </>
  );
}
