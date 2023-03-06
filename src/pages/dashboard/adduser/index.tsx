import React from "react";
import { Text, Flex, HStack, Box, VStack, Stack } from "@chakra-ui/react";
import Call_to_Action_addUser from "@/ui/topbar/newUser";
import UserInformationForms from "@/ui/forms/userInformation";
import UserType from "@/ui/forms/userType";
import InvitationMail from "@/ui/forms/invitationMail";
import SideMenu from "@/ui/menu/sidemenu";

export default function AddUser() {
  return (
    <Box bgColor='red' h='100%'>
      <Call_to_Action_addUser />

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
  );
}
