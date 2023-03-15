import React from "react";
import { useFormik } from "formik";
import {
  Text,
  FormControl,
  FormLabel,
  HStack,
  Card,
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
      <Card
        border='1px solid #E9EAF0'
        bg='#FFFFFF'
        borderRadius='8px'
        padding='24px 20px'
        display='flex'
        flexDirection='column'
        pb='32px'
        w='100%'
      >
        <Heading as='h2' size='md' pb='12px'>
          Invitation mail
        </Heading>

        <Text
          fontFamily='Inter'
          fontStyle='normal'
          fontWeight='720px'
          fontSize='15px'
          color='#8F95B2'
          lineHeight={"14.52px"}
        >
          You can send a invitation mail to the user. He will be redirected to
          his company’s application and asked to finalize his account by
          creating his password
        </Text>

        <FormControl id='invitationSent'>
          <FormLabel
            pt='-32px'
            fontFamily='Inter'
            fontStyle='normal'
            fontWeight='500'
            fontSize='12px'
            display='flex'
            color='#8F95B2'
          >
            <HStack paddingTop='21px'>
              <Checkbox
                name='invitationSent'
                isChecked={formik.values.invitationSent}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.invitationSent &&
                  Boolean(formik.errors.invitationSent)
                }
                borderRadius='6px'
                borderStyle=' 1.5px, solid'
              />
              <FormLabel ml={2}>
                <Text
                  height=' 17px'
                  font-family='Inter'
                  font-style='normal'
                  font-weight='600'
                  font-size='14px'
                  line-height=' 17px'
                  color='#393360'
                  gap={"20px"}
                >
                  Send invitation mail
                </Text>{" "}
              </FormLabel>
            </HStack>
          </FormLabel>
        </FormControl>
      </Card>
    </>
  );
};

export default InvitationMailForm;
