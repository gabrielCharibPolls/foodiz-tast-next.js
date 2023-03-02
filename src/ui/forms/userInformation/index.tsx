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
} from "@chakra-ui/react";

import * as Yup from "yup";

const phoneRegExp = /^(?:\+32|0)4([-\.\s]?[0-9]){8}$/;

const UserInformationForms = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      userType: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string()
        .matches(phoneRegExp, "Invalid phone number")
        .required("Required"),
      userType: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    /////////////////////////////////////////////////////////
    ///////le code usertype

    /**

    <FormControl id='userType'>
    <FormLabel>User Type</FormLabel>
    <Field as={Select} name='userType'>
      <option value='normal'>Normal</option>
      <option value='admin'>Admin</option>
    </Field>
  </FormControl>
*/
    //////////////////////////////////////////////

    <>
      <VStack>
        <Card border='1px #E9EAF0' maxWidth='892px'>
          <CardHeader>
            <Heading size='md' pb='12px'>
              User informations
            </Heading>

            <Text
              maxWidth='720px'
              fontFamily='Inter'
              fontStyle='normal'
              fontWeight='400'
              fontSize='15px'
              color='#8F95B2'
              flex='none'
              order='1'
              alignSelf='stretch'
              flexGrow='0'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero,
              volutpat pharetra commodo nunc. Lacus malesuada fermentum, elit
              egestas lorem bibendum.
            </Text>
          </CardHeader>

          <HStack pl='20px' pr='20px'>
            <FormControl id='firstName' isRequired pr='20px'>
              <FormLabel
                fontFamily='Inter'
                fontStyle='normal'
                fontWeight='500'
                fontSize='12px'
                display='flex'
                color='#8F95B2'
              >
                FIRST NAME
              </FormLabel>
              <Input
                type='text'
                name='firstName'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
              />
            </FormControl>

            <FormControl id='lastName' isRequired>
              <FormLabel
                fontFamily='Inter'
                fontStyle='normal'
                fontWeight='500'
                fontSize='12px'
                display='flex'
                color='#8F95B2'
              >
                LAST NAME
              </FormLabel>
              <Input
                type='text'
                name='lastName'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
              />
            </FormControl>
          </HStack>
          <HStack pl='20px' pb='20px' pr='20px' pt='32px'>
            <FormControl id='email' isRequired pr='20px'>
              <FormLabel
                fontFamily='Inter'
                fontStyle='normal'
                fontWeight='500'
                fontSize='12px'
                display='flex'
                color='#8F95B2'
              >
                EMAIL ADDRESS
              </FormLabel>
              <Input
                type='email'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.email && Boolean(formik.errors.email)}
              />
            </FormControl>

            <FormControl id='phone' isRequired>
              <FormLabel
                fontFamily='Inter'
                fontStyle='normal'
                fontWeight='500'
                fontSize='12px'
                display='flex'
                color='#8F95B2'
              >
                PHONE (optionnal)
              </FormLabel>
              <Input
                type='tel'
                name='phone'
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.phone && Boolean(formik.errors.phone)}
              />
            </FormControl>
          </HStack>
          {/* <form onSubmit={formik.handleSubmit}>
            <Button type='submit' mt={4} colorScheme='blue'>
              Submit
            </Button>
          </form> */}
        </Card>
      </VStack>
    </>
  );
};

export default UserInformationForms;
