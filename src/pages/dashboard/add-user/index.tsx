import React from "react";
import { HStack, VStack } from "@chakra-ui/react";
import Topbar from "@/ui/top-bar/newUser";
import UserInformationForms from "@/ui/forms/user-information";
import UserType from "@/ui/forms/user-type";
import InvitationMail from "@/ui/forms/invitation-mail";
import SideMenu from "@/ui/menu/side-menu";
import Page from "@/ui/page";

export default function AddUser() {
  return (
    <Page bg='#F8F9FC;'>
      <Topbar />
      <HStack p='32px' spacing={"32px"}>
        <HStack w='30%' alignSelf={"baseline"}>
          <SideMenu />
        </HStack>
        <VStack width={"100%"}>
          <UserInformationForms />
          <UserType />
          <InvitationMail />
        </VStack>
      </HStack>
    </Page>
  );
}
