import * as Yup from "yup";

const phoneRegExp = /^(?:\+32|0)4([-\.\s]?[0-9]){8}$/;

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Invalid phone number")
    .required("Required"),
  userType: Yup.string().required("Required"),
});

export default validationSchema;
