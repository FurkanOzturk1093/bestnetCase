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
  }),
});
export const { useGetBlogsQuery } = api;
