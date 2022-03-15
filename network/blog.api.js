import axiosClient from "./config";

export function postBlog(blog) {
  return axiosClient.post("/blog", blog);
}

export default {
  postBlog,
};
