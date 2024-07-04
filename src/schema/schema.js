import * as yup from "yup";

export const schema = yup.object().shape({
  fullName: yup.string("Wrong Full name").required("Full name is required"),
  email: yup.string().email("Wrong Email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, "Wrong Phone")
    .required("Phone is required"),
  message: yup.string(),
});
