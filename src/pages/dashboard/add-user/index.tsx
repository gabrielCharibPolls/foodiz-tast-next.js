import React from "react";
import { HStack, VStack } from "@chakra-ui/react";
import TopbarOld from "@/ui/top-bar/newUser";
import UserInformationForms from "@/ui/forms/user-information";
import UserType from "@/ui/forms/user-type";
import InvitationMail from "@/ui/forms/invitation-mail";
import SideMenu from "@/ui/menu/side-menu";
import Page from "@/ui/page";
import Topbar from "@/ui/top-bar";
import ButtonTextIcone from "@/ui/buttons/button-text-icone";
import SaveIcon from "@/ui/icons/save";

export default function AddUser() {
  return (
    <Page bg='#F8F9FC;'>
      <Topbar
        w='100%'
        text='Add new user'
        endEnhancer={
          <ButtonTextIcone
            padding='12px'
            width='113px'
            height='32px'
            borderRadius='4px'
            marginLeftLeftIcon='12px'
            bg='#00504E'
            text='Save & Add'
            startEnhancer={<SaveIcon />}
          />
        }
      />
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
