import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SideBar from "../components/SideBar";
import { postBlog } from "../network/blog.api"

function MyComponent() {

  const [blog, setBlog] = useState({
    title: '',
    body: '',
  })
  // useEffect(() => setValue(initialValue ?? ""), [initialValue]);

  return (
    <SideBar>
      <div style={{ padding: 25 }}>
        <div style={{ width: '100%', marginBottom: 10 }}>
          <span style={{ fontWeight: 'bold', fontSize: 25 }}>Add New Blog</span>
          <Box
            sx={{
              padding: '10px 0px 10px 0px'
            }}
          >
            <TextField
              value={blog.titile}
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
              InputProps={{ sx: { maxWidth: '100%', height: 50 } }}
              fullWidth
              placeholder="Enter title here" id="fullWidth" />
          </Box>

        </div>

        <Editor
          // initialValue={initialValue}
          value={blog.body}
          onEditorChange={(newValue, editor) => setBlog({ ...blog, body: newValue })}
          init={{
            // plugins: 'link image code',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
            min_height: 500
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', marginTop: 20 }}>
          <Button variant="contained" onClick={() => postBlog(blog)}>Submit</Button>
        </div>
      </div>
    </SideBar>
  );
}

export default MyComponent;
