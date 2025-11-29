import { Stack, Typography, Box } from "@mui/material";
import FormBuilder from "../../components/common/FormBuilder";
import { contactusFormSchema } from "../../utils/schemas/ContactusSchema";
import { blogFormSchema, contactUsValidation } from "../../utils/validation";
import useForm from "../../hooks/useForm";
import MuiInput from "../../components/common/MuiInput";
import MuiButton from "../../components/common/MuiButton";
import FAQ from "../../components/sections/FAQ";

const ContactUs = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(
    {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    contactUsValidation
  );

  const submitHandler = (formValues) => {
    console.log("Submitted values:", formValues);
  };

  return (
    <Box sx={{ px: 2, py: 6, maxWidth: 1000, mx: "auto" }}>
      {" "}
      <Typography
        variant="h3"
        className="italic"
        color="#fff"
        textAlign="center"
        gutterBottom
      >
        Contact Us{" "}
      </Typography>
      ```
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h4" color="#fff" gutterBottom>
          Tell us About
        </Typography>
        <Typography color="#fff">
          Your <span className="italic">Project</span> or{" "}
          <span className="italic">vision</span> here
        </Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit(submitHandler)}
        sx={{ mb: 6 }}
      >
        <FormBuilder
          values={values}
          schema={contactusFormSchema}
          onChange={handleChange}
          errors={errors}
        >
          <MuiInput
            label="Full Name*"
            name="name"
            onChange={handleChange}
            value={values.name}
          />

          <Stack direction={{ xs: "column", sm: "row" }} gap={2} sx={{ mb: 2 }}>
            <MuiInput
              label="Email*"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
            <MuiInput
              type="number"
              label="Mobile Number"
              name="phone"
              onChange={handleChange}
              value={values.phone}
            />
          </Stack>

          <MuiInput
            label="Your message for us"
            name="message"
            multiline
            rows={4}
            onChange={handleChange}
            value={values.message}
          />

          <Box sx={{ mt: 3 }}>
            <MuiButton type="submit" label="Submit" />
          </Box>
        </FormBuilder>
      </Box>
      <FAQ />
      <Box sx={{ mt: 10 }}>
        <Stack sx={{ textAlign: "center", mb: 3 }}>
          <Typography variant="h3" color="#fff" className="italic">
            Interested in
          </Typography>
          <Typography variant="h3" color="#fff">
            Working Together?
          </Typography>
        </Stack>

        <FormBuilder
          values={values}
          schema={contactusFormSchema}
          onChange={handleChange}
          errors={blogFormSchema}
        >
          <Stack direction={{ xs: "column", sm: "row" }} gap={2} sx={{ mb: 2 }}>
            <MuiInput
              label="Full Name*"
              name="name"
              onChange={handleChange}
              value={values.name}
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
            name="message"
            multiline
            rows={4}
            onChange={handleChange}
            value={values.message}
          />

          <Box sx={{ mt: 3 }}>
            <MuiButton type="submit" label="Submit" />
          </Box>
        </FormBuilder>
      </Box>
    </Box>
  );
};

export default ContactUs;
