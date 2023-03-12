import { AppBar, Toolbar, styled, Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import React, { useState } from "react";
import { borderRadius, Box } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({ display: "flex", gap: "20px" }));
  const [open, setopen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {" "}
        <PetsIcon sx={{ display: { xs: "block", sm: "block" } }} />{" "}
        {/*to adjust according to screen size */}
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Web application
        </Typography>
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            alt="Ann"
            src="/Users/missaka/Desktop/SLIIT/SelfSutdy/RealWebReact/sample.jpg"
            onClick={(e) => setopen(true)}
          />
        </Icons>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setopen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
