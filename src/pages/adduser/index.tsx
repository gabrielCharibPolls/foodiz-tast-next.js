import React from "react";
import { ErrorMessage, useFormik } from "formik";
import Call_to_Action_addUser from "@/ui/call_to_action/call_to_action_add_user";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

import * as Yup from "yup";

const phoneRegExp = /^(?:\+32|0)4([-\.\s]?[0-9]){8}$/;

const SignupForm = () => {
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
    <Flex>
         <Call_to_Action_addUser />
    </Flex>
    <form onSubmit={formik.handleSubmit}>
      <FormControl id='firstName' isRequired>
        <FormLabel>First Name</FormLabel>
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
        <FormLabel>Last Name</FormLabel>
        <Input
          type='text'
          name='lastName'
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.lastName && Boolean(formik.errors.lastName)}
        />
      </FormControl>

      <FormControl id='email' isRequired>
        <FormLabel>Email Address</FormLabel>
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
        <FormLabel>Phone</FormLabel>
        <Input
          type='tel'
          name='phone'
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.phone && Boolean(formik.errors.phone)}
        />
      </FormControl>

      <FormControl id='userType' isRequired>
        <FormLabel>User Type</FormLabel>
        <Select
          name='userType'
          value={formik.values.userType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.userType && Boolean(formik.errors.userType)}
        >
          <option value=''>Sélectionner un type d'utilisateur</option>
          <option value='client'>Client</option>
          <option value='fournisseur'>Fournisseur</option>
        </Select>
      </FormControl>

      <Button type='submit' mt={4} colorScheme='blue'>
        Submit
      </Button>
    </form>
  );
};

export default SignupForm;
