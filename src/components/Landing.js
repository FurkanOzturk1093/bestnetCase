import React from "react";
import { useGetBlogsQuery } from "../redux/api/api";
import image1 from "../images/Image.png";
import image2 from "../images/Image2.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { motion } from "framer-motion";
const Landing = () => {
  const { data, isSuccess } = useGetBlogsQuery();
  const categoryList = ["All", "Adventure", "Travel", "Fashion", "Technology"];
  const [category, setCategory] = useState("All");
  const editorPick = [];
  console.log(data);
  if (isSuccess === true) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].editorPick === "true") {
        editorPick.push(data[i]);
      }
    }
  }
  let PopularTopics = [];
  if (isSuccess === true) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].editorPick === "false") {
        PopularTopics.push(data[i]);
      }
    }
  }

  const handleCategory = (event) => {
    setCategory(event.target.id);
  };

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
        <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className=" text-4xl text-white py-4">
            Richird Norton photorealistic <br /> rendering as real photos
          </p>
          <div className=" flex items-center gap-4">
            <p>08.08.2021</p>
            <hr className=" w-12" />
            <p className=" max-w-xs text-sm">
              Progressively incentivize cooperative systems through technically
              sound functionalities. The credibly productivate seamless data.
            </p>
          </div>
        </div>
      </div>
      <div className=" tablet:flex tablet:flex-col target:items-center tablet:gap-4">
        <h1 className=" text-4xl py-20 px-40 mt-10 font-bold tablet:p-0 tablet:text-center">
          Popular Topics
        </h1>
        <div className="  text-sm font-bold flex justify-between tablet:flex-col tablet:items-center">
          <div className=" flex pl-40 gap-5 tablet:flex-col tablet:items-center tablet:p-0">
            {categoryList.map((item) => (
              <button
                key={item}
                id={item}
                onClick={handleCategory}
                className={`${
                  category === String(item) ? " text-[#D4A373]" : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <Link
            to="/blog/create"
            className=" pr-40 text-xl italic text-green-700 tablet:p-0 tablet:pt-8"
          >
            Create New Blog
          </Link>
        </div>
      </div>
      <div className=" mt-8 px-20 flex flex-wrap  justify-evenly tablet:p-0 ">
        {isSuccess === true &&
          PopularTopics.map((item) =>
            item.editorPick === "false" && category === "All" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: -400 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                animate={{ x: -200, scale: 1 }}
                transition={{ ease: "easeOut", duration: item.id * 0.1 }}
                viewport={{ once: true }}
                key={item.id}
              >
                <div className=" relative p-10 max-w-[420px]">
                  <img src={item.imageUrl} alt={item.imageUrl} />
                  <p className="rounded-lg  text-white absolute top-12 right-24 italic">
                    {item.category}
                  </p>
                  <p className=" py-4 text-sm text-slate-400">{item.date}</p>
                  <p className="pb-2 text-lg font-bold text-slate-800 max-w-[320px]">
                    {item.title}
                  </p>
                  <p className=" max-w-[310px] text-sm text-slate-400">
                    {item.shortText}
                  </p>
                  <Link to={`/blog/${item.id}`}>
                    <p className=" text-right"> Read More...</p>
                  </Link>
                </div>
              </motion.div>
            ) : (
              category === item.category && (
                <Link to={`blog/${item.id}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: -400 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    animate={{ x: -200, scale: 1 }}
                    transition={{ ease: "easeOut", duration: item.id * 0.1 }}
                    viewport={{ once: true }}
                    key={item.id}
                    className=" relative p-10"
                  >
                    <img src={item.imageUrl} alt={item.imageUrl} />
                    <p className="rounded-lg  text-white absolute top-12 right-24 italic">
                      {item.category}
                    </p>
                    <p className=" py-4 text-sm text-slate-400">{item.date}</p>
                    <p className="pb-2 text-2xl font-bold text-slate-800 max-w-[320px]">
                      {item.title}
                    </p>
                    <p className=" max-w-[310px] text-sm text-slate-400">
                      {item.shortText}
                    </p>
                  </motion.div>
                </Link>
              )
            )
          )}
      </div>
      <div
        className=" relative text-white"
        style={{
          backgroundImage: `url(${image2})`,
          backgroundSize: "cover",
          height: "600px",
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <p className=" text-center text-4xl text-white ">
            Richird Norton photorealistic <br /> rendering as real photos
          </p>
          <div className=" mx-auto  gap-4">
            <p className=" max-w-xs text-sm text-center py-2 mx-auto">
              Progressively incentivize cooperative systems through technically
              sound functionalities. The credibly productivate seamless data.
            </p>
            <hr className=" w-12 text-center mx-auto py-2 " />
            <p className="text-center py-2 ">08.08.2021</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className=" text-4xl py-10 px-40 mt-10 font-bold">Editor Pick</h1>
        <div className=" flex justify-evenly flex-wrap text-white ">
          {isSuccess === true &&
            editorPick.map((item) => (
              <Link to={`blog/${item.id}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: -400 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  animate={{ x: -200, scale: 1 }}
                  transition={{ ease: "easeOut", duration: item.id * 0.1 }}
                  viewport={{ once: true }}
                  key={item.id}
                  className="p-4 relative"
                >
                  {item.editorPick === "true" && (
                    <img src={item.imageUrl} alt={item.id} />
                  )}
                  <p className=" absolute top-6 right-8">{item.category}</p>
                  <p className=" text-slate-200  text-xs absolute top-32 left-10 ">
                    {item.date}
                  </p>
                  <p className=" text-lg font-bold absolute top-40 left-10">
                    {item.title}
                  </p>
                  <p className=" text-slate-200 text-sm absolute top-48 left-10 max-w-xs">
                    {item.shortText}
                  </p>
                </motion.div>
              </Link>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
