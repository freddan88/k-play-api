const express = require("express");
const app = express();

app.get("/people", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

const PORT = process.env.NODE_ENV == 'production' ? process.env.PORT : 3000;
const BOOT = `Express server started and listening on port: ${PORT}`;
app.listen(PORT, () => console.log(BOOT));