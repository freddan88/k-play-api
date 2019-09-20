const express = require("express");
const app = express();

const audio = require('./responses/audio-new')
const video = require('./responses/video-new_2')
const data = audio.concat(video)

app.get('/', (req, res) => {
    res.send(data)
  })

app.get("/people", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

const PORT = process.env.NODE_ENV == 'production' ? process.env.PORT : 3000;
const BOOT = `Express server started and listening on port: ${PORT}`;
app.listen(PORT, () => console.log(BOOT));