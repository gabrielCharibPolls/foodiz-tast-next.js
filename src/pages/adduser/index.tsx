import React from "react";
import { Text, Flex, HStack, Box } from "@chakra-ui/react";
import TopInfo from "@/ui/topInfos";
import Call_to_Action_addUser from "@/ui/call_to_action/call_to_action_add_user";
import UserInformationForms from "@/ui/forms/userInformation";
import HeadBoutton from "@/ui/headBoutton";
import AllCarte from "@/ui/cartd/allCard";
import Top from "@/ui/top";
///////////////////////////////////////////////////////////////////
///arranger allcarts props car elle contiens de props inutill
/// all carts c'est mieux le mettre directement tout le composant ici
//////////////////////////////////////////////////////////////////////

export default function AddUser() {
  return (
    <>
      <Call_to_Action_addUser />
      <UserInformationForms />
    </>
  );
}
