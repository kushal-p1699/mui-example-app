import { Avatar, AvatarGroup, Box } from "@mui/material";
import React from "react";

function Rightbar() {
  return (
    <Box flex={2} sx={{ display: { xs: "none", sm: "flex" } }}>
      <Box position="fixed">
        <AvatarGroup max={6}>
          <Avatar>K</Avatar>
          <Avatar>PP</Avatar>
          <Avatar>GH</Avatar>
          <Avatar>U</Avatar>
          <Avatar>L</Avatar>
          <Avatar>MM</Avatar>
          <Avatar>G</Avatar>
          <Avatar>K</Avatar>
          <Avatar>K</Avatar>
          <Avatar>K</Avatar>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default Rightbar;
