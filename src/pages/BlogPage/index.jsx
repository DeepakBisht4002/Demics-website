import { useState } from "react";

import Pagination from "../../components/common/Pagination";
import { blogCardData } from "../../data/BlogCardData";
import MuiChip from "../../components/common/MuiChip";
import MuiButton from "../../components/common/MuiButton";
import MuiAccordian from "../../components/common/MuiAccordian";
import FAQ from "../../components/sections/FAQ";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import FormBuilder from "../../components/common/FormBuilder";
import { contactusFormSchema } from "../../utils/schemas/ContactusSchema";
import { blogFormSchema } from "../../utils/validation";
import { Stack, TextField } from "@mui/material";
import MuiInput from "../../components/common/MuiInput";

const chips = [
  "SEO",
  "Content Marketing",
  "Social Media Marketing",
  "PPC Ads",
  "Google Ads",
  "Facebook Ads",
  "Email Marketing",
];

const BlogCard = ({ img, description }) => {
  return (
    <div className="h-[400px] w-[400px] ">
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover rounded-xl"
          src={img}
          alt="image"
        />
      </div>
      <div>
        <h1 className="text-2xl text-white font-semibold">{description}</h1>
      </div>
    </div>
  );
};

const BlogPage = () => {
  const { values, handleChange, handleSubmit } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [activeIndx, setActiveIndx] = useState(null);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = blogCardData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(blogCardData.length / itemsPerPage);

  const clickHandler = (index) => {
    setActiveIndx(index);
  };
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold text-white mb-5">
        Blog
      </h2>
      <div className="flex items-center justify-center">
        <input className="border w-1/2 bg-[#262626] text-white rounded-full p-2 border-white" />
      </div>
      <div className="flex justify-between gap-2 mt-5 ">
        {chips.map((item, index) => (
          <MuiChip
            isActive={index === activeIndx}
            onClick={() => clickHandler(index)}
            key={index}
            value={item}
          />
        ))}
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 place-items-center">
        {currentItems.map((item) => (
          <Link key={item.id} to={`/blog/${item.id}`}>
            <BlogCard img={item.img} description={item.description} />
          </Link>
        ))}
      </div>

      <section>
        <div className="text-white">
          <h1 className="text-4xl font-bold leading-tight">Interested in</h1>
          <h1 className="text-4xl font-bold leading-tight">
            Working Together?
          </h1>
        </div>
        <div>
          <FormBuilder
            values={values}
            schema={contactusFormSchema}
            onChange={handleChange}
            errors={blogFormSchema}
          >
            <Stack direction="row" gap={2}>
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
              name="email"
              onChange={handleChange}
              value={values.email}
            />
            <MuiButton onClick={handleSubmit} label="Submit"/>
          </FormBuilder>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
