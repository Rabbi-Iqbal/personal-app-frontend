import axiosClient from "./config";

const postBlog = (blog) => {
  return axiosClient.post("/blog", blog);
};

const getAllBlogs = () => {
  return axiosClient.get("/blogs");
};

export {
  postBlog,
  getAllBlogs,
};
