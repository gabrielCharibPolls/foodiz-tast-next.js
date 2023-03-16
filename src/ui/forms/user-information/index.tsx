import React from "react";
import { useFormik } from "formik";
import {
  Text,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Card,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import validationSchema from "./validation";

const UserInformationForms = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      userType: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Card border='1px #E9EAF0' width={"100%"}>
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
        <FormControl id='firstName' pr='20px'>
          <FormLabel
            fontFamily='Inter'
            fontStyle='normal'
            fontWeight='500'
            fontSize='12px'
            display='flex'
            color='#8F95B2'
            lineHeight={"15px"}
          >
            FIRST NAME
          </FormLabel>
          <Input
            placeholder='Insert a frist name'
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

        <FormControl id='lastName'>
          <FormLabel
            fontFamily='Inter'
            fontStyle='normal'
            fontWeight='500'
            fontSize='12px'
            color='#8F95B2'
          >
            LAST NAME
          </FormLabel>
          <Input
            placeholder='Insert a last name'
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
        <FormControl id='email' pr='20px'>
          <FormLabel
            fontFamily='Inter'
            fontStyle='normal'
            fontWeight='500'
            fontSize='12px'
            display='flex'
            color='#8F95B2'
            lineHeight={"14.52px"}
          >
            EMAIL ADDRESS
          </FormLabel>
          <Input
            placeholder='Insert an email adress'
            type='email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.email && Boolean(formik.errors.email)}
          />
        </FormControl>

        <FormControl id='phone'>
          <FormLabel
            fontFamily='Inter'
            fontStyle='normal'
            fontWeight='500'
            fontSize='12px'
            color='#8F95B2'
          >
            PHONE (optionnal)
          </FormLabel>
          <Input
            placeholder='Insert a phone number '
            type='tel'
            name='phone'
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.phone && Boolean(formik.errors.phone)}
          />
        </FormControl>
      </HStack>
    </Card>
  );
};

export default UserInformationForms;
