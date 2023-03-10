import React from "react";
import { HStack, VStack } from "@chakra-ui/react";

import Topbar from "@/ui/topbar/newUser";
import UserInformationForms from "@/ui/forms/userInformation";
import UserType from "@/ui/forms/userType";
import InvitationMail from "@/ui/forms/invitationMail";
import SideMenu from "@/ui/menu/sidemenu";
import Page from "@/ui/page";



export default function AddUser() {
  return (
    <Page bg='#F8F9FC;'>
      <Topbar />

      <HStack p='32px' spacing={"32px"}>
        <HStack w='30%' alignSelf={"baseline"}>
          <SideMenu type={false} />
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
