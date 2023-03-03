import React from "react";
import { Text, Flex, HStack, Box, VStack, Stack } from "@chakra-ui/react";
import Call_to_Action_addUser from "@/ui/call_to_action/call_to_action_add_user";
import UserInformationForms from "@/ui/forms/userInformation";
import UserType from "@/ui/forms/userType";
import InvitationMail from "@/ui/forms/invitationMail";
import SideMenu from "@/ui/menu/sidemenu";

export default function AddUser() {
  return (
    <Stack
      width={"100%"}
      paddingRight={"32px"}
      height={"100%"}
      backgroundColor={"#FFFFFF"}
    >
      <Call_to_Action_addUser />

      <HStack backgroundColor={"#F8F9FC"} paddingTop={"12px"}>
        <SideMenu type={false} />

        <VStack width={"100%"}>
          <UserInformationForms />
          <UserType />
          <InvitationMail />
        </VStack>
      </HStack>
    </Stack>
  );
}
