import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SideBar,Videos } from "./";
import { options } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory,setSelectedCategory]=useState("New");
  const [videos,setVideos]=useState([])
  useEffect(()=>{
    async function fetchData() {
        const resp=await fetch(`https://youtube-v31.p.rapidapi.com/search?q=${selectedCategory}&part=snippet&maxResults=50`,options)
        const data=await resp.json()
        setVideos(data.items);
    }
    fetchData();
},[selectedCategory])
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          copyright &copy;
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
          fontFamily="math"
        >
          {selectedCategory} <span style={{color:"rgb(3 147 252)"}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  );
};

export default Feed;
