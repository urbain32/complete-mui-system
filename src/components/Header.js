import {
  ChatBubbleOutline,
  NotificationsNone,
  PowerSettingsNew,
  Search,
} from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
} from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#fff" }}>
      <Toolbar>
        <Grid container>
          <Grid item>
            <InputBase
              placeholder="Search topics"
              startAdornment={<Search fontSize="small" />}
              sx={{ opacity: "0.6", padding: "0px 8px", fontSize: "0.8rem" }}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNone fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <ChatBubbleOutline fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNew fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
