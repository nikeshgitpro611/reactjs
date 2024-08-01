import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {  Drawer, List, ListItem, paperClasses } from "@mui/material";
import { DrawerList } from "../MUL";
import { useState } from "react";
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";

const drawerWidth = 240;
const simpleStyle = {
  drawer:{
    width: drawerWidth,
    "& .MuiBackdrop-root" : {
      display : 'none',
    }
  },
  drawerPaper : {
    width: drawerWidth,
    backgroundColor: 'brown'
  }
} 


export default function NavDrawe() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: 9999,
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} noWrap>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer open={true} variant="temporary" sx={simpleStyle.drawer}>
        {/* <Toolbar>Test Data</Toolbar> */}
        <List>
          {[
            { text: "Input Form", route: "/form" },
            { text: "Contact Card Grid", route: "/grid" },
            { text: "Contact Table", route: "/table" },
            { text: "Contact Data Grid", route: "/grid" },
          ].map((nav, index) => (
            <ListItem key={index} disablePadding sx={{background: '#000'}} >
              <Link to={nav.route}>{nav.text}</Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
