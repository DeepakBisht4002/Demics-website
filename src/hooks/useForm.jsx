import { useState } from "react";

const useForm = (initialValues = {},validationSchema) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((err) => ({
      ...err,
      [name]: "",
    }));
  };

  const validateSchema = async () => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
      setErrors({});
      return true;
    } catch (error) {
      let newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
      return false;
    }
  };
  const handleSubmit = (callback) => async(e) => {
    e.preventDefault();
    const isValid =  await validateSchema();
    if(isValid) callback(values);
  };
  return { values, handleChange, handleSubmit,errors };
};

export default useForm;
