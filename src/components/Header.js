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
    <AppBar
      position="static"
      style={{ backgroundColor: "#fff", transform: "translateZ(0)" }}
    >
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item sm={4}>
            <InputBase
              fullWidth
              placeholder="Search topics"
              startAdornment={<Search color="primary" fontSize="small" />}
              sx={{
                opacity: "0.6",
                padding: "0px 8px",
                fontSize: "0.8rem",
                // gap: "10px",
                ":hover": { backgroundColor: "#f2f2f2", borderRadius: "100px" },
                ".MuiSvgIcon-root": { marginRight: "8px" },
              }}
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
