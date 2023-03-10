import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import Tab from "@/ui/top/index";
import HeadBoutton from "@/ui/topbar/topbarBasic";
import Page from "@/ui/page";
import Top from "@/ui/top";
import Topbar from "@/ui/topbar";
import LeftArrow from "@/ui/icons/leftArrow";
import ButtonTextIcone from "@/ui/buttons/buttonTextIcone";

import Carte from "@/ui/cartd";

export default function Dashboard() {
  const userList: any[] = [
    {
      name: "Stéphane De Groot",
      mail: "stephane.de.groot@foodiz.com",
      role: "admin",
    },
    {
      name: "Jane Doe",
      mail: "jane.doe@example.com",
      role: "user",
    },
    {
      name: "John Smith",
      mail: "john.smith@example.com",
      role: "user",
    },
    {
      name: "Alice Johnson",
      mail: "alice.johnson@example.com",
      role: "user",
    },
    {
      name: "Mohammed Patel",
      mail: "mohammed.patel@example.com",
      role: "user",
    },
    {
      name: "Maria Garcia",
      mail: "maria.garcia@example.com",
      role: "user",
    },
    {
      name: "Yuki Nakamura",
      mail: "yuki.nakamura@example.com",
      role: "user",
    },
    {
      name: "Alexandra Lee",
      mail: "alexandra.lee@example.com",
      role: "user",
    },
    {
      name: "David Kim",
      mail: "david.kim@example.com",
      role: "user",
    },
    {
      name: "Emily Chen",
      mail: "emily.chen@example.com",
      role: "user",
    },
    {
      name: "Fernando Perez",
      mail: "fernando.perez@example.com",
      role: "user",
    },
    {
      name: "Giovanna Rossi",
      mail: "giovanna.rossi@example.com",
      role: "user",
    },
    {
      name: "Hiroshi Yamamoto",
      mail: "hiroshi.yamamoto@example.com",
      role: "user",
    },
    {
      name: "Isabella Costa",
      mail: "isabella.costa@example.com",
      role: "user",
    },
    {
      name: "Julien Dupont",
      mail: "julien.dupont@example.com",
      role: "user",
    },
    {
      name: "Katarzyna Nowak",
      mail: "katarzyna.nowak@example.com",
      role: "user",
    },
    {
      name: "Luis Hernandez",
      mail: "luis.hernandez@example.com",
      role: "user",
    },
    {
      name: "Marta Gomez",
      mail: "marta.gomez@example.com",
      role: "user",
    },
    {
      name: "Nadia Petrov",
      mail: "nadia.petrov@example.com",
      role: "user",
    },
    {
      name: "Oscar Fernandez",
      mail: "oscar.fernandez@example.com",
      role: "user",
    },
  ];

  return (
    <>
      <Page bg='#00000'>
        <Topbar text='Nightborn' icone={<LeftArrow />}></Topbar>
        <HeadBoutton />
        <Tab />
        <Box bg='#E7E9F4'>
          <Top />
          <VStack
            marginRight='32px'
            marginLeft='32px'
            paddingTop='24.5px'
            justifyContent='space-between'
            borderRadius='8px'
          >
            {userList.map((user) => (
              <Carte name={user.name} mail={user.mail} role={user.role} />
            ))}
          </VStack>
        </Box>
      </Page>
    </>
  );
}
