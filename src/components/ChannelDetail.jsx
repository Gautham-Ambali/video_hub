import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "./";
import { options } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function fetchChannel() {
      const resp = await fetch(
        `https://youtube-v31.p.rapidapi.com/channels?id=${id}&part=snippet`,
        options
      );
      const data = await resp.json();
      setChannelDetail(data?.items[0]);
      console.log(data?.items[0]);
    }
    async function fetchChannelVideos() {
      const resp = await fetch(
        `https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet&maxResults=50&order=date`,
        options
      );
      const data = await resp.json();
      setVideos(data?.items);
      console.log(data?.items);
    }
    fetchChannel();
    fetchChannelVideos();
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(146deg, rgba(255,255,255,1) 0%, rgba(0,125,255,0.4150035014005602) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2px">
          <Box sx={{mr:{sm:"100px"}}} />
          <Videos videos={videos}/>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
