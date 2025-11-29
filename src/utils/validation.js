import * as Yup from "yup";

export const blogFormSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Name must be at least 3 letters")
    .required("Full Name is required"),

  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),

  role: Yup.string().required("Please select a role"),

  bio: Yup.string()
    .min(10, "Bio must be minimum 10 characters")
    .required("Bio is required"),
});

export const contactUsValidation = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Full Name is required"),

  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),

  mobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
    .required("Mobile number is required"),

  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});
