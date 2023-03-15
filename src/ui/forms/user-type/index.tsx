import React from "react";
import { useFormik } from "formik";
import {
  Text,
  FormControl,
  FormLabel,
  Card,
  Select,
  Heading,
} from "@chakra-ui/react";

import * as Yup from "yup";

const UserInformationForms = () => {
  const formik = useFormik({
    initialValues: {
      userType: "",
    },
    validationSchema: Yup.object({
      userType: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Card
      border='1px solid #E9EAF0'
      bg='#FFFFFF'
      borderRadius='8px'
      padding='24px 20px '
      width={"100%"}
    >
      <Heading as='h2' size='md' pb='12px'>
        User type
      </Heading>

      <Text
        fontFamily='Inter'
        fontStyle='normal'
        fontSize='15px'
        color='#8F95B2'
        w='760px'
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero,
        volutpat pharetra commodo nunc. Lacus malesuada fermentum, elit egestas
        lorem bibendum.
      </Text>

      <FormControl id='userType' w='416px' pt='28px'>
        <FormLabel
          fontFamily='Inter'
          fontStyle='normal'
          fontSize='12px'
        ></FormLabel>
        <Select
          color='#8F95B2'
          placeholder='Select a user type'
          name='userType'
          value={formik.values.userType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.userType && Boolean(formik.errors.userType)}
        >
          <option value='user'>Utilisateur</option>
          <option value='admin'>Administrateur</option>
        </Select>
      </FormControl>
    </Card>
  );
};

export default UserInformationForms;
