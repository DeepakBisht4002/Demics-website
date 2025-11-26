import { Stack, Typography } from "@mui/material";
import React from "react";
import FormBuilder from "../../components/common/FormBuilder";
import { contactusFormSchema } from "../../utils/schemas/ContactusSchema";
import { blogFormSchema } from "../../utils/validation";
import useForm from "../../hooks/useForm";
import MuiInput from "../../components/common/MuiInput";
import MuiButton from "../../components/common/MuiButton";
import FAQ from "../../components/sections/FAQ";

const ContactUs = () => {
  const { values, handleChange, handleSubmit } = useForm({
    name: "",
    email: "",
    message: "",
  });
  return (
    <div>
      <Typography color="#fff" textAlign={"center"}>Contact Us</Typography>
      <div>
        <Typography color="#fff" textAlign={"center"}>Tell us About</Typography>
        <Typography color="#fff"  textAlign={"center"}>Your Project or vision here</Typography>
      </div>
      <div className="w-[800px]">
        <FormBuilder
          values={values}
          schema={contactusFormSchema}
          onChange={handleChange}
          errors={blogFormSchema}
        >
            <MuiInput
              label="Full Name*"
              name="name"
              onChange={handleChange}
              value={values.name}
            />
          <Stack direction="row" gap={2}>
            <MuiInput
              label="Email*"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
            <MuiInput
              label="Email*"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
          </Stack>
          <MuiInput
            label="Your message for us"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          <MuiButton onClick={handleSubmit} label="Submit" />
        </FormBuilder>
      </div>
      <section>
        <FAQ/>
      </section>
    </div>
  );
};

export default ContactUs;
