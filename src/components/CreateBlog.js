import React from "react";
import image1 from "../images/Image.png";
import { useGetBlogsQuery, useCreateBlogMutation } from "../redux/api/api";
import { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Footer from "./Footer";
import { toast } from "react-toastify";
const CreateBlog = () => {
  const { data, isSuccess } = useGetBlogsQuery();
  const navigate = useNavigate();
  const [createBlog] = useCreateBlogMutation();
  const date = new Date();
  let currentDay = String(date.getDate()).padStart(2, "0");
  let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
  let currentYear = date.getFullYear();
  let currentDate = `${currentDay}.${currentMonth}.${currentYear}`;
  const [selectedOptions, setSelectedOptions] = useState();
  const [formData, setFormData] = useState({
    id: 0,
    date: currentDate,
    tags: [],
    title: "",
    author: "",
    shortText: "",
    longText: "",
    category: "",
    imageUrl: "",
    editorPick: "false",
  });
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }
  const optionList = [
    { value: "photo", label: "Photo" },
    { value: "design", label: "Design" },
    { value: "creative", label: "Creative" },
    { value: "futuristic", label: "Futuristic" },
  ];
  const filteredOptions = [];
  if (selectedOptions !== undefined) {
    for (let i = 0; i < selectedOptions.length; i++) {
      filteredOptions.push(selectedOptions[i].label);
    }
  }
  formData.tags = filteredOptions;
  formData.id = isSuccess && data[data.length - 1].id + 1;
  function handleSubmit(event) {
    event.preventDefault();
    createBlog(formData);
    navigate("/");
    toast.success("Created a new blog successfully", {
      position: toast.POSITION.TOP_LEFT,
    });
  }
  return (
    <div>
      <div
        className=" relative text-white"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          height: "600px",
        }}
      >
        <div className="absolute bottom-1/2 right-1/2 text-center translate-y-1/2 translate-x-1/2">
          <p className=" text-4xl text-white ">
            Richird Norton photorealistic <br /> rendering as real photos
          </p>
          <div className=" flex items-center  gap-4 py-2">
            <p>08.08.2021</p>
            <hr className=" w-12" />
            <p className=" max-w-xs text-sm">
              Progressively incentivize cooperative systems through technically
              sound functionalities. The credibly productivate seamless data.
            </p>
          </div>
        </div>
        <p
          onClick={() => navigate("/")}
          className=" cursor-pointer absolute top-5 left-5"
        >
          <ArrowCircleLeftIcon fontSize="large" />
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" p-4 items-center flex flex-col mx-auto max-w-7xl"
      >
        <div className=" flex gap-2 tablet:flex-col">
          <label htmlFor="author" className=" flex flex-col p-2 italic">
            Author
            <input
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className=" w-96 p-2 border-black border rounded-xl"
            />
          </label>
          <label htmlFor="title" className=" flex flex-col p-2 italic">
            Title
            <input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className=" w-96 p-2 border-black border rounded-xl"
            />
          </label>
        </div>
        <div className=" flex gap-2 tablet:flex-col">
          <label htmlFor="shortText" className=" flex flex-col p-2 italic">
            Preview Text
            <textarea
              id="shortText"
              name="shortText"
              value={formData.shortText}
              onChange={handleChange}
              className=" h-48 w-96 p-2 border-black border rounded-xl"
            />
          </label>
          <label htmlFor="longText" className=" flex flex-col p-2 italic">
            Main Text
            <textarea
              id="longText"
              name="longText"
              value={formData.longText}
              onChange={handleChange}
              className=" h-48 w-96 p-2 border-black border rounded-xl"
            />
          </label>
        </div>
        <div className="flex gap-2 tablet:flex-col">
          <label htmlFor="category" className=" flex flex-col p-2 italic">
            Category
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className=" w-96 p-2 border-black border rounded-xl"
            >
              <option
                name="category"
                checked={formData.category === "Travel"}
                value="Travel"
              >
                Travel
              </option>
              <option
                name="category"
                checked={formData.category === "Fashion"}
                value="Fashion"
              >
                Fashion
              </option>
              <option
                name="category"
                checked={formData.category === "Adventure"}
                value="Adventure"
              >
                Adventure
              </option>
              <option
                name="category"
                checked={formData.category === "Technology"}
                value="Technology"
              >
                Technology
              </option>
            </select>
          </label>
          <label htmlFor="imageUrl" className=" flex flex-col p-2 italic">
            Image URL
            <input
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className=" w-96 p-2 border-black border rounded-xl"
            />
          </label>
        </div>
        <label htmlFor="tags" className=" flex flex-col p-2 italic">
          Tags
          <Select
            id="tags"
            options={optionList}
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            isMulti
            className=" w-96 p-2"
          />
        </label>
        <button
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          type="submit"
        >
          Create
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default CreateBlog;
