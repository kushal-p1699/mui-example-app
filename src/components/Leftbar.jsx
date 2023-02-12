import {
  BookmarkBorderOutlined,
  CollectionsOutlined,
  EventNoteOutlined,
  GroupOutlined,
  HomeOutlined,
  MessageOutlined,
  SettingsOutlined,
  SlideshowOutlined,
} from "@mui/icons-material";
import {
  Badge,
  Box,
  ListItemIcon,
  List,
  ListItem,
  Typography,
  ListItemButton,
} from "@mui/material";
import React from "react";

function Leftbar() {
  return (
    <Box flex={1.5} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <HomeOutlined />
              </ListItemIcon>
              <Typography>Home</Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <SlideshowOutlined />
              </ListItemIcon>
              <Typography>Watch</Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <EventNoteOutlined />
              </ListItemIcon>

              <Typography>Events</Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <GroupOutlined />
              </ListItemIcon>

              <Typography>Friends</Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Badge badgeContent={4} color="error">
                  <MessageOutlined />
                </Badge>
              </ListItemIcon>
              <Typography>Messages</Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <CollectionsOutlined />
              </ListItemIcon>
              <Typography>Photos</Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <BookmarkBorderOutlined />
              </ListItemIcon>
              <Typography>Saves</Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <SettingsOutlined />
              </ListItemIcon>
              <Typography>Settings</Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Leftbar;
