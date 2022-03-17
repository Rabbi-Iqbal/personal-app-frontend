import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import SideBar from "../../components/SideBar";
import { getAllBlogs } from "../../network/blog.api";
import { baseURL } from "../../network/config";
function Blogs() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);

  const handleGetAllBlogs = async () => {
    const res = await getAllBlogs();
    setBlogs(res.data);
  };

  useEffect(() => {
    handleGetAllBlogs();
  }, []);
  return (
    <SideBar>
      <div style={{ padding: 25 }}>
        <Fab
          onClick={() => router.push("/new-blog")}
          size="small"
          color="secondary"
          aria-label="add"
          sx={{
            margin: 0,
            top: "auto",
            right: "20px",
            bottom: "20px",
            left: "auto",
            position: "fixed",
            backgroundColor: "#5D6BA7",
            "&:hover": {
              backgroundColor: "#2d3c7d",
            },
          }}
        >
          <AddIcon />
        </Fab>
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
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
