import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SideBar from "../components/SideBar";
import { postBlog } from "../network/blog.api";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";

function MyComponent() {
  const [blog, setBlog] = useState({
    title: "",
    summary: "",
    body: "",
    image: { name: "" },
  });

  const Input = styled("input")({
    display: "none",
  });

  const handlePostBlog = () => {
    const data = new FormData();
    data.append("title", blog.title);
    data.append("summary", blog.summary);
    data.append("body", blog.body);
    data.append("image", blog.image);
    postBlog(data);
  };
  // useEffect(() => setValue(initialValue ?? ""), [initialValue]);

  return (
    <SideBar>
      <div style={{ padding: "15px 25px 25px 25px" }}>
        <div style={{ width: "100%", marginBottom: 10 }}>
          <span style={{ fontWeight: "bold", fontSize: 25 }}>Add New Blog</span>
          <div style={{ display: "flex", alignItems: "center", marginTop: 15 }}>
            <div style={{ flex: 2, paddingRight: 20 }}>
              <Box
                sx={{
                  padding: "10px 0px 10px 0px",
                }}
              >
                <TextField
                  label="Title"
                  value={blog.title}
                  id="fullWidth"
                  onChange={(e) => setBlog({ ...blog, title: e.target.value })}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ sx: { maxWidth: "100%", height: 50 } }}
                  fullWidth
                  // placeholder="Enter title here"
                />
              </Box>
            </div>

            <div
              style={{
                flex: 1,
                height: 50,
                border: "1px solid rgba(0, 0, 0, 0.23)",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                // "&:hover": {
                //   borderColor: "#1976d2"
                // }
              }}
            >
              <label htmlFor="icon-button-file">
                <Input
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  onChange={(e) =>
                    setBlog({ ...blog, image: e.target.files[0] })
                  }
                />
                <IconButton aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
              <div style={{ marginLeft: 5 }}>
                {blog.image.name || "Choose image..."}
              </div>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <TextField
              id="outlined-multiline-flexible"
              label="Summary"
              multiline
              maxRows={4}
              fullWidth
              InputLabelProps={{ shrink: true }}
              InputProps={{ sx: { maxWidth: "100%" } }}
              value={blog.summary}
              onChange={(e) => setBlog({ ...blog, summary: e.target.value })}
            />
          </div>
        </div>

        <Editor
          // initialValue={initialValue}
          value={blog.body}
          onEditorChange={(newValue, editor) =>
            setBlog({ ...blog, body: newValue })
          }
          init={{
            // plugins: 'link image code',
            toolbar:
              "undo redo | bold italic | alignleft aligncenter alignright | code",
            min_height: 500,
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            marginTop: 20,
          }}
        >
          <Button variant="contained" onClick={handlePostBlog}>
            Submit
          </Button>
        </div>
      </div>
    </SideBar>
  );
}

export default MyComponent;
