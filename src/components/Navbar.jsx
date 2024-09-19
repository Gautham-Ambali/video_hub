import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import Logo33 from "../utils/Logo33.png"
import {SearchBar} from "./"
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="container"
    p={2}
    sx={{ position: "sticky", backgroundColor :"#000",top:0,justifyContent:"space-between"}}

  >
    <Link to="/" style={{display:"flex",alignItems:"center"}}>
    <img src={Logo33} alt="logo" height={30} style={{marginLeft:"12px"}} />
    
    </Link>
    <SearchBar/>
  </Stack>
);

export default Navbar;
