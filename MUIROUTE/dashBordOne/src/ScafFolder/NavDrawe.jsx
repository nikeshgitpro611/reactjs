import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, List, ListItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DrawerList } from "../MUL";
import { useState } from "react";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const themeStyle = (theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  };
};

const simpleStyle = {
  drawer: {
    width: drawerWidth,
    "& .MuiBackdrop-root": {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#b8beb8",
    elevation: 9,
  },
  ulBackChang: {
    backgroundColor: "#27a627",
  }
};

export default function NavDrawe() {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={themeStyle(theme).appBar}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} noWrap>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer
        disableAutoFocus
        open={true}
        variant="temporary"
        sx={simpleStyle.drawer}
        PaperProps={{
          sx: simpleStyle.drawerPaper,
        }}
      >
        {/* <Toolbar>Test Data</Toolbar> */}
        <Toolbar />
        <List>
          {[
            { text: "Input Form", route: "/form" },
            { text: "Contact Card Grid", route: "/grid" },
            { text: "Contact Table", route: "/table" },
            // { text: "Contact Data Grid", route: "/grid" },
            { text: "Poc Data", route: "/test" },
            { text: "Pagination", route: "/pagination" },
          ].map((nav, index) => (
            <ListItem
              key={index}
              sx={{ fontFamily: "fantasy", textTransform: "capitalize" }}
              // PaperProps= {{sx : simpleStyle.ulBackChang}}
            >
              <Link to={nav.route}>{nav.text}</Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
