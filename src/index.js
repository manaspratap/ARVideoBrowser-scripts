const usetube = require("usetube");
const ytdl = require("ytdl-core");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const videoName = "video";

const getVideo = async (keyword) => {
  // search videos
  const video = await usetube.searchVideo(keyword);
  // save videos
  const videoLink = "https://www.youtube.com/watch?v=" + video.videos[0].id;
  return await (
    await ytdl.getBasicInfo(videoLink)
  ).formats[0].url;
};

app.get("/video", async (req, res) => {
  const videoUrl = await getVideo(req.query.name);
  // send path
  res.send(videoUrl);
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    message: "Page not found",
  });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
