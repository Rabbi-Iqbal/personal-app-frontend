import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import SideBar from "../components/SideBar";
import { getAllBlogs } from "../network/blog.api";
import { baseURL } from "../network/config";
function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const handleGetAllBlogs = async () => {
    const res = await getAllBlogs();
    // console.log(res.data)
    setBlogs(res.data);
  };

  useEffect(() => {
    handleGetAllBlogs();
  }, []);
  return (
    <SideBar>
      <div style={{ padding: 25 }}>
        {blogs.map((blog) => (
          <BlogCard
            author="Iqbal Hossain"
            title={blog.title}
            summary={blog.summary}
            imgSrc={`${baseURL}/${blog.image}`}
            date="March 14, 2022"
            readTime={10}
            onClick={() => console.log("card clicked!")}
          />
        ))}
      </div>
    </SideBar>
  );
}

export default Blogs;
