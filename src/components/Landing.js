import React from "react";
import { useGetBlogsQuery } from "../redux/api/api";
import image1 from "../images/Image.png";
import image2 from "../images/Image2.png";
import { useState } from "react";
const Landing = () => {
  const { data, isSuccess } = useGetBlogsQuery();
  const categoryList = [
    "All",
    "Adventure",
    "Travel",
    "Fashion",
    "Technology",
    "Branding",
  ];
  const editorPick = [];
  if (isSuccess === true) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].editorPick === "true") {
        editorPick.push(data[i]);
      }
    }
  }
  const PopularTopics = [];
  if (isSuccess === true) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].editorPick === "false") {
        PopularTopics.push(data[i]);
      }
    }
  }
  const [category, setCategory] = useState("All");
  const handleCategory = (event) => {
    setCategory(event.target.id);
  };
  console.log(category);
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
      <div>
        <h1 className=" text-4xl py-20 px-40 mt-10 font-bold">
          Popular Topics
        </h1>
        <div className=" text-sm font-bold flex justify-between">
          <div className=" flex pl-40 gap-5">
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
          <p className=" pr-40">View All</p>
        </div>
      </div>
      <div className=" mt-8 px-20 flex flex-wrap  justify-evenly ">
        {isSuccess === true &&
          PopularTopics.map((item) => (
            <div key={item.id}>
              {item.editorPick === "false" && category === "All" ? (
                <div className=" relative p-10">
                  <img src={item.imageUrl} alt={item.imageUrl} />
                  <p className="rounded-lg  text-white absolute top-12 right-12 italic">
                    {item.category}
                  </p>
                  <p className=" py-4 text-sm text-slate-400">{item.date}</p>
                  <p className="pb-2 text-2xl font-bold text-slate-800">
                    {item.title}
                  </p>
                  <p className=" max-w-[310px] text-sm text-slate-400">
                    {item.shortText}
                  </p>
                </div>
              ) : (
                category === item.category && (
                  <div className=" relative p-10">
                    <img src={item.imageUrl} alt={item.imageUrl} />
                    <p className="rounded-lg  text-white absolute top-12 right-12 italic">
                      {item.category}
                    </p>
                    <p className=" py-4 text-sm text-slate-400">{item.date}</p>
                    <p className="pb-2 text-2xl font-bold text-slate-800">
                      {item.title}
                    </p>
                    <p className=" max-w-[310px] text-sm text-slate-400">
                      {item.shortText}
                    </p>
                  </div>
                )
              )}
            </div>
          ))}
      </div>
      <div
        className=" relative text-white"
        style={{
          backgroundImage: `url(${image2})`,
          backgroundSize: "cover",
          height: "600px",
        }}
      >
        <p className=" text-center text-4xl text-white absolute  top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2">
          Richird Norton photorealistic <br /> rendering as real photos
        </p>
        <div className=" mx-auto absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 gap-4">
          <p className=" max-w-xs text-sm text-center">
            Progressively incentivize cooperative systems through technically
            sound functionalities. The credibly productivate seamless data.
          </p>
          <hr className=" w-12 text-center absolute top-24 left-1/2  -translate-y-1/2 -translate-x-1/2" />
          <p className="absolute top-32 text-center  left-1/2  -translate-y-1/2 -translate-x-1/2 ">
            08.08.2021
          </p>
        </div>
      </div>
      <div>
        <h1 className=" text-4xl py-10 px-40 mt-10 font-bold">Editor Pick</h1>
        <div className=" flex justify-evenly flex-wrap text-white ">
          {isSuccess === true &&
            editorPick.map((item) => (
              <div key={item.id} className="p-4 relative">
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
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
