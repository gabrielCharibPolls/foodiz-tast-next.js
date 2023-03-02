import React from "react";
import { useFormik } from "formik";
import {
  Text,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Card,
  CardHeader,
  Select,
  VStack,
  Heading,
  Checkbox,
} from "@chakra-ui/react";

import * as Yup from "yup";

const InvitationMailForm = () => {
  const formik = useFormik({
    initialValues: {
      invitationSent: false,
    },
    validationSchema: Yup.object({
      invitationSent: Yup.boolean(),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <VStack>
        <Card
          border='1px solid #E9EAF0'
          bg='#FFFFFF'
          borderRadius='8px'
          padding='24px 20px'
          display='flex'
          flexDirection='column'
          alignItems='flex-start'
          pb='32px'
        >
          <Heading as='h2' size='md' pb='12px'>
            Invitation mail
          </Heading>

          <Text
            maxWidth='720px'
            fontFamily='Inter'
            fontStyle='normal'
            fontWeight='400'
            fontSize='15px'
            color='#8F95B2'
            pt='-45px'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero,
            volutpat pharetra commodo nunc. Lacus malesuada fermentum, elit
            egestas lorem bibendum.
          </Text>

          <FormControl id='invitationSent' isRequired>
            <FormLabel
              pt='-32px'
              fontFamily='Inter'
              fontStyle='normal'
              fontWeight='500'
              fontSize='12px'
              display='flex'
              color='#8F95B2'
            >
              <HStack>
                <Checkbox
                  name='invitationSent'
                  isChecked={formik.values.invitationSent}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={
                    formik.touched.invitationSent &&
                    Boolean(formik.errors.invitationSent)
                  }
                />
                <FormLabel ml={2}>Invitation envoyée</FormLabel>
              </HStack>
            </FormLabel>
          </FormControl>
        </Card>
      </VStack>
    </>
  );
};

export default InvitationMailForm;