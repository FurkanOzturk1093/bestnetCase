import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/blogs" }),
  reducerPath: "adminApi",
  tagTypes: ["Blogs"],
  endpoints: (build) => ({
    getBlogs: build.query({
      query: () => "/",
      providesTags: ["Blogs"],
    }),
    deleteBlog: build.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Blogs"],
    }),
    createBlog: build.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Blogs"],
    }),
  }),
});
export const {
  useGetBlogsQuery,
  useDeleteBlogMutation,
  useCreateBlogMutation,
} = api;
