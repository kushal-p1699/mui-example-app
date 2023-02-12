import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

function Feed() {
  return (
    <Box
      flex={5}
      sx={{
        p: 2,
        marginLeft: "0 !important",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}

export default Feed;
