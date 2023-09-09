import React from "react";
import { useParams } from "react-router-dom";
import { useGetBlogsQuery } from "../redux/api/api";
import image from "../images/Image3.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useDeleteBlogMutation } from "../redux/api/api";
const SingleBlogs = () => {
  let { id } = useParams();
  const { data, isSuccess } = useGetBlogsQuery();
  const navigate = useNavigate();
  let singleBlog = isSuccess && data[id - 1];
  const [deletePost, response] = useDeleteBlogMutation();
  function handleDelete(id) {
    deletePost(id);
    navigate("/");
  }
  return (
    isSuccess === true && (
      <div>
        <div
          className=" relative text-white"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            height: "600px",
          }}
        >
          <div className=" max-w-md absolute bottom-1/2 right-1/2 text-center translate-y-1/2 translate-x-1/2">
            <p className=" py-4 "> {singleBlog.category} </p>
            <p className="py-2 text-4xl"> {singleBlog.title} </p>
            <p className="py-2 text-sm text-gray-300 ">
              {singleBlog.shortText}
            </p>
            <p className="py-2 text-sm"> By {singleBlog.author} </p>
          </div>
        </div>
        <div className=" flex justify-evenly mt-20 max-w-7xl mx-auto">
          <div className=" flex justify-evenly w-40 gap-2">
            <p>{singleBlog.date}</p>
            <p className=" inline-flex">5 minutes</p>
          </div>
          <div className=" max-w-5xl mx-auto">
            <p className="   leading-7 text-slate-700">{singleBlog.longText}</p>
            <div className=" flex  gap-4 my-10">
              {isSuccess &&
                singleBlog.tags.map((item) => (
                  <div
                    key={item}
                    className=" text-xs w-16 border rounded-lg py-1 px text-center"
                  >
                    {item}
                  </div>
                ))}
            </div>
            <button className=" text-red-700" onClick={() => handleDelete(id)}>
              Delete Post
            </button>
            <hr className="max-w-5xl pt-20 " />
            <p className=" text-sm font-bold">
              By {isSuccess && singleBlog.author}
            </p>
            <div className=" flex justify-between items-center pb-24">
              <p className=" text-sm text-[#6C757D]"> Thinker & Designer</p>
              <div className=" flex gap-4">
                <TwitterIcon />
                <FacebookIcon />
                <PinterestIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f3eded42] ">
          <div className=" max-w-7xl mx-auto">
            <h1 className=" text-lg font-bold pt-24 pb-12">Related Posts</h1>
            <div className=" flex gap-8  flex-wrap text-white ">
              {isSuccess === true &&
                data.map(
                  (item) =>
                    item.category === singleBlog.category && (
                      <div key={item.id} className="relative">
                        <img
                          width="390px"
                          height="310px"
                          src={item.imageUrl}
                          alt={item.id}
                        />

                        <p className=" absolute top-6 right-8">
                          {item.category}
                        </p>
                        <p className=" text-slate-200  text-xs absolute top-32 left-10 ">
                          {item.date}
                        </p>
                        <p className=" text-lg font-bold absolute top-40 left-10">
                          {item.title}
                        </p>
                        <p className=" text-slate-200 text-sm absolute top-56 left-10 max-w-xs">
                          {item.shortText}
                        </p>
                      </div>
                    )
                )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  );
};

export default SingleBlogs;
