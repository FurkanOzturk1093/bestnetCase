import React from "react";
import { useParams } from "react-router-dom";
import { useGetBlogsQuery } from "../redux/api/api";
import image from "../images/Image3.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Footer from "./Footer";
import { useNavigate, Link } from "react-router-dom";
import { useDeleteBlogMutation } from "../redux/api/api";
import { toast } from "react-toastify";

const SingleBlogs = () => {
  let { id } = useParams();
  const { data, isSuccess } = useGetBlogsQuery();
  const navigate = useNavigate();
  let singleBlog = isSuccess && data.filter((item) => item.id == id);
  const [deletePost, response] = useDeleteBlogMutation();
  function handleDelete(id) {
    deletePost(id);
    toast.success("Deleted  blog successfully", {
      position: toast.POSITION.TOP_LEFT,
    });
    navigate("/");
  }
  console.log(singleBlog);
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
            <p className=" py-4 "> {singleBlog[0].category} </p>
            <p className="py-2 text-4xl"> {singleBlog[0].title} </p>
            <p className="py-2 text-sm text-gray-300 ">
              {singleBlog[0].shortText}
            </p>
            <p className="py-2 text-sm"> By {singleBlog[0].author} </p>
          </div>
          <p
            onClick={() => navigate("/")}
            className=" cursor-pointer absolute top-5 left-5"
          >
            <ArrowCircleLeftIcon fontSize="large" />
          </p>
        </div>
        <div className=" flex justify-evenly mt-20 max-w-7xl mx-auto tablet:flex-col tablet:items-center tablet:gap-7">
          <div className=" flex justify-evenly w-40 gap-2 text-sm">
            <p>{singleBlog[0].date}</p>
            <p className=" inline-flex ">5 minutes</p>
          </div>
          <div className=" max-w-5xl mx-auto">
            <p className="   leading-7 text-slate-700 tablet:text-sm tablet:p-4">
              {singleBlog[0].longText}
            </p>
            <div className=" flex  gap-4 my-10">
              {isSuccess &&
                singleBlog[0].tags.map((item) => (
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
              By {isSuccess && singleBlog[0].author}
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
            <div className=" flex gap-8  flex-wrap text-white tablet:flex-col tablet:items-center ">
              {isSuccess === true &&
                data.map(
                  (item) =>
                    item.category === singleBlog[0].category && (
                      <div key={item.id} className="relative">
                        <img
                          style={{ width: "390px", height: "390px" }}
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
                        <Link
                          to={`/blog/${item.id}`}
                          className=" text-right text-slate-200 text-sm absolute bottom-7 left-10 max-w-xs"
                        >
                          Read More...
                        </Link>
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
