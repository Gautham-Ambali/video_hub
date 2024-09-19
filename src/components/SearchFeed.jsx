import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Videos } from "./";
import { options } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const {searchTerm}=useParams();
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(
        `https://youtube-v31.p.rapidapi.com/search?q=${searchTerm}&part=snippet&maxResults=50`,
        options
      );
      const data = await resp.json();
      setVideos(data.items);
    }
    fetchData();
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }} fontFamily="math">
        Search Results For:<span style={{ color: "rgb(3 147 252)" }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
