import axiosClient from "./config";

const getSingleBlog = (id) => {
  return axiosClient.get(`/blog/${id}`);
};

const postBlog = (blog) => {
  return axiosClient.post("/blog", blog);
};

const getAllBlogs = () => {
  return axiosClient.get("/blogs");
};

export { getSingleBlog, postBlog, getAllBlogs };
