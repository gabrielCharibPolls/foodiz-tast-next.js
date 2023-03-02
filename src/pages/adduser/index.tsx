import React from "react";
import { Text, Flex, HStack, Box, VStack } from "@chakra-ui/react";
import Call_to_Action_addUser from "@/ui/call_to_action/call_to_action_add_user";
import UserInformationForms from "@/ui/forms/userInformation";
import UserType from "@/ui/forms/userType";
import InvitationMail from "@/ui/forms/invitationMail";
import SideMenu from "@/ui/menu/sidemenu";

export default function AddUser() {
  return (
    <>
      <Call_to_Action_addUser />

      <HStack>
        <VStack>
          <SideMenu type={false} />
        </VStack>

        <VStack p='12px' pl='736px' pr='32px'>
          <UserInformationForms />
          <UserType />
          <InvitationMail />
        </VStack>
      </HStack>
    </>
  );
}
