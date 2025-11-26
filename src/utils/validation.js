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
