import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import { getSingleBlog } from "../../network/blog.api";
import { baseURL } from "../../network/config";
import styles from "../../styles/Blog.module.scss";

function Blog() {
  const router = useRouter();

  const [blog, setBlog] = useState({
    _id: "",
    status: "",
    title: "",
    summary: "",
    body: "",
    image: "",
    createdAt: "",
    updatedAt: "",
  });

  const handleGetSingleBlog = async () => {
    const res = await getSingleBlog(router.query.id);
    if (res.data.hasOwnProperty("_id")) {
      setBlog(res.data);
    }
  };
  useEffect(() => {
    if (router.query.id) {
      handleGetSingleBlog();
    }
  }, [router.query.id]);

  return (
    <SideBar>
      <div style={{ padding: 25, display: "flex", justifyContent: "center" }}>
        {blog._id != "" && (
          <div className={styles.container}>
            <div className={styles.author}>
              <PersonIcon sx={{ fontSize: "15px", marginRight: "5px" }} />
              <div className={styles.metaData}>{"Iqbal Hossain"}</div>
            </div>
            <div className={styles.title}>{blog.title}</div>

            <div className={styles.metaData} style={{ marginTop: "5px" }}>
              <span>{"March 17, 2022"}</span>
              <span> • </span>
              <span>{"20"} min read</span>
            </div>

            <div className={styles.summary}>{blog.summary}</div>

            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={`${baseURL}/${blog.image}`}
              ></img>
            </div>

            <div dangerouslySetInnerHTML={{ __html: blog.body }} />
          </div>
        )}
      </div>
    </SideBar>
  );
}

export default Blog;
