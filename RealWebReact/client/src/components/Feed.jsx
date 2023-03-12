import { Box } from "@mui/material";
import React from "react";
import Posts from "./Posts";

const Feed = () => {
  return (
    <Box flex={4} padding={2}>
      <Posts />
      <Posts
        image="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        title="food1"
      />
      <Posts />
      <Posts />
    </Box>
  );
};

export default Feed;
