import React from "react";
import image1 from "../images/Image.png";
import { useGetBlogsQuery, useCreateBlogMutation } from "../redux/api/api";
import { useState } from "react";
import Select from "react-select";
const CreateBlog = () => {
  const { data, isSuccess } = useGetBlogsQuery();
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
    editorPick: false,
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
  console.log(formData);

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
        <p className=" text-4xl text-white absolute bottom-60 left-40">
          Richird Norton photorealistic <br /> rendering as real photos
        </p>
        <div className=" flex items-center absolute bottom-40 left-40 gap-4">
          <p>08.08.2021</p>
          <hr className=" w-12" />
          <p className=" max-w-xs text-sm">
            Progressively incentivize cooperative systems through technically
            sound functionalities. The credibly productivate seamless data.
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" p-4 items-center flex flex-col mx-auto max-w-7xl"
      >
        <div className=" flex gap-2">
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
        <div className=" flex gap-2">
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
        <div className="flex gap-2">
          <label htmlFor="category" className=" flex flex-col p-2 italic">
            Category
            <input
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className=" w-96 p-2 border-black border rounded-xl"
            />
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateBlog;
