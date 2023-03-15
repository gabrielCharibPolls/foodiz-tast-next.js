import React from "react";
import { HStack, VStack } from "@chakra-ui/react";
import TopbarOld from "@/ui/top-bar/newUser";
import UserInformationForms from "@/ui/forms/user-information";
import UserType from "@/ui/forms/user-type";
import InvitationMail from "@/ui/forms/invitation-mail";
import SideMenu from "@/ui/menu/side-menu";
import Page from "@/ui/page";
import Arrow from "@/ui/icons/arrowN";
import Topbar from "@/ui/top-bar";
import ButtonTextIcone from "@/ui/buttons/button-text-icone";
import SaveIcon from "@/ui/icons/save";

export default function AddUser() {
  return (
    <Page bg='#F8F9FC;'>
      <Topbar
        startEnhancer={
          <HStack
            bg='teal.500'
            borderRadius='100'
            background='#E7E9F4'
            w='28px'
            h='28px'
            align='center'
            justify='center'
          >
            <Arrow direction='right' />
          </HStack>
        }
        text='Add new user'
        endEnhancer={
          <HStack>
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
          </HStack>
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
