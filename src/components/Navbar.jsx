import { useState } from "react";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/CancelRounded";
import {
  alpha,
  AppBar,
  Badge,
  Box,
  IconButton,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu, Message } from "@mui/icons-material";

const Search = styled("div")(({ theme, show }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  width: "70%",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  display: show ? "flex" : "none",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "auto",
    display: "flex",
  },
  alignItems: "center",
  justifyContent: "space-evenly",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

function Navbar() {
  const [openSearchbox, setOpenSearchbox] = useState(false);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
          <Menu />
        </IconButton>

        {/* logo */}
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Kushal Dev
        </Typography>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          Kushal
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        {/* search  */}
        <Search show={openSearchbox}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>

          <StyledInputBase placeholder="Search" />

          <SearchIconWrapper sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton
              size="small"
              color="inherit"
              onClick={() => setOpenSearchbox(false)}
            >
              <CloseIcon />
            </IconButton>
          </SearchIconWrapper>
        </Search>

        {/* menu icons */}

        <Box
          sx={{
            display: { xs: openSearchbox ? "none" : "flex", sm: "flex" },
          }}
        >
          <IconButton
            size="large"
            color="inherit"
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={() => setOpenSearchbox(true)}
          >
            <SearchIcon />
          </IconButton>

          <IconButton size="large" color="inherit">
            <Badge badgeContent={4} color="error">
              <Message />
            </Badge>
          </IconButton>

          <IconButton size="large" color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
